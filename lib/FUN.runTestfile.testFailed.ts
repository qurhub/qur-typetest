import * as tss from "ts-simple-ast"
import { actualErrorMsg } from "./FUN.runTestfile.testFailed.actualErrorMsg"
import { shouldThrow } from "./FUN.runTestfile.testFailed.shouldThrow"

interface ErrorMessage {
    msg: string,
    location: string
}

export function testFailed(filename: string, diagnostics: tss.Diagnostic[]): false | ErrorMessage[] {

    const errorMsgs: ErrorMessage[] = []

    diagnostics.some((d) => {

        if (d.getCategory() === tss.DiagnosticCategory.Error) {

            const actualErrorMessage = actualErrorMsg(d)
            const errorMessageThatShouldBeThrown = shouldThrow(d)
            const filePath = d.getSourceFile()!.getFilePath()

            if (errorMessageThatShouldBeThrown) {
                // file should have failed (and failed)

                if (actualErrorMessage.includes(errorMessageThatShouldBeThrown)) {
                    return false
                }

                errorMsgs.push({
                    location: `  at ${filePath}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${filePath} was expected to fail with a message

    ${errorMessageThatShouldBeThrown}

  but failed with

    ${actualErrorMessage}`,
                })

                return true
            } else {
                // file should have NOT failed (but failed)

                errorMsgs.push({
                    location: `  at ${filePath}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${actualErrorMessage}`,
                })

                return true
            }
        }

        return false
    })

    return errorMsgs || false
}
