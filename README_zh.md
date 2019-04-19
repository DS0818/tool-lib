***
npm i tool-lib

    所有模块都是基于异步的
***
### node引入模块
`const tool_lib=require('tool-lib');`
### cep引入模块
`const tool_lib=require('tool-lib/cep');`
### 使用：
* 去掉json中的空值
`tool_lib.clearJsonNull(json);`

* 判断传入的数据类型，并返回一个字符串
`tool_lib.dataType(obj);`

* 递归创建目录
`tool_lib.mkdir(dir)`

* 把字符串的布尔值转成布尔值
`tool_lib.strBol(str)`
    *   `const a='true'; console.log(typeof(tool_lib.strBol(a)));`//boolean
* 判断数组的指定位置是不是数字
`tool_lib.arrIsNum(data,num)`
    *   返回布尔值
* 返回哪个数组元素出现在字符串中，并返回数组的下标
`tool_lib.arrIsNum(data,num)`
    *   返回JSON
* 取多少位小数
`tool_lib.float(num,n[,option])`
    *   返回num
        * [option]默认是0，例如：`tool_lib.float(3.25335,2)`//3.25
        *   如果参数是'1'那么就使用后面补0；例如:`tool_lib.float(3.25,4,1)`//3.2500