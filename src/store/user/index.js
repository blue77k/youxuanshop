import {reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister} from "@/api";
import { setToken, getToken,removeToken} from "@/utils/token";
const state={
    code:"",
    token:getToken(),
    userInfo: {},
};

const mutations={
    GETCODE(state, code){
        state.code=code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    //清除本地数据
    CLEAR(state){
        //将仓库中的用户信息清空
        state.token='';
        state.userInfo={};
        //本地存储数据清空
        removeToken();
    }
};

const actions={
    //获取验证码
    async getCode({ commit }, phone){
        let result=await reqGetCode(phone);
        if(result.code==200){
            commit("GETCODE", result.data);
            return "ok"
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    //用户注册
    async userRegister({ commit }, user){
        let result=await reqUserRegister(user);
        if(result.code==200){
            return"ok"
        }else{
            return Promise.reject(new Error("faile"));
        }
    },
    //用户登录
    async userLogin({commit},data){
        let result=await reqUserLogin(data);
        //服务器下发token，用户唯一标识符（uuid）
        //将来经常通过带token找服务器要用户信息展示
        if(result.code==200){
            //用户登录成功获取token
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            setToken(result.data.token);
            return "ok";
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    //获取用户信息
    async getUserInfo({ commit }){
        let result=await reqUserInfo();
        if (result.code == 200) {
            //提交用户信息
            commit("GETUSERINFO", result.data);
            setToken(result.data.token)
            return "ok"
        }
    },
    //退出登录
    async userLogout({commit}){
        //向服务器发一次请求，通知服务器清除token
        let result=await reqLogout();
        //action里面不可以操作state，需要提交到mutation里面
        if(result.code==200){
            commit("CLEAR")
            return "ok"
        }else {
            return Promise.reject(new Error('faile'));
        }
    }

};

const getters={}

export default {
    state,
    mutations,
    actions,
    getters,
};
