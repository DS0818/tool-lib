***
npm i tool-lib

    所有模块都是基于异步的
***
### node引入模块
`const _tool=require('tool-lib');`
### cep引入模块
`const _tool=require('tool-lib/cep');`
### 使用：
* 去掉json中的空值
`_tool.clearJsonNull(json);`

* 判断传入的数据类型，并返回一个字符串
`_tool.dataType(obj);`

* 递归创建目录
`_tool.mkdir(dir)`

* 把字符串的布尔值转成布尔值
`_tool.strBol(str)`
    *   `const a='true'; console.log(typeof(_tool.strBol(a)));`//boolean
* 判断数组的指定位置是不是数字
`_tool.arrIsNum(data,num)`
    *   返回布尔值
* 返回哪个数组元素出现在字符串中，并返回数组的下标
`_tool.arrIsNum(data,num)`
    *   返回JSON
* 取多少位小数
`_tool.float(num,n[,option])`
    *   返回num
        * [option]默认是1，例如：`_tool.float(3.25335,2)`//3.25
        *   如果参数是'0'那么就使用后面补0；例如:`_tool.float(3.25,4,0)`//3.2500
* 返回最接近值的索引
`_tool.near(arr,val)`
    *   返回 `index`
        * 例如：`let arr=[[3.56,4,5,2.25,8]];arr[await _tool.near(arr,1)]`//2.25