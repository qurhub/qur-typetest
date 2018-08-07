"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const VAR_guards_1 = require("./VAR.guards");
function getTestfiles() {
    const dir = "./test/qur-types";
    VAR_guards_1.guards.testfilesDirectoryMustExist(dir);
    // https://gist.github.com/kethinov/6658166#gistcomment-1921157
    return fs.readdirSync(dir)
        .filter((file) => {
        return file.endsWith(".ts");
    })
        .map((file) => {
        return path.join(dir, file);
    });
}
exports.getTestfiles = getTestfiles;
