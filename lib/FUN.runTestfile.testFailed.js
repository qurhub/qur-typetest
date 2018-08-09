"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tss = require("ts-simple-ast");
const FUN_runTestfile_testFailed_shouldThrow_1 = require("./FUN.runTestfile.testFailed.shouldThrow");
function testFailed(filename, diagnostics) {
    const errorMsgs = [];
    diagnostics.some((d) => {
        if (d.getCategory() === tss.DiagnosticCategory.Error) {
            const errorMessageThatShouldBeThrown = FUN_runTestfile_testFailed_shouldThrow_1.shouldThrow(d);
            if (errorMessageThatShouldBeThrown) {
                // file should have failed (and failed)
                const actualErrorMessage = d.getMessageText().toString();
                if (actualErrorMessage.includes(errorMessageThatShouldBeThrown)) {
                    return false;
                }
                errorMsgs.push({
                    location: `  at ${filename}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${filename} was expected to fail with a message

    ${errorMessageThatShouldBeThrown}

  but failed with

    ${actualErrorMessage}`,
                });
                return true;
            }
            else {
                // file should have NOT failed (but failed)
                errorMsgs.push({
                    location: `  at ${filename}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: d.getMessageText().toString(),
                });
                return true;
            }
        }
        return false;
    });
    return errorMsgs || false;
}
exports.testFailed = testFailed;
