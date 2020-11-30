var myMinxin = {
    data: () =>{
        return {
            testText: '测试数据'
        };
    },
    methods: {
        mixinFn: function() {
            console.log(this.testText);
        }
    }
};
export default myMinxin