import chalk from "chalk"
import Project, * as tss from "ts-simple-ast"
import { getTsconfigJson } from "./FUN.getTsConfigJSON"
import { testFailed } from "./FUN.runTestfile.testFailed"
import { iterateTestfilesState } from "./VAR.state"

function diagnose(fileName: string, compilerOptions: tss.CompilerOptions) {
    const project = new Project()
    project.addExistingSourceFile(fileName)

    const diagnostics = project.getPreEmitDiagnostics()
    const failedMsgs = testFailed(fileName, diagnostics)

    if (failedMsgs && failedMsgs.length) {
        iterateTestfilesState.incrementFailed()

        // tslint:disable-next-line:no-console
        console.log(chalk.red(`  ✗ ` + chalk.gray(fileName)))
        // todo test that if multiple errors exist, only once above line shows

        failedMsgs.forEach((failedMsg) => {
            // tslint:disable-next-line:no-console
            console.log(chalk.red(`\r\n  ${failedMsg.msg}\r\n`))
            // tslint:disable-next-line:no-console
            console.log(chalk.gray(failedMsg.location))
        })
    } else {
        iterateTestfilesState.incrementPassed()

        // tslint:disable-next-line:no-console
        console.log(chalk.green(`  ✓ ${fileName}`))
    }
}

export function runTestfile(filename: string) {
    diagnose(filename, getTsconfigJson().config.compilerOptions)
}
