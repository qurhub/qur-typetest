import * as tss from "ts-simple-ast"

export function actualErrorMsg(d: tss.Diagnostic | tss.DiagnosticMessageChain, parent?: string): string {

    const msg = d.getMessageText()

    if (typeof msg === "object") {
        let result = `TS${msg.getCode()}: ${msg.getMessageText()}`

        if (parent) {
            result = `${parent}\r\n\t${result}`
        }

        if (msg.getNext()) {
            return actualErrorMsg(msg.getNext()!, result)
        } else {
            return result
        }
    }

    return `TS${d.getCode()}: ${msg}`
}
