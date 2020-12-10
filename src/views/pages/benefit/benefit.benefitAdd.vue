<template>
    <div>
        <p>新增</p>
        <button @click="queryData"></button>
    </div>
</template>
<script type="text/ecmascript-6">
    import {getPolicys} from '../../../api/benefitApi'
    let chace = new Map();
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
        methods: {
            async queryData(){
                let key = 'queryList';
                let param = {
                    "contNo":"886825243505",
                    "name":"","idCardCode":"",
                    "agentNo":"01200123"
                };
                let data = chace.get(key);
                if(!data){
                    let res = await getPolicys(param);
                        data = res;
                        chace.set(key,data);

                }
                console.log(data);
            }
        },
        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
</style>
