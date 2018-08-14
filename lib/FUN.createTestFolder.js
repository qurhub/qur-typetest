"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const mkdirp = require("mkdirp");
const CST_1 = require("./CST");
function createTestFolder() {
    const dir = CST_1.CONSTANTS.TESTFILES_DIR;
    mkdirp(dir, (err) => {
        if (err) {
            throw err;
        }
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.green(dir + " created")); // TODO DELETE
    });
}
exports.createTestFolder = createTestFolder;
