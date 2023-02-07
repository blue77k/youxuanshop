import {reqAddOrUpdateShopCart, reqGoodsInfo} from "@/api";
//封装游客身份模块uuid，生成随机字符串（固定的不变）
import {getUUID} from "@/utils/uuid_token";

const state={
    goodInfo: {},
    //游客临时身份
    uuid_token:getUUID()
};
const mutations={
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
}
const actions={
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data);
        }
    },
    /*
    * 这次发请求，前端要带着一些参数给服务器{需要存储这些数据}存储成功就完事了
    * 不需要返回数据！！！！
    *   也就不需要三连环仓库存储数据了
    * async 函数执行返回结果一定是promise，要么成功，要不失败
    * */
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
        //不需要在三连环（仓库存储数据了）
        //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            //返回的是成功的标记
            return "ok";
        } else {
            //返回的是失败的标记
            return Promise.reject(new Error("faile"));
        }
    },
}
const getters={
    //路径导航简化的数据
    categoryView(state) {
        //比如:state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
        //当前计算出的 categoryView属性值至少是一个空对象，假的报错不会有了。
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
//产品售卖属性的简化
spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
},
};

export default {
    state,
    actions,
    mutations,
    getters,
};