"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const Var_state_1 = require("./Var.state");
function printResults() {
    // tslint:disable-next-line:no-console
    console.log(chalk_1.default.green(`\r\n  ${Var_state_1.iterateTestfilesState.counter} passing \r\n`));
}
exports.printResults = printResults;
