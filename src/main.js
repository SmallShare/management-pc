// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import './mock/index'
import '@/assets/style/reset.scss'
import myMinxin from './mixins'
Vue.use(Vuex);
Vue.mixin(myMinxin);
Vue.config.productionTip = false;

// 按需引入 ElementUI
import {
    Table,
    tableColumn,
    Input,
    Select,
    Option,
    Button,
    Menu,
    Submenu,
    menuItem,
    menuItemGroup,
    Breadcrumb,
    breadcrumbItem,
    Dialog,
    Pagination,
    Form,
    formItem,
    DatePicker,
    MessageBox,
    Message,
    Loading,
    Radio,
    Tree,
    Tabs,
    TabPane,
    RadioGroup,
    Container,
    Header,
    Aside,
    Main
} from 'element-ui';

const components = [
    Table,
    tableColumn,
    Input,
    Select,
    Option,
    Button,
    Menu,
    Submenu,
    menuItem,
    menuItemGroup,
    Breadcrumb,
    breadcrumbItem,
    Dialog,
    Pagination,
    Form,
    formItem,
    Radio,
    DatePicker,
    Tree,
    Tabs,
    TabPane,
    RadioGroup,
    Container,
    Header,
    Aside,
    Main
];

components.map(component => {
    Vue.component(component.name, component);
});
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
