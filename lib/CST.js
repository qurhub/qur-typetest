"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONSTANTS = {
    CMD: {
        TYPETEST: {
            NAME: "qur-typetest",
        },
    },
    get TESTFILES_DIR() {
        return "./test/" + exports.CONSTANTS.CMD.TYPETEST.NAME;
    },
};
