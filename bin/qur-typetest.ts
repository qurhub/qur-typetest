#!/usr/bin/env node

// require('yargs')
// .command('register')

import { getTestfiles } from "../lib/FUN.getTestfiles"
import { printResults } from "../lib/FUN.printResults"
import { runTestfile } from "../lib/FUN.runTestfile"
import { iterateTestfilesState } from "../lib/Var.state"

getTestfiles().forEach((testfile) => {
    iterateTestfilesState.increment()

    runTestfile(testfile)
})

printResults()

if (iterateTestfilesState.failed) {
    process.exit(1)
}
