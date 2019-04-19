//异步创建目录
const fs=require('fs');
const path=require('path');

class Mkdir{
    constructor(){}
    //开始
    async start(dir){
        //检测目录是否存在
        let isExists=await this.getStats(dir);
        if(isExists&&isExists.isDirectory()){
            return true;//目录存在返回true
        }else if(isExists){
            return false;//目录不存在，但是存在文件，返回false
        }
        //如果目录不存在
        let parentDir=path.parse(dir).dir;//得到父路径
        //判断上级路径是不是存在，如果不存在，那么继续往上判断，直到目录存在为止
        let statusDir=await this.start(parentDir);//检查父目录是不是存在
        let existsDir;//创建目录是不是成功
        if(statusDir){
            existsDir=await this.mkdir(dir);
        }
        //父目录存在，而且父目录的子目录也创建成功，那么返回
        return existsDir && statusDir;
    }
    
    /**
     * 检测路径的状态
     * @param {路径} dir 
     */
    getStats(dir){
        return new Promise((resolve,reject) => {
            fs.stat(dir,(err,stats) => {
                if(err){
                    resolve(false);
                }else{
                    resolve(stats);
                }
            })
        })
    }
    /**
     * 创建目录
     * @param {路径} dir 
     */
    mkdir(dir){
        return new Promise((resolve,reject) => {
            fs.mkdir(dir,(err) => {
                if(err){
                    resolve(false);
                }else{
                    resolve(true);
                }
            })
        })
    }
}

const mkdir= new Mkdir();
module.exports=(dir) => mkdir.start(dir);