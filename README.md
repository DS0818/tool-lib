***
npm i tool-lib

    All modules are asynchronous-based
    如果你能看懂中文，那么你可以看包里的README_zh.md

***
### Import module
`const _tool=require('tool-lib');`
### CEP Import module
`const _tool=require('tool-lib/cep');`
### Use:
* Remove null values from JSON
`_tool.clearJsonNull(json);`

* Determine the incoming data type and return a string
`_tool.dataType(obj);`

* Recursive creation of directories
`_tool.mkdir(dir)`

* CEP version Recursive creation of directories
`_tool.cep_mkdir(dir)`

* Converting Boolean values of strings to Boolean values
`_tool.strBol(str)`
    *   `const a='true'; console.log(typeof(_tool.strBol(a)));`//boolean
* Determine whether the specified position of the array is a number
`_tool.arrIsNum(data,num)`
    *   Returns Boolean values
* Returns which array element appears in the string and returns the subscript of the array
`_tool.arrIsNum(data,num)`
    *   return JSON
* How many decimal places to take
`_tool.float(num,n[,option])`
    *   return num
        * [option]The default is '1'，example：`_tool.float(3.25335,2)`//3.25
        * If the parameter is'0', then use the following complement'0'；example:`_tool.float(3.25,4,0)`//3.2500
* Returns the index of the closest value
`_tool.nearIndex(arr,val)`
    *   return `index`
        * example:`let arr=[[3.56,4,5,2.25,8]];arr[await _tool.nearIndex(arr,1)]`//2.25
* Compare the values in json, and return true if matched
`_tool.compareJson(json,val)`
    *   If the match returns `true`