import * as tss from "ts-simple-ast"
import { shouldThrow } from "./FUN.runTestfile.testFailed.shouldThrow"

interface ErrorMessage {
    msg: string,
    location: string
}

export function testFailed(filename: string, diagnostics: tss.Diagnostic[]): false | ErrorMessage[] {

    const errorMsgs: ErrorMessage[] = []

    diagnostics.some((d) => {

        if (d.getCategory() === tss.DiagnosticCategory.Error) {

            const errorMessageThatShouldBeThrown = shouldThrow(d)

            if (errorMessageThatShouldBeThrown) {
                // file should have failed (and failed)

                const actualErrorMessage = d.getMessageText().toString()
                if (actualErrorMessage.includes(errorMessageThatShouldBeThrown)) {
                    return false
                }

                errorMsgs.push({
                    location: `  at ${filename}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: `${filename} was expected to fail with a message

    ${errorMessageThatShouldBeThrown}

  but failed with

    ${actualErrorMessage}`,
                })

                return true
            } else {
                // file should have NOT failed (but failed)

                errorMsgs.push({
                    location: `  at ${filename}:${d.getLineNumber()}:${d.getStart()}`,
                    msg: d.getMessageText().toString(),
                })

                return true
            }
        }

        return false
    })

    return errorMsgs || false
}
