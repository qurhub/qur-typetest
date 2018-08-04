#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FUN_getTestfiles_1 = require("../FUN.getTestfiles");
const FUN_runTestfile_1 = require("../FUN.runTestfile");
FUN_getTestfiles_1.getTestfiles().forEach((testfile) => {
    FUN_runTestfile_1.runTestfile(testfile);
});
/**
 * todo i need typescript here.
 * this file has no extension that's why
 * i need local ts, that maps source to output correctly
 */
// todo auto generate api key server side, save to server and client in .nyanconf
