class Base {
    constructor() {

    }
    //判断类型
    type(obj){
        let str = Object.prototype.toString.call(obj);
        return str.slice(str.indexOf(` `) + 1, str.length - 1);
    };

}

module.exports=Base;