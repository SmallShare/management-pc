import axios from 'axios';
import {baseUrl} from './config.base';
import qs from 'qs';
import {
    Indicator,Toast
} from "mint-ui";
let $http = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    transformRequest: [
        function (data) {
            return qs.stringify(data);
        }
    ]
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
});
$http.defaults.baseURL = baseUrl;
console.log('baseUrl',$http.defaults.baseURL);
$http.defaults.timeout = 20000;
//请求拦截器
$http.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        //对请求错误处理
        return Promise.reject(error);
    }
);
//响应拦截器
$http.interceptors.response.use(response =>{
    let data = response.data;
    if(data.resultCode !== '200'){
    }
    return data;
}, error => {
    if(error && error.response){
        switch (error.response.status) {
            case 403:
                Toast({
                    message: "服务器拒绝请求",
                    duration: 1000
                });
                break;
            case 404:
                Toast({
                    message: "未找到请求资源",
                    duration: 1000
                });
                break;
            case 405:
                Toast({
                    message: "方法禁用",
                    duration: 1000
                });
                break;
            case 408:
                Toast({
                    message: "请求超时",
                    duration: 1000
                });
                break;
            case 500:
                Toast({
                    message: "服务器端出错",
                    duration: 1000
                });
                break;
            default:
                Toast({
                    message: `${error.response.status.message}`,
                    duration: 1000
                });
        }
    }

    return Promise.reject(error);
});
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
        $http.get(url,{
            params:params
        })
            .then(response => {
                console.log(response)
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {},json){
    return new Promise((resolve,reject) => {
        $http.post(
            url,
            data,
            {headers: {'Content-Type': json == 'undefined' ? 'application/x-www-form-urlencoded':'application/json'}}
        ).then(response => {
            resolve(response);
        },err => {
            reject(err)
        })
    })
}