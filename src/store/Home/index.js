import {reqCategoryList, reqFloorList,  reqGetBannerList} from "@/api";

//home模块的小仓库
const state={
    //初始化state中的初始值
    categoryList:[],
    //轮播图数组
    bannerList:[],
    //floor
    floorList:[]
};
const mutations={
    GETCATEGORYLIST(state,categoryList){
        state.categoryList=categoryList.slice(0,16);
    },
    GETBANNER(state,bannerList){
    state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
const actions={

    //通过api里面的的接口函数，向服务器发请求忙活去数据
   async categoryList({commit}){
      let result=await reqCategoryList();
      if(result.code==200){
          commit("GETCATEGORYLIST",result.data)
      }
    },
    //获取轮播图数据
    async getBannerList({commit}){
        let result=await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNER',result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            //提交mutation
            commit("GETFLOORLIST", result.data);
        }
    },
};
const getters={}



export default {

    state,
    mutations,
    getters,
    actions
}