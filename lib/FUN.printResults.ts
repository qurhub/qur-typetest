import chalk from "chalk"
import { iterateTestfilesState } from "./Var.state"

export function printResults() {

    // tslint:disable-next-line:no-console
    console.log(chalk.green(`\r\n  ${iterateTestfilesState.counter} passing \r\n`))
}
