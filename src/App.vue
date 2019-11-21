<template>
    <div id="app"  v-cloak>
            <header-bar v-if="headerShow"></header-bar>

        <el-container>
            <el-aside width="290px" class="aside">
                <sub-menu></sub-menu>
            </el-aside>
            <el-main>
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"/>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"/>
            </el-main>
        </el-container>


    </div>
</template>

<script>
import headerBar from '@/components/header';
import subMenu from '@/components/submenu';
export default {
    name: 'App',
    data() {
        return {
            headerShow: false
        };
    },
    components: {
        headerBar,
        subMenu
    },
    mounted(){
        this.headerShow = this.$route.path !== '/login';
    },
    methods:{

    }
}
</script>

<style>
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    #app .el-container{
        min-height: 741px !important;
    }
    .aside{
        background: #000;
        opacity: 0.8;
    }
</style>
