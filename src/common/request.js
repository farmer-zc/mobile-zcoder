import axios from 'axios'
import store from './../store/index.js'

const statusList = ["200", "1000000", "1000001"]

const request = axios.create({
    // baseURL: '/pro-api', 
    baseURL: process.env.VUE_APP_BASE_API, 
    timeout: 5000 // 请求超时，5000毫秒
})

// 请求拦截器
request.interceptors.request.use(config => {
    // 打开加载窗口
    store.commit('SET_LOADING', false)

    return config
}, error => {
    // 关闭加载窗口
    store.commit('SET_LOADING', true)
    // 出现异常
    return Promise.reject(error);
})

// 响应拦截器
request.interceptors.response.use(response =>{
    // 关闭加载窗口
    store.commit('SET_LOADING', false)
    const resp = response.data
    // 后台正常响应的状态，如果不是 200， 说明后台处理有问题
    if(!statusList.includes(resp.code)) {

        // Message({
        //     message: resp.message || '系统异常',
        //     type: 'warning',
        //     duration: 5 * 1000
        // })
    }
    // 可以在这里统一的获取后台响应的数据进行返回，而这里面就没有请求头那些
    return response.data
}, error => {
    // 关闭加载窗口
    store.commit('SET_LOADING', true)
    // Message({
    //     message: error.message,
    //     type: 'error',
    //     duration: 5 * 1000
    // })
    return Promise.reject(error);
})


export default request // 导出自定义创建 axios 对象