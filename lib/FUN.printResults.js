"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const VAR_state_1 = require("./VAR.state");
function printResults() {
    const state = VAR_state_1.iterateTestfilesState;
    if (state.failed) {
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.red(`\r\n  ${state.failed}/${state.counter} failed`));
    }
    // tslint:disable-next-line:no-console
    console.log(chalk_1.default.green(`  ${state.passed}/${state.counter} passed \r\n`));
}
exports.printResults = printResults;
