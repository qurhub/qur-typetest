export const CONSTANTS = {
    CMD: {
        TYPETEST: {
            NAME: "qur-typetest",
        },
    },
    get TESTFILES_DIR() {
        return "./test/" + CONSTANTS.CMD.TYPETEST.NAME
    },
}
