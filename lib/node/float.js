//取多少位小数
module.exports=(num, n, science=1) => {
    return new Promise((resolve) => {
        const regExp = /^(-?\d+)(\.\d+)?$/; //匹配数字
        const regExp2 = /\./; //匹配.

        //判断传入的是不是数字
        if (!regExp.test(num)) {
            console.log(`传入的不是数字，是${num}`);
            return;
        }

        //如果传来的是整数
        if (!regExp2.test(num)) {
            resolve(num);
            return;
        }

        //浮点数
        const sign = '.'; //小数点
        const arr = num.toString().split(sign);
        let m;
        let arrQ = arr[0];
        let arrH = [];
        let arrC=[];
        //判断小数点是不是多于1个
        if (2 != arr.length) {
            console.log('数字出错');
            return;
        }

        //如果0，使用小小位，如果是1，用科学记数法,默认是0
        if (1 == science) {
            //判断小数点后的位数和实际需要位数的大小
            if (arr[1].length > n) {
                m = n;
            } else {
                m = arr[1].length;
            }
            for (let i = 0; i < m; i++) {
                arrH.push(arr[1][i]);
            }
        }
        if (0 == science) {
            for(let i=0;i<n;i++){
                if(i>=arr[1].length){
                    arrH.push(0);
                }else{
                    arrH.push(arr[1][i]);
                }
            }
        }

        //如果小数前没有数字
        if (0 == arrQ.length) {
            arrQ = 0;
        }
        resolve(`${arrQ}.${arrH.join('')}`);
    })
}