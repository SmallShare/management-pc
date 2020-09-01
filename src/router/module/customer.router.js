const outLoadRouters = [];
const reqRouter = require.context('@/views', true, /\.vue$/);
// console.log(reqRouter);
reqRouter.keys().forEach(key => {
    let fileUrl = key.replace(/\.\//g, ''),
    len = fileUrl.split('/').length,
    name = (reqRouter(key).default.name || fileUrl.split('/')[len-1]).split('.')[1];
    // console.log(key, fileUrl);
    if(key.indexOf('index') < 0){
        outLoadRouters.push(
            {
                path: `/${name}`,
                name: name,
                meta:{
                    isUseCache: false,  // 这个字段的意思稍后再说
                    keepAlive: false  // 通过此字段判断是否需要缓存当前组件
                },
                component: resolve => require([`@/views/${fileUrl}`], resolve)
            }
        )
    }
});
console.log(outLoadRouters);
export default outLoadRouters