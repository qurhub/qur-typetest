#!/usr/bin/env node

// require('yargs')
// .command('register')

import { getTestfiles } from "../FUN.getTestfiles"
import { runTestfile } from "../FUN.runTestfile"

getTestfiles().forEach((testfile) => {
    runTestfile(testfile)
})

/**
 * todo i need typescript here.
 * this file has no extension that's why 
 * i need local ts, that maps source to output correctly
 */


// todo auto generate api key server side, save to server and client in .nyanconf