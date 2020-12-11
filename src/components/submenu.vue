<template>
    <div class="side-menu">
        <el-menu
                :default-active="this.$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true"
                background-color="#000000"
                text-color="#fff"
                :default-openeds="openArr"
                active-text-color="#ffd04b">
            <el-submenu v-for="(item,index) in homeList"
                        :index="index + 'b'"
                        :key="index+'a'">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.title}}</span>
                </template>
                <el-menu-item v-for="(i,key) in item.groups"
                              :route="{path:i.path}"
                              :index="i.path"
                              :key="key">{{i.info}}
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'subMenu',
        data() {
            return {
                // homeList: []
            };
        },
        components: {},
        watch: {},
        created() {

        },
        computed: {
            homeList(){
                return this.$store.getters.homeList;
            },
            openArr(){
                let arr = [];
                this.homeList.forEach((item,index)=>{
                    if(item.groups){
                        item.groups.some(bar=>{
                            if(bar.path === this.$route.path){
                                arr.push(bar.path);
                            }
                        })
                    }
                })
                return arr;
            }
        },
        mounted() {
            if(this.$store.getters.homeList.length === 0){
                this.$store.dispatch('getHomeList',{
                    'groupCode': '8621'
                });
            }
            console.log(this.homeList);
        },
        filters: {},
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu{
        border-right: #000 !important;
    }
</style>
