<template>
    <!--上传文件示例-->
    <div>
        <button @change="btnClick()">点击</button>
        <div>
            <input type="file" ref="files" @change="getFile">
            <img :src="imgSrc" alt="">
        </div>
        <!-- 拍照上传图片  -->
        <div class="pic_question" id="vm">
            <!-- 影藏上传图片input -->
            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>
            <div class="add-img">
                <!-- <p class="font14">图片(最多6张，还可上传<span v-text="6-imgList.length"></span>张</p> -->
                <ul class="img-list">
                    <div class="add" @click="chooseType">
                        <div class="add-image" align="center">
                            <!-- <i class="iconfont icon-shangchuantupian"></i> -->
                            <p class="font13">图片</p>
                        </div>
                    </div>
                    <li v-for="(url,index) in imgList">
                        <!-- 删除图片 -->
                        <span class="del iconfont icon-guanbi" @click.stop="delImg(index)">X</span>
                        <!-- 显示图片 -->
                        <img :src="url.file.src">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import icons21 from '@/assets/images/icons21.png';
    export default {
        data() {
            return {
                imgUrl: icons21,
                imgList: [],
                size: 0,
                limit:6, //限制图片上传的数量
                tempImgs:[],
                imgSrc: null
            };
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
            getBase64Image(img) {
                let canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, img.width, img.height);
                let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
                let dataURL = canvas.toDataURL("image/"+ext);
                return dataURL;
            },
            btnClick(){
                let _this = this;
                var image = new Image();
                image.src = this.imgUrl;
                image.onload = function(){
                    let base64 = _this.getBase64Image(image);  // 带头部  data:image/png;base64
                    let base = base64.replace(/^.*?base64,/, '');  //去掉头部
                    console.log(base64,  base);
                }
            },
            getFile(){
                let file = this.$refs.files.files[0];
                console.log('file',file);
                if (file.type.indexOf('image') == -1) {
                    console.log('请选择图片文件');
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload = function(){
                            let width = image.width;
                            let height = image.height;
                            file.width = width;
                            file.height = height;
                            _this.imgSrc = file.src;
                        };
                        image.src= file.src;
                    }
                }
            },

            chooseType() {
                document.getElementById('upload_file').click();
                console.log('chooseType');
            },
            fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = '';
                console.log('el',el);
            },
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            // 文件夹处理
            folders(files) {
                let _this = this;
                //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                });

            },
            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                    _this.fileAdd(file)
                })
            },
            fileAdd(file) {
                console.log('file',file);
                if (this.limit !== undefined) this.limit--;
                if (this.limit !== undefined && this.limit < 0) return;
                //总大小
                this.size = this.size + file.size;
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    this.$dialog.toast({mes: '请选择图片文件'});
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload = function(){
                            let width = image.width;
                            let height = image.height;
                            file.width = width;
                            file.height = height;
                            _this.imgList.push({
                                file
                            });
                            console.log('imgList', _this.imgList);
                        };
                        image.src= file.src;
                    }
                }
            },
            // 删除图片
            delImg(index) {
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
                if (this.limit !== undefined) this.limit = 6-this.imgList.length;
            }
        },

        destroyed() {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    .pic_question{
        padding: 0 .48rem
    }
    .add-img{
        margin-top: 0.4rem
    }
    .add-image {
        width: 3.26rem;
        height: 3.26rem;
        margin-right: 0.2rem;
        position: relative;
        border: 1px solid #ccc;
    }
    .add-image i.icon-shangchuantupian{
        font-size: 3.26rem;
        line-height: 3.4rem;
        width: 3.26rem;
        height: 3.26rem;
        position: absolute;
        bottom: 1px;left: 0;
        color: #666
    }
    .add-image p{
        font-size: .52rem;
        color: #666;
        position: absolute;
        bottom: .1rem;left: 0;
        width: 3.26rem;
    }
    .img-list{
        display: flex;
        flex-wrap:wrap
    }
    .img-list>li{
        width: 3.26rem;
        height: 3.26rem;
        position: relative;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem
    }
    .img-list>li .del{
        position: absolute;
        top: 0;
        right: 0;
        color: #000
    }
    .img-list>li>img{
        width: 100%;
        height: 100%;
    }
</style>
