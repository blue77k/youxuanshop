//引用uuid,另其生成一个随机字符串
import { v4 as uuidv4 } from 'uuid';

export const getUUID=()=>{
    //先从本地存储获取，看是否存在
let uuid_token=localStorage.getItem("UUIDYOKEN");
//如果没有
if(!uuid_token){
    //生成临时游客身份
    uuid_token=uuidv4();
    //本地存储存储一次，
    localStorage.setItem('UUIDYOKEN',uuid_token)
}
//给本地赋值之后，返回这个字符串给此参数
return uuid_token;
}