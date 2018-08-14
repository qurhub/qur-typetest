import * as fs from "fs"
import * as path from "path"
import { CONSTANTS } from "./CST"
import { guards } from "./VAR.guards"

export function getTestfiles(): string[] {
    const dir = CONSTANTS.TESTFILES_DIR

    guards.testfilesDirectoryMustExist(dir)

    // https://gist.github.com/kethinov/6658166#gistcomment-1921157
    return fs.readdirSync(dir)
        .filter((file) => {
            return file.endsWith(".ts")
        })
        .map((file) => {
            return path.join(dir, file)
        })
}
