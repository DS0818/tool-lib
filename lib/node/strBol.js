/**
 * 字符串boolean转boolean
 */
module.exports=(str) => {
    return new Promise((resolve) => {
        if (str === 'true') {
            resolve(true);
            return;
        };
        if (str === 'false') {
            resolve(false);
            return;
        }
    })
}