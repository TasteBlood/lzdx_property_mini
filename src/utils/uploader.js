import { HOST } from './http';

/**
 * 
 * @param {Any?} filePath 
 * @param {Function} sucess 
 * @param {Function} fail 
 * @description 上传单张图片
 */
export const UploadSingle = (filePath, success, fail) => {
    wx.showLoading({
        title: '图片上传中',
        mask: true
    })
    wx.uploadFile({
        url: `${HOST}/base/upload`,
        filePath: filePath.url,
        name: 'file',
        success: function (res) {
            wx.hideLoading()
            if (res.statusCode == 200) {
                //upload success
                let data = JSON.parse(res.data);
                success(data.info)
            } else {
                fail('upload error')
            }
            //success()
        },
        fail: function (e) {
            wx.hideLoading()
            fail(e)
        }
    })
};

/**
 * 
 * @param {Array} filePaths 
 * @param {Function} success 
 * @param {Function} fail
 * @description 多张上传
 */
export const UploadMulti = (filePaths, success, fail) => {
    if(!filePaths || filePaths.length<=0){
        success([])
        return
    }
    let uploaded = []
    var uploadNum = 0
    wx.showLoading({
        title: '图片上传中',
        mask: true
    })

    filePaths.forEach(item => {
        wx.uploadFile({
            url: `${HOST}/base/upload`,
            filePath: item.url,
            name: 'file',
            success: (res) => {
                if (res.statusCode == 200) {
                    //upload successu.…
                    let data = JSON.parse(res.data)
                    uploaded.push(data.info)
                    uploadNum++
                    //console.log('upload success', uploadNum)

                    if (uploadNum === filePaths.length) {
                        //upload completed
                        wx.hideLoading()
                        success(uploaded)
                    }
                } else {
                    uploaded.push('error')
                    if (uploadNum === filePaths.length) {
                        //upload completed
                        wx.hideLoading()
                        success(uploaded)
                    }
                }
            },
            error: (e) => {
                //console.log(e)
                uploaded.push('error')
                if (uploadNum === filePaths.length) {
                    //upload completed
                    wx.hideLoading()
                    success(uploaded)
                }
            }
        })
    });

};