import chalk from "chalk"
import { iterateTestfilesState } from "./Var.state"

export function printResults() {
    const state = iterateTestfilesState

    if (state.failed) {
        // tslint:disable-next-line:no-console
        console.log(chalk.red(`\r\n  ${state.failed}/${state.counter} failed`))
    }

    // tslint:disable-next-line:no-console
    console.log(chalk.green(`  ${state.passed}/${state.counter} passed \r\n`))
}
