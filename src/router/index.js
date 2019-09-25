import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const Routes = [
    {
        path:"/",
        redirect:"/home"
    },
    {path:'*',redirect:'/home'},
    {
        path: '/home',
        name: 'hone',
        title: '首页',
        meta:{
            isUseCache: false,  // 这个字段的意思稍后再说
            keepAlive: false  // 通过此字段判断是否需要缓存当前组件
        },
        component: () => import('@/views/index')
    }
];
export default new Router({
  routes: Routes
})
