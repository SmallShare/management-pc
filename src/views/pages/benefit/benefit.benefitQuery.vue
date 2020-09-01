<template>
    <div>受益人查询</div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {};
        },
        components: {},
        watch: {},
        created() {
        },
        beforeRouteLeave(to, from, next) {
            next();
        },
        activated() {
            if (!this.$route.meta.isUseCache) {
                console.log("第一次1");
            } else {
                console.log("第二次2");
                this.$route.meta.isUseCache = false;
            }
        },
        deactivated() {

        },
        mounted() {

        },
        filters: {},
        methods: {},
        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
