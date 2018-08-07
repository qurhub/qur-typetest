"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const CST_1 = require("./CST");
// todo IMPORTANT replace this errors with qur-error
exports.guards = {
    testfilesDirectoryMustExist(dir) {
        if (!fs.existsSync(dir)) {
            throw new Error(`command "${CST_1.CONSTANTS.CMD.TYPETEST.NAME}" requires ${dir} directory
            to exist. The directory also is supposed to contain test files`);
        }
    },
    tsconfigJsonFileMustExist(file) {
        if (!fs.existsSync(file)) {
            throw new Error(`Typescript config file ${file} was not found`);
        }
    },
};
