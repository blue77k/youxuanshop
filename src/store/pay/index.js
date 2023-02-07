import {reqpayList} from "@/api";


const state = {
    //仓库初始状态
    payList:{}
};
const mutations = {
    GETPAYLIST(state, payList) {
        state.payList = payList;
    },
};
const actions = {
    //获取search模块数据
    async getpayList({commit}){
        let result=await reqpayList();
     
        if(result.code==200){
            commit('GETPAYLIST',result.data)
        }
    },
};
 
export default {
    state,
    mutations,
    actions
}