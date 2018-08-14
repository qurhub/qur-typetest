#!/usr/bin/env node

// todo typetest init (creates test/qur-typetest and add exclude to tsconfig)
// todo typetest create
// todo test: passed/failed counters are correct
// todo test: create tests and run them in CI

import * as yargs from "yargs"
import { createTestFolder } from "../lib/FUN.createTestFolder"
import { getTestfiles } from "../lib/FUN.getTestfiles"
import { printResults } from "../lib/FUN.printResults"
import { runTestfile } from "../lib/FUN.runTestfile"
import { iterateTestfilesState } from "../lib/VAR.state"

// tslint:disable-next-line:no-unused-expression
yargs
    .command("*", "checks every file in test/qur-typetest", (argv: yargs.Argv) => {
        return argv.positional("filter", {
            describe: "filter file names",
        })
    }, (argv: { [key: string]: string }) => {

        getTestfiles().forEach((testfile) => {
            if (argv.filter) {
                if (!testfile.includes(argv.filter)) {
                    return
                }
            }
            iterateTestfilesState.increment()
            runTestfile(testfile)
        })

        printResults()

        if (iterateTestfilesState.failed) {
            process.exit(1)
        }

    })
    .command(["init", "i"], "create test", {}, () => {

        createTestFolder()
        // todo
        // addExcludeToTsconfig()

    })
    .argv
