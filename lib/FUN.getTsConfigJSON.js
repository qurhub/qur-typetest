"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const ts = require("typescript");
const VAR_guards_1 = require("./VAR.guards");
function getTsconfigJson() {
    const tsconfFile = "./tsconfig.json";
    VAR_guards_1.guards.tsconfigJsonFileMustExist(tsconfFile);
    const contents = fs_1.readFileSync(tsconfFile).toString();
    return ts.parseConfigFileTextToJson(tsconfFile, contents);
}
exports.getTsconfigJson = getTsconfigJson;
