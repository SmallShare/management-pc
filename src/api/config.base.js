/*
 * 配置编译环境和线上环境之间的切换
 * 以及静态变量
 * baseUrl: 域名地址
 * routerMode: 路由模式
 */
let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
    baseUrl = "http://osptest.newchinalife.com/ydbq";
}else if(process.env.NODE_ENV == 'production'){ //正式环境走的地址
    baseUrl = "http://osptest.newchinalife.com/ydbq";
}else if(process.env.NODE_ENV == 'testing'){ //dev环境地址
    baseUrl = "http://osptest.newchinalife.com/ydbq2test";
}
export{
    baseUrl
}
