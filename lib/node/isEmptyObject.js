//判断对象是不是空
module.exports = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
}