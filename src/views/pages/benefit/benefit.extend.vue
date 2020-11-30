<template>
    <div>
        <p>全局挂载示例mixin</p>
    </div>
</template>
<script type="text/ecmascript-6">
    // import myMinxin from '../../../mixins'
    export default {
        data() {
            return {};
        },
        components: {},
        watch: {},
        created() {
            this.mixinFn();
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
        // mixins: [myMinxin],
        filters: {},
        methods: {
        },
        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
