import { readFileSync } from "fs"
import * as ts from "typescript"
import { guards } from "./VAR.guards"

export function getTsconfigJson() {

    const tsconfFile = "./tsconfig.json"

    guards.tsconfigJsonFileMustExist(tsconfFile)

    const contents = readFileSync(tsconfFile).toString()

    return ts.parseConfigFileTextToJson(tsconfFile, contents)
}
