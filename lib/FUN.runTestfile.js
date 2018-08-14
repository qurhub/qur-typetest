"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const ts_simple_ast_1 = require("ts-simple-ast");
const FUN_getTsConfigJSON_1 = require("./FUN.getTsConfigJSON");
const FUN_runTestfile_testFailed_1 = require("./FUN.runTestfile.testFailed");
const VAR_state_1 = require("./VAR.state");
function diagnose(fileName, compilerOptions) {
    const project = new ts_simple_ast_1.default();
    project.addExistingSourceFile(fileName);
    const diagnostics = project.getPreEmitDiagnostics();
    const failedMsgs = FUN_runTestfile_testFailed_1.testFailed(fileName, diagnostics);
    if (failedMsgs && failedMsgs.length) {
        VAR_state_1.iterateTestfilesState.incrementFailed();
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.red(`  ✗ ` + chalk_1.default.gray(fileName)));
        // todo test that if multiple errors exist, only once above line shows
        failedMsgs.forEach((failedMsg) => {
            // tslint:disable-next-line:no-console
            console.log(chalk_1.default.red(`\r\n  ${failedMsg.msg}\r\n`));
            // tslint:disable-next-line:no-console
            console.log(chalk_1.default.gray(failedMsg.location));
        });
    }
    else {
        VAR_state_1.iterateTestfilesState.incrementPassed();
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.green(`  ✓ ${fileName}`));
    }
}
function runTestfile(filename) {
    diagnose(filename, FUN_getTsConfigJSON_1.getTsconfigJson().config.compilerOptions);
}
exports.runTestfile = runTestfile;
