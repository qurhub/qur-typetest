"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const ts_simple_ast_1 = require("ts-simple-ast"), tss = ts_simple_ast_1;
const FUN_getTsConfigJSON_1 = require("./FUN.getTsConfigJSON");
const Var_state_1 = require("./Var.state");
function diagnose(fileName, compilerOptions) {
    const project = new ts_simple_ast_1.default();
    project.addExistingSourceFile(fileName);
    const diagnostics = project.getDiagnostics();
    let failed = false;
    if (diagnostics.some((d) => {
        return d.getCategory() === tss.DiagnosticCategory.Error;
    })) {
        Var_state_1.iterateTestfilesState.incrementFailed();
        failed = true;
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.red(`  ✗ ${fileName}`));
        diagnostics.forEach((d) => {
            // tslint:disable-next-line:no-console
            console.log(chalk_1.default.red(`\r\n  ${d.getMessageText()}\r\n`));
            // tslint:disable-next-line:no-console
            console.log(chalk_1.default.gray(`  at ${fileName}:${d.getLineNumber()}:${d.getStart()}`));
        });
    }
    else {
        // tslint:disable-next-line:no-console
        console.log(chalk_1.default.green(`  ✓ ${fileName}`));
    }
}
function runTestfile(filename) {
    diagnose(filename, FUN_getTsConfigJSON_1.getTsconfigJson().config.compilerOptions);
}
exports.runTestfile = runTestfile;
