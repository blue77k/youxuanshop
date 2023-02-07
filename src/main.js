import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
//三级联动组件    ---全局组件
// import echarts from "echarts";
import *as echarts from 'echarts'
import TypeNav from "@/components/TypeNav";
import Carsousel from "@/components/Carousel";
import Pagination from "@/components/Pagination";
 
//element-ui注册
Vue.use(ElementUI);

//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
//注册全局组件

//注册组件在原型上
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
//引入路由
import router from "@/router";
//引入store
import store from "@/store";
//引入mock文件
import "@/mock/mockServe";
//引入轮播图
import "swiper/css/swiper.css";
//统一引入api文件夹里面全部的请求函数
import * as API from "@/api";
import atm from "@/assets/gd.jpg";
//引入图片懒加载插件
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  //懒加载默认的图片
  loading: atm,
});
//引入自定义插件
import myPlugins from "@/plugins/myPlugins";
Vue.use(myPlugins, {
  name: "upper",
});
Vue.use(ElementUI);
//引入表单验证插件
import "@/plugins/validate";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  //注册路由
  router,
  //注册仓库
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
    Vue.prototype.$echarts = echarts;
  },
});
