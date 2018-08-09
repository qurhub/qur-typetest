"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function actualErrorMsg(d, parent) {
    const msg = d.getMessageText();
    if (typeof msg === "object") {
        let result = `TS${msg.getCode()}: ${msg.getMessageText()}`;
        if (parent) {
            result = `${parent}\r\n\t${result}`;
        }
        if (msg.getNext()) {
            return actualErrorMsg(msg.getNext(), result);
        }
        else {
            return result;
        }
    }
    return `TS${d.getCode()}: ${msg}`;
}
exports.actualErrorMsg = actualErrorMsg;
