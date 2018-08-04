"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const VAR_guards_1 = require("./VAR.guards");
// todo test
function getTestfiles() {
    const dir = "./test/qur-types";
    VAR_guards_1.guards.testfilesDirectoryMustExist(dir);
    return fs.readdirSync(dir);
}
exports.getTestfiles = getTestfiles;
