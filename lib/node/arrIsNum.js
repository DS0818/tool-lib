//数组的指定位置是不是数字
let arrIsNum = (data, num) => {
    return new Promise((resolve) => {
        const regExp = /^[1-9]\d{2,5}$/; //正则匹配
        if (regExp.test(data[num])) {
            resolve(true);
        }else{
            resolve(false);
        }
    })
}

module.exports=arrIsNum;