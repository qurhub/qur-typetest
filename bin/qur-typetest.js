#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const FUN_createTestFolder_1 = require("../lib/FUN.createTestFolder");
const FUN_getTestfiles_1 = require("../lib/FUN.getTestfiles");
const FUN_printResults_1 = require("../lib/FUN.printResults");
const FUN_runTestfile_1 = require("../lib/FUN.runTestfile");
const VAR_state_1 = require("../lib/VAR.state");
// tslint:disable-next-line:no-unused-expression
yargs
    .command("*", "checks every file in test/qur-typetest", (argv) => {
    return argv.positional("filter", {
        describe: "filter file names",
    });
}, (argv) => {
    FUN_getTestfiles_1.getTestfiles().forEach((testfile) => {
        if (argv.filter) {
            if (!testfile.includes(argv.filter)) {
                return;
            }
        }
        VAR_state_1.iterateTestfilesState.increment();
        FUN_runTestfile_1.runTestfile(testfile);
    });
    FUN_printResults_1.printResults();
    if (VAR_state_1.iterateTestfilesState.failed) {
        process.exit(1);
    }
})
    .command(["init", "i"], "create test", {}, () => {
    FUN_createTestFolder_1.createTestFolder();
    // todo
    // addExcludeToTsconfig()
})
    .argv;
