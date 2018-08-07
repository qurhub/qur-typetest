#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FUN_getTestfiles_1 = require("../lib/FUN.getTestfiles");
const FUN_printResults_1 = require("../lib/FUN.printResults");
const FUN_runTestfile_1 = require("../lib/FUN.runTestfile");
const Var_state_1 = require("../lib/Var.state");
FUN_getTestfiles_1.getTestfiles().forEach((testfile) => {
    Var_state_1.iterateTestfilesState.increment();
    FUN_runTestfile_1.runTestfile(testfile);
});
FUN_printResults_1.printResults();
if (Var_state_1.iterateTestfilesState.failed) {
    process.exit(1);
}
