import chalk from "chalk"
import Project, * as tss from "ts-simple-ast"
import { getTsconfigJson } from "./FUN.getTsConfigJSON"
import { iterateTestfilesState } from "./Var.state"

function diagnose(fileName: string, compilerOptions: tss.CompilerOptions) {
    const project = new Project()
    project.addExistingSourceFile(fileName)

    const diagnostics = project.getPreEmitDiagnostics()

    let failed

    if (diagnostics.some((d) => {
        return d.getCategory() === tss.DiagnosticCategory.Error
    })) {
        if (!failed) {
            iterateTestfilesState.incrementFailed()
            failed = true
        }

        // tslint:disable-next-line:no-console
        console.log(chalk.red(`  ✗ ${fileName}`))

        diagnostics.forEach((d) => {
            // tslint:disable-next-line:no-console
            console.log(chalk.red(`\r\n  ${d.getMessageText()}\r\n`))
            // tslint:disable-next-line:no-console
            console.log(chalk.gray(`  at ${fileName}:${d.getLineNumber()}:${d.getStart()}`))
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
