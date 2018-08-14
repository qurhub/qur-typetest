export const iterateTestfilesState = {
    counter: 0,
    failed: 0,
    passed: 0,
    increment() {
        this.counter++
    },
    incrementFailed() {
        this.failed++
    },
    incrementPassed() {
        this.passed++
    },
}
