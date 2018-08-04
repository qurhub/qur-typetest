import * as fs from "fs"
import { guards } from "./VAR.guards"

// todo test
export function getTestfiles(): string[] {
    const dir = "./test/qur-types"

    guards.testfilesDirectoryMustExist(dir)

    return fs.readdirSync(dir)
}
