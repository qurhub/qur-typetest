"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tss = require("ts-simple-ast");
const FUN_runTestfile_testFailed_actualErrorMsg_1 = require("./FUN.runTestfile.testFailed.actualErrorMsg");
const FUN_runTestfile_testFailed_shouldThrow_1 = require("./FUN.runTestfile.testFailed.shouldThrow");
function testFailed(filename, diagnostics) {
    const errorMsgs = [];
    diagnostics.some((d) => {
        if (d.getCategory() === tss.DiagnosticCategory.Error) {
            const actualErrorMessage = FUN_runTestfile_testFailed_actualErrorMsg_1.actualErrorMsg(d);
            const errorMessageThatShouldBeThrown = FUN_runTestfile_testFailed_shouldThrow_1.shouldThrow(d);
            const filePath = d.getSourceFile().getFilePath();
            if (errorMessageThatShouldBeThrown) {
                // file should have failed (and failed)
                if (actualErrorMessage.includes(errorMessageThatShouldBeThrown)) {
                    return false;
                }
                errorMsgs.push({
                    location: `  at ${filePath}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${filePath} was expected to fail with a message

    ${errorMessageThatShouldBeThrown}

  but failed with

    ${actualErrorMessage}`,
                });
                return true;
            }
            else {
                // file should have NOT failed (but failed)
                errorMsgs.push({
                    location: `  at ${filePath}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${actualErrorMessage}`,
                });
                return true;
            }
        }
        return false;
    });
    return errorMsgs || false;
}
exports.testFailed = testFailed;
