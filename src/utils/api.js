import { get, post } from './http';

/**
 * 
 * @param {Stirng} code 微信登录后返回的code
 * @param {Stirng} iv 揭秘算法的初始向量，微信回返回
 * @param {Stirng} encryedData 加密的手机号信息
 * @description 微信用户登录 
 */
export const wxLogin = async (code, iv, encryedData) => {
    try {
        return await post('/base/wxlogin',
            { code: code, iv: iv, encrypted: encryedData },
            true);
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {String} account 用户名
 * @param {String} pwd 密码
 * @description 管理员登录 
 */
export const adminLogin = async (account, pwd) => {
    try {
        return await post('/base/ulogin',
            { mobile: account, password: pwd },
            true);
    } catch (error) {
        return error;
    }
};

/**
 * @description 发送验证码
 * @param {String} mobile 
 */
export const sendSms = async (mobile) => {
    try {
        return await get('/base/findSmsCode',{mobile},false)
    } catch (error) {
        return error
    }
}

/**
 * @description 获取图形验证码
 */
export const getRandomCode = async() =>{
    try {
        return await get('/base/getImgCode',{},false)
    } catch (error) {
        return error
    }
}

/**
 * @description 检查图形验证码是否正确
 * @param {String} code 
 */
export const checkCode = async (code) => {
    try {
        return await get('/base/checkRandCode',{code},false)
    } catch (error) {
        return error
    }
}

/**
 * @description 修改密码
 * @param {String} password 
 * @param {String} confirmPwd 
 * @param {String} msgCode 
 */
export const updatePassWd = async (password,confirmPwd,msgCode) => {
    try {
        return await post('/basics/editPwd',{password,confirmPwd,msgCode},true)
    } catch (error) {
        return error
    }
}

/**
 * @description 查询全部的巡检类型
 */
export const getReportType = async () => {
    try {
        return await get('/wx/queryInsTypes', {}, false)
    } catch (error) {
        return error;
    }
};


/**
 * 
 * @param {Float} latitude 经度
 * @param {Float} longitude 纬度
 * @description 根据经纬度查询区域
 */
export const getLocationArea = async (latitude, longitude) => {
    try {
        return await get('/wx/findGpsRegion', { lat: latitude, lon: longitude }, false)
    } catch (error) {
        return error;
    }
};

/**
 * @description 查询一级区域
 */
export const getFirstArea = async () => {
    try {
        return await get('/base/queryRegionOne', {}, false)
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} regionOneId 
 * @description 查询二级区域
 */
export const getSecondArea = async (regionOneId) => {
    try {
        return await get('/base/queryRegionTwo', { regionOneId: regionOneId }, false)
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} regionTwoId 
 * @description 查询三级区域
 */
export const getThirdArea = async (regionTwoId) => {
    try {
        return await get('/base/queryRegionThree', { regionTwoId: regionTwoId }, false)
    } catch (error) {
        return error;
    }
};

/**
 * @param {Number} regionId 
 * @description 查询区域负责人
 */
export const getAreaLeader = async (regionId) => {
    try {
        return await get('/base/queryRegionPerson', { regionId: regionId }, false)
    } catch (error) {
        return error;
    }
};

/**
 * @description 上传巡检报告
 * @param {Number} adminId
 * @param {String} title 
 * @param {String} content 
 * @param {String} fileUrl 
 * @param {String} proposal 
 * @param {Number} regionId 
 * @param {Number} regionOneId 
 * @param {Number} regionTwoId 
 * @param {Number} typeId 
 */
export const addInsReport = async (adminId, title,content, fileUrl, proposal, regionId, regionOneId, regionTwoId,
    typeId) => {
    try {
        return await post('/wx/addInsReport', {
            adminId,
            title,
            content,
            fileUrl,
            proposal,
            regionId,
            regionOneId,
            regionTwoId,
            typeId
        }, true)
    } catch (error) {
        return error
    }
};
/**
 * @param {Number} state 
 * @param {Number} adminId
 * @param {Number} page 
 * @param {Number} size 
 * @param {Boolean} loading
 * @description 查询巡检记录 
 */
export const getInsReport = async (state,adminId, pageNum, pageSize, loading) => {
    try {
        return await get('/wx/queryInsReports', {state,adminId,pageNum,pageSize}, loading)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} orderState 
 * @param {Number} pageNum 
 * @param {Number} pageSize 
 * @param {Boolean} loading
 * @description 查询报修单 
 */
export const getRepairList = async (orderState,pageNum,pageSize,loading) => {
    try {
        return await get('/wx/queryOrders', {orderState,pageNum,pageSize},loading)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} orderId 
 * @description 查询订单详情
 */
export const getOrderDetail = async (orderId) => {
    try {
        return await get('/wx/findOrder',{orderId},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 添加巡检申诉
 * @param {Number} insReportId 
 * @param {Number} adminId 
 * @param {String} content 
 * @param {String} fileUrl 
 * @param {Boolean} loading
 */
export const addReportAppeal = async (insReportId,adminId,content,fileUrl,loading) => {
    try {
        return await post('/wx/addInsAppeal',{insReportId,adminId,content,fileUrl},loading)
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} id
 * @description 根据id查询巡检报告 
 */
export const getReportById = async (id) => {
    try {
        return await get('/wx/findReport',{id},true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询报修类型
 */
export const getRepairType = async () => {
    try {
        return await get('/base/queryRepairType',{},false)
    } catch (error) {
        return error
    }
};

/**
 * @description 添加报修单
 * @param {Number} repairTypeId
 * @param {String} address 
 * @param {Number} isAppoint 
 * @param {String} appointTime 
 * @param {Number} areaId 
 * @param {Number} regionOneId 
 * @param {Number} regionTwoId 
 * @param {String} audio 
 * @param {String} pics 
 * @param {String} repairMobile 
 * @param {String} repairName 
 * @param {String} repairReason 
 * @param {Number} repairUid 
 */
export const addRepair = async (repairTypeId,address,isAppoint,appointTime,areaId,regionOneId,regionTwoId,
    audio,pics,repairMobile,repairName,repairReason,repairUid) => {
    try {
        return await post('/wx/addOrder',{repairTypeId,address,isAppoint,appointTime,areaId,regionOneId,regionTwoId,
        audio,pics,repairMobile,repairName,repairReason,repairUid},true)
    } catch (error) {
        return error
    }
};