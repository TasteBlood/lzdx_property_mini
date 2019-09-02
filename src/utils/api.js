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
        return await get('/base/findSmsCode', { mobile }, false)
    } catch (error) {
        return error
    }
}

/**
 * @description 获取图形验证码
 */
export const getRandomCode = async () => {
    try {
        return await get('/base/getImgCode', {}, false)
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
        return await get('/base/checkRandCode', { code }, false)
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
export const updatePassWd = async (password, confirmPwd, msgCode) => {
    try {
        return await post('/basics/editPwd', { password, confirmPwd, msgCode }, true)
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
export const addInsReport = async (adminId, title, content, fileUrl, proposal, regionId, regionOneId, regionTwoId,
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
export const getInsReport = async (state, adminId, pageNum, pageSize, loading) => {
    try {
        return await get('/wx/queryInsReports', { state, adminId, pageNum, pageSize }, loading)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} orderState 
 * @param {Number} pageNum 
 * @param {Number} repairUid 报修人id
 * @param {Number} serviceUid 维修人id
 * @param {Number} pageSize 
 * @param {Boolean} loading
 * @description 查询报修单 
 */
export const getRepairList = async (orderState, serviceUid, repairUid,pageNum, pageSize, loading) => {
    try {
        return await get('/wx/queryOrders', { orderState, serviceUid, repairUid,pageNum, pageSize }, loading)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} orderId 
 * @description 查询报修单详情
 */
export const getOrderDetail = async (orderId) => {
    try {
        return await get('/wx/findOrder', { orderId }, true)
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
export const addReportAppeal = async (insReportId, adminId, content, fileUrl, loading) => {
    try {
        return await post('/wx/addInsAppeal', { insReportId, adminId, content, fileUrl }, loading)
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
        return await get('/wx/findReport', { id }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 查询报修类型
 */
export const getRepairType = async () => {
    try {
        return await get('/base/queryRepairType', {}, false)
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
export const addRepair = async (repairTypeId, address, isAppoint, appointTime, areaId, regionOneId, regionTwoId,
    audio, pics, repairMobile, repairName, repairReason, repairUid) => {
    try {
        return await post('/wx/addOrder', {
            repairTypeId, address, isAppoint, appointTime, areaId, regionOneId, regionTwoId,
            audio, pics, repairMobile, repairName, repairReason, repairUid
        }, true)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} id 订单id
 * @param {Number} orderState 订单状态 2 维修中
 * @param {Number} serviceUid 维修员id
 * @description 抢单 
 */
export const getOrderBySelf = async (id, orderState, serviceUid) => {
    try {
        return await post('/wx/editOrder', { id, orderState, serviceUid }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 根据id查询区域
 * @param {Number} id 
 */
export const getAreaById = async (id) => {
    try {
        return await get('/wx/findInsRegion', {id},true)
    } catch (error) {
        return error
    }
};

/**
 * orderState 0 待抢单 1 已超时 2 维修中 3 待支付 4 已完成
 * @description 维修员确认价格并完成订单
 * @param {Number} id 订单id
 * @param {Number} orderState 订单状态 3 维修工已完成维修、并确认价格
 * @param {Number} price 价格 以分为单位
 */
export const enterPrice = async (id, orderState, serviceFee) => {
    try {
        return await post('/wx/editOrder', { id, orderState, serviceFee }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 完成订单（仅仅对于公共报修来说）
 * @param {Number} id 
 * @param {Number} orderState 4
 */
export const finishOrder = async (id, orderState) => {
    try {
        return await post('/wx/editOrder', { id, orderState }, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 添加投诉
 * @param {String} content 
 * @param {String} fileUrl 
 * @param {Number} regionId 
 * @param {Number} regionOneId 
 * @param {Number} regionTwoId 
 * @param {Number} sysUserId 
 */
export const addComplain = async (content,fileUrl,regionId,regionOneId,regionTwoId,sysUserId) => {
    try {
        return await post('/wx/addComplaint',{content,fileUrl,regionId,regionOneId,regionTwoId,sysUserId},true)
    } catch (error) {
        return error
    }
}

/**
 * @description 添加申辩
 * @param {Number} complaintId 
 * @param {String} content 
 * @param {String} fileUrl 
 * @param {Number} sysUserId 
 */
export const complainApply = async (complaintId,content,fileUrl,sysUserId) => {
    try {
        return await post('/wx/addPlead',{complaintId,content,fileUrl,sysUserId},true)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} pageNum 
 * @param {Number} pageSize
 * @param {Number} pleadState
 * @param {Number} adminId
 * @description 查询投诉记录 
 */
export const getComplain = async (pageNum,pageSize,pleadState,adminId) => {
    try {
        return await get('/wx/queryComplainted',{pageNum,pageSize,pleadState,adminId},true)
    } catch (error) {
        return error
    }
};

/**
 * 
 * @param {Number} id
 * @description 查询投诉详情 
 */
export const getComplainById = async (id) => {
    try {
        return await get('/wx/findComplaint', {id}, true)
    } catch (error) {
        return error
    }
};

/**
 * @description 微信支付
 * @param {Number} orderId 
 */
export const wxPay = async (orderId) => {
    try {
        return await post('/wx/pay',{orderId},false)
    } catch (error) {
        return error
    }
};