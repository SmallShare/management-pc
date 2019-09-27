<template>
    <div class="header">
        <div class="left-logo">
            <img class="logo" src="@/assets/images/logo.png" alt="">
            <div class="line"></div>
            <p class="project">移动保全后台管理系统</p>
        </div>
        <div class="header-left">
            <p class="workNo">
                工号：{{workNo}}
            </p>
            <img class="out" src="@/assets/images/out.png" alt="">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'headerBar',
        data() {
            return {
                workNo: '887191919'
            };
        },
        components: {},
        watch: {},
        created() {
        },
        mounted() {

        },
        filters: {},
        methods: {},
        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .header{
        width: 100%;
        height: 80px;
        background:rgba(255,255,255,1);
        box-shadow:0 4px 12px 0 rgba(0,0,0,0.4);
        position: relative;
        display: flex;
        justify-content: space-between;
        .left-logo{
            display: flex;
            .logo{
                width: 222px;
                height: 53px;
                margin: 14px 20px 0 44px;
            }
            .line{
                width: 1px;
                height: 40px;
                background: #000;
                margin-top: 20px;
            }
            .project{
                width:200px;
                height:28px;
                font-size:20px;
                font-family:PingFangSC-Semibold,PingFangSC;
                font-weight:600;
                color:rgba(0,0,0,1);
                line-height:28px;
                margin: 26px 0 26px 20px;
            }
        }
        .header-left{
            display: flex;
            .workNo{
                color: #333333;
                font-size: 18px;
                padding: 32px 30px 0 0;
            }
            .out{
                width: 23px;
                height: 25px;
                margin: 26px 40px 0 0;
            }
        }
    }
</style>
