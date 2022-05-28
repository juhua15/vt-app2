import axios from "axios";
import { ElMessage } from "element-plus";
enum MSGS{
    "登录成功" =200,
    "密码错误",
    "账号错误",
    "请求异常"
}
// 创建http实例
const $http = axios.create({
    baseURL:"http://127.0.0.1:4523/mock/1043171/vt",
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})
// 请求拦截
$http.interceptors.request.use(config=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
      config.headers.token = localStorage.getItem('token')||'' 
    }
    return config
})
// 响应拦截器
$http.interceptors.response.use(res=>{
    // {
    //     code:200,
    //     data:{},
    //     msg:"请求成功"
    // }
    const code :number = res.data.code
    if(code !== 200){
        ElMessage.error( MSGS[code])
      return Promise.reject(res.data)
    }
    return res.data
},err=>{
    console.log(err);
})
export default $http;