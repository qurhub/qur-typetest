"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shouldThrow(diagnostic) {
    const fileContents = diagnostic.getSourceFile().getFullText();
    const regex = /\/\/\ ?tt:throws:(.+)$/gm;
    const matches = regex.exec(fileContents);
    if (matches && matches[1]) {
        const errorMessage = matches[1].trim();
        return errorMessage;
    }
    return false;
}
exports.shouldThrow = shouldThrow;
