//把所有类型文件转换成字符串返回
let dataType=(obj)=>{
    return new Promise((resolve) => {
        let str=Object.prototype.toString.call(obj);
        resolve(str.slice(str.indexOf(` `)+1,str.length-1));
        return;
    })
};
module.exports=dataType;