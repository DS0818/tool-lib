//比较json里的值，如果匹配返回true
const dataType = require('./dataType'); //数据类型
/**
 * @param {JSON} json 
 * @param {any} value 
 */
module.exports =(json, value) => {
    return new Promise(async (resolve) => {
        //判断是不是json
        if (await dataType(json) !== 'Object') {
            console.log(`传入的是:${await dataType(json)},请传入JSON!`)
            return;
        }
        if (value) {
            for (let key in json) {
                if (json[key] == value) {
                    resolve(true);
                }
            }
        }
    })
}