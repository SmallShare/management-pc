<template>
    <div class="pc-content">
        <!--<header-bar v-if="headerShow"></header-bar>-->
        <el-container>
            <el-aside width="290px" class="aside">
                <sub-menu></sub-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </div>
</template>
<script type="text/ecmascript-6">
    import headerBar from '@/components/header';
    import subMenu from '@/components/submenu';
    export default {
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
            goBenefit: function () {
                this.$router.push('/benefitQuery');
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
