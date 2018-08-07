import * as fs from "fs"
import { CONSTANTS } from "./CST"

// todo IMPORTANT replace this errors with qur-error

export const guards = {
    testfilesDirectoryMustExist(dir: string) {
        if (!fs.existsSync(dir)) {
            throw new Error(`command "${CONSTANTS.CMD.TYPETEST.NAME}" requires ${dir} directory
            to exist. The directory also is supposed to contain test files`)
        }
    },
    tsconfigJsonFileMustExist(file: string) {
        if (!fs.existsSync(file)) {
            throw new Error(`Typescript config file ${file} was not found`)
        }
    },
}
