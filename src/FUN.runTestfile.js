"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const FUN_getTsConfigJSON_1 = require("./FUN.getTsConfigJSON");
function _compile(fileNames, options) {
    const program = ts.createProgram(fileNames, options);
    const emitResult = program.emit();
    const allDiagnostics = ts
        .getPreEmitDiagnostics(program)
        .concat(emitResult.diagnostics);
    allDiagnostics.forEach(diagnostic => {
        if (diagnostic.file) {
            const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
            const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
            console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
        }
        else {
            console.log(`${ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")}`);
        }
    });
    const exitCode = emitResult.emitSkipped ? 1 : 0;
    console.log(`Process exiting with code '${exitCode}'.`);
    process.exit(exitCode);
}
function runTestfile(filename) {
    console.log(FUN_getTsConfigJSON_1.getTsconfigJson()); // TODO DELETE
    process.exit();
    return _compile([filename], FUN_getTsConfigJSON_1.getTsconfigJson());
}
exports.runTestfile = runTestfile;
