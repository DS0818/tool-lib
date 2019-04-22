const dataType=require('./dataType');//返回数据类型
/**
 * 返回最接近值的索引
 * @param {Array} arr 
 * @param {number} val 
 */
module.exports=(arr,val) => {
    return new  Promise(async (resolve,reject) => {
        const bol1=await dataType(arr);//传入值的类型
        const bol2=await dataType(val);//传入值的类型
        if('Array'!=bol1){
            reject(`${arr}:no Array!`);
            return;
        }
        if('Number'!=bol2){
            reject(`${val}:no Number!`);
            return;
        }
        let newArr=[];//新数组
        for(let i=0;i<arr.length;i++){
            newArr.push(Math.abs(arr[i]-val));
        }
        resolve([...newArr].indexOf(newArr.sort()[0]));
    })
}