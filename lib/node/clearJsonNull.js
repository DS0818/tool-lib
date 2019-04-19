const dataType=require('./dataType');
//去除json的空值
let clearJsonNull=(json) => {
    return new Promise(async (resolve) => {
        //判断是不是json
        if(await dataType(json)!=='Object'){
            resolve(json);
            return;
        }
        let val={};
        for(let key in json){
            if(await dataType(json[key])==='Object'){
                //出现json嵌套就再执行一遍
                val[key]=clearJsonNull(json[key]);
            }else if(json[key]!==null&&json[key]!==undefined&&json[key]!==''){
                val[key]=json[key];
            }
        }
        resolve(val);
        return;
    })
}
module.exports=clearJsonNull;