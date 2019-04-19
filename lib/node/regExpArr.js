module.exports=(str,arr) => {
    return new Promise((resolve) => {
        arr.forEach((item,index) => {
            const regExp=new RegExp(item,'i');
            if(regExp.test(str)){
                resolve({
					item,
					index
				});
                return;
            }
        });
    })
}