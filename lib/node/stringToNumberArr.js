//把数字字符串数组转成数组
let stringToNumberArr=(data) => {
    return new Promise((resolve) => {
        let arr= data.split(',');
        let newArr=[];
        for(let i=0;i<arr.length;i++){
            newArr.push(Number.parseFloat(arr[i]));
        }
        resolve(newArr);
        return;
    })
}
module.exports=stringToNumberArr;