<template>
    <div id="app"  v-cloak>
        <header-bar v-if="headerShow"></header-bar>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
    </div>
</template>

<script>
import headerBar from '@/components/header'
export default {
    name: 'App',
    data() {
        return {
            headerShow: false
        };
    },
    components: {
        headerBar
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
</style>
