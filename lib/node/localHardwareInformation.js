const os = require('os');
//获取本机网络信息
/**
 * @param {json} ipv4 包含 ip,mac,netmask,cidr
 * @param {json} ipv6 包含 ip,mac,netmask,cidr
 */
class localHardwareInformation {
    constructor() {
        this.net = this.net();
        this.ipv4 = this.net.ipv4;
        this.ipv6 = this.net.ipv6;
    }
    //本机网络信息
    net() {
        const ipObject = os.networkInterfaces();
        let result = {};
        for (let key in ipObject) {
            const value = ipObject[key];
            for (let i = 0; i < value.length; i++) {
                const res = value[i];
                if ('IPv4' == res.family && '127.0.0.1' !== res.address && !res.internal) {
                    result.ipv4 = {
                        ip: res.address,
                        mac: res.mac,
                        netmask: res.netmask,
                        cidr: res.cidr
                    }
                }
                if ('IPv6' == res.family && !res.internal) {
                    result.ipv6 = {
                        ip: res.address,
                        mac: res.mac,
                        netmask: res.netmask,
                        cidr: res.cidr
                    }
                }
            }
        }
        return result;
    }
}

const exp = () => {
    if (typeof window !== "undefined" && this === window) {
        return null;
    } else {
        return new localHardwareInformation();
    }
}

module.exports = exp();