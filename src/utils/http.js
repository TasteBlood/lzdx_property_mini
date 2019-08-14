const BASE_URL = "http://192.168.31.159:8080/";
/**
 * this is request queue , using abort request
 */
const REQUEST_QUEUE = [];

const GET = async (url,params)=>{
    return new Promise((resolve,reject)=>{
        wx.request({
            url: `${BASE_URL}${url}`,
            params:params,
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                if(res.status===1){
                    resolve(res);
                }else if(res.status===100){
                    //
                }else{
                    wx.showToast({
                        title: res.info?res.info:"服务器异常",
                        icon: 'none'
                    });
                }
                
            },
            fail: function(e) {
                reject(e)
            }
        })
    });
};

module.exports = {get:GET};