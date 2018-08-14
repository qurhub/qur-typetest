"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterateTestfilesState = {
    counter: 0,
    failed: 0,
    passed: 0,
    increment() {
        this.counter++;
    },
    incrementFailed() {
        this.failed++;
    },
    incrementPassed() {
        this.passed++;
    },
};
