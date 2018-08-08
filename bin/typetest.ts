#!/usr/bin/env node

// TODO!!! IMPORTANT!!! DO THIS FIRST! current implementation cannot do things like
// expect(__testfile__).toThrow('')
// todo typetest init (creates test/qur-typetest and add exclude to tsconfig)
// todo typetest create
// todo test: passed/failed counters are correct
// todo test: create tests and run them in CI
// todo fix always showing 0/n passed
// todo publish this as a typetest (later in future, move it to @qur/typetest)
// todo look make more like mocha http://unitjs.com/assets/img/screen_console_unitjs_and_mocha_demo2.png

import * as yargs from "yargs"
import { getTestfiles } from "../lib/FUN.getTestfiles"
import { printResults } from "../lib/FUN.printResults"
import { runTestfile } from "../lib/FUN.runTestfile"
import { iterateTestfilesState } from "../lib/Var.state"

// tslint:disable-next-line:no-unused-expression
yargs
    .command("*", "checks every file in test/qur-typetest", {}, () => {
        getTestfiles().forEach((testfile) => {
            iterateTestfilesState.increment()
            runTestfile(testfile)
        })

        printResults()

        if (iterateTestfilesState.failed) {
            process.exit(1)
        }

        return process.exit(0)
    })
    .command(["init", "i"], "create test", {}, () => {
        console.log("foo") // TODO DELETE

    })
    .argv
