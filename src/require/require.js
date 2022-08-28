import store from '@/store';
import axios from 'axios';
const ins=axios.create({
    baseURL:'http://kumanxuan1.f3322.net:8001',
    timeout:10000,
})

ins.interceptors.request.use(config=>{
    /* 
        token
        登录 = 》账号，密码
        正确的账号密码，去登录接口中获取登入消息
        包含token
        localStorege.setItem('token',res.data.token)

    */
    // console.log('请求拦截了');
    // config.headers.Accept="X-Nideshop-Token";
    let token=sessionStorage.getItem('token');
    config.headers["X-Nideshop-Token"]=token;
    return config;
})

ins.interceptors.response.use(res=>{
    // console.log('响应拦截了');
    return res.data;
})
// ,err=>{
//     // 返回错误信息
//     return Promise.reject(err)};

export default ins;