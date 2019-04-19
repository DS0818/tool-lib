***
npm i tool-lib

    All modules are asynchronous-based
    如果你能看懂中文，那么你可以看包里的README_zh.md

***
### Import module
`const tool_lib=require('tool-lib');`
### CEP Import module
`const tool_lib=require('tool-lib/cep');`
### Use:
* Remove null values from JSON
`tool_lib.clearJsonNull(json);`

* Determine the incoming data type and return a string
`tool_lib.dataType(obj);`

* Recursive creation of directories
`tool_lib.mkdir(dir)`

* CEP version Recursive creation of directories
`tool_lib.cep_mkdir(dir)`

* Converting Boolean values of strings to Boolean values
`tool_lib.strBol(str)`
    *   `const a='true'; console.log(typeof(tool_lib.strBol(a)));`//boolean
* Determine whether the specified position of the array is a number
`tool_lib.arrIsNum(data,num)`
    *   Returns Boolean values
* Returns which array element appears in the string and returns the subscript of the array
`tool_lib.arrIsNum(data,num)`
    *   return JSON
* How many decimal places to take
`tool_lib.float(num,n[,option])`
    *   return num
        * [option]The default is '0'，example：`tool_lib.float(3.25335,2)`//3.25
        * If the parameter is'1', then use the following complement'0'；example:`tool_lib.float(3.25,4,1)`//3.2500