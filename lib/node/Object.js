const Base = require('./Base'); //基础
class Object extends Base {
    isObject(value) {
        const type = this.type(value); //传入的类型
        if (type == 'Object') {
            return true;
        }
        console.log(`传入的是:${type},请传入JSON!`);
        return false;
    }
    //比较json里的值，如果匹配返回true
    compare(json, value) {
        if (!this.isObject(json)) {
            return;
        }
        if (value) {
            for (let key in json) {
                if (json[key] == value) {
                    return true;
                }
            }
        }
    };
    //对象是不是为空
    isEmpty(value) {
        if (!this.isObject(value)) {
            return;
        }
        for (let key in value) {
            return false;
        }
        return true;
    }
}
module.exports = Object;