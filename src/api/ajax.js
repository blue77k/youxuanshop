//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条得样式
import "nprogress/nprogress.css"

//利用axios 对象的方法create，去创建了一个axios实例
//再次进行封装
const requests=axios.create({
    //配置对象，基础路径，发出请求的时候，路径中会出现api
    baseURL:'/api',
    //代表请求超时的时间是5s
    timeout:5000,

})
//请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出之前做出一些事情
requests.interceptors.request.use((config)=>{
  //进度条开始动
   nprogress.start();
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器相应数据返回之后，响应器可以检测到，
    //进度条结束
    nprogress.done();
    return res.data;
},(error)=>{

    //返回失败的回调函数
    return Promise.reject(new error('faile'));
});

export default requests