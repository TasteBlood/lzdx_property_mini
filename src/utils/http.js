const BASE_URL = "http://192.168.31.51:8084";


// get request 
const GET = async (url, params, loading) => {
    return new Promise((resolve, reject) => {
        if (loading)
            wx.showLoading({
                title: '请稍后',
                mask: true
            })
        // add public params
        let user = wx.getStorageSync('login_user_info')
        if (user) {
            params.uid = user.id;
            params.token = user.token;
        }
        wx.request({
            url: `${BASE_URL}${url}`,
            data: params,
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            method: 'GET',
            success: function (res) {
                //res = JSON.parse(res);
                try {
                    if (loading)
                        wx.hideLoading()
                    if (res.statusCode == 200) {
                        if (res.data.status === 1) {
                            resolve(res.data);
                        } else if (res.data.status === 100) {
                            wx.showToast({
                                title: '登录失效，请重新登录',
                                icon: 'none'
                            })
                            wx.removeStorageSync('login_user_info')
                            wx.redirectTo({
                                url: '../../pages/index'
                            })
                        } else {
                            wx.showToast({
                                title: res.data.info ? res.data.info : "服务器异常",
                                icon: 'none'
                            });
                            //reject(res.info);
                        }
                        resolve(res.data);
                    } else {
                        reject(res.errMsg);
                    }
                } catch (e) {
                    wx.showToast({
                        title: "服务器异常",
                        icon: 'none'
                    });
                    console.log(e)
                    //reject(e);
                }
            },
            fail: function (e) {
                wx.showToast({
                    title: "连接超时",
                    icon: 'none'
                });
                if (loading)
                    wx.hideLoading()
                reject(e)
            }
        })
    });
};

// post request
const POST = async (url, params, loading) => {
    return new Promise((resolve, reject) => {
        if (loading)
            wx.showLoading({
                title: '请稍后',
                mask: true
            })
        // add public params
        let user = wx.getStorageSync('login_user_info')
        if (user) {
            params.uid = user.id;
            params.token = user.token;
        }
        wx.request({
            url: `${BASE_URL}${url}`,
            data: params,
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            success: function (res) {
                try {
                    if (loading)
                        wx.hideLoading()
                    if (res.statusCode == 200) {
                        if (res.data.status === 1) {
                            resolve(res.data);
                        } else if (res.data.status === 100) {

                        } else {
                            wx.showToast({
                                title: res.data.info ? res.data.info : "服务器异常",
                                icon: 'none'
                            });
                            //reject(res.info);
                        }
                        resolve(res.data);
                    } else {
                        wx.showToast({
                            title: "服务器异常",
                            icon: 'none'
                        });
                    }
                } catch (e) {
                    wx.showToast({
                        title: "服务器异常",
                        icon: 'none'
                    });
                }
            },
            fail: function (e) {
                wx.showToast({
                    title: "连接超时",
                    icon: 'none'
                });
                if (loading)
                    wx.hideLoading()
                reject(e)
            }
        })
    });
};

module.exports = { get: GET, post: POST, HOST: BASE_URL };