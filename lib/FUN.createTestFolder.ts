import chalk from "chalk"
import * as mkdirp from "mkdirp"
import { CONSTANTS } from "./CST"

export function createTestFolder() {

    const dir = CONSTANTS.TESTFILES_DIR

    mkdirp(dir, (err) => {
      if (err) {
          throw err
      }

      // tslint:disable-next-line:no-console
      console.log(chalk.green(dir + " created")) // TODO DELETE
    })
}
