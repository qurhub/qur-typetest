import * as tss from "ts-simple-ast"

export function shouldThrow(diagnostic: tss.Diagnostic): false | string {
    const fileContents = diagnostic.getSourceFile()!.getFullText()

    const regex = /\/\/\ ?tt:throws:(.+)$/gm

    const matches = regex.exec(fileContents)

    if (matches && matches![1]) {
        const errorMessage = matches![1].trim()
        return errorMessage
    }

    return false
}