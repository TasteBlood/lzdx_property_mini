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
 * @description 查询全部的巡检类型
 */
export const getReportType = async() => {
    try {
        return await get('/wx/queryInsTypes',{},false)
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
export const getLocationArea = async (latitude,longitude) => {
    try {
        return await get('/wx/findGpsRegion',{lat:latitude,lon:longitude},false)
    } catch (error) {
        return error;
    }
};

/**
 * @description 查询一级区域
 */
export const getFirstArea = async () =>{
    try {
        return await get('/base/queryRegionOne',{},false)
    } catch (error) {
        return error;
    }
};

/**
 * 
 * @param {Number} regionOneId 
 * @description 查询二级区域
 */
export const getSecondArea = async (regionOneId) =>{
    try {
        return await get('/base/queryRegionTwo',{regionOneId:regionOneId},false)
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
        return await get('/base/queryRegionThree',{regionTwoId:regionTwoId},false)
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
        return await get('/base/queryRegionPerson',{regionId:regionId},false)
    } catch (error) {
        return error;
    }
};