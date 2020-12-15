

// 微信jssdk引入方式  <script src="//res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>
/*
* 微信初始化配置
* jssdk    后台接口获取的对象包含属性值：appId/timestamp/nonceStr/signature
* options  自定义参数
*/
function shareJs(jssdk, options = {}) {
  wx.config({
    debug: false,//是否开启调试功能，这里关闭！
    appId: jssdk.appId,//appid
    timestamp: jssdk.timestamp, //时间戳
    nonceStr: jssdk.nonceStr, //生成签名的随机字符串
    signature: jssdk.signature,//签名
    jsApiList: [
      'checkJsApi',
      'chooseImage',
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'getLocalImgData',
      'previewImage',
      'uploadImage',
      'downloadImage'
    ]
  });
  wx.error(function(error){
    err(error);
  });
  var defaults = {
    title: "xxxx",
    desc: "xxxxx",
    link: location.href, //分享页面地址,不能为空，这里可以传递参数！！！！！！！
    imgUrl: "http://osptest.newchinalife.com/ydbq/img/bitmap.png", //分享是封面图片，不能为空
    success: function () { }, //分享成功触发
    cancel: function () { } //分享取消触发，需要时可以调用
  }
  options = Object.assign({}, defaults, options);
  wx.ready(function () {
    var thatopts = options;
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: thatopts.title, // 分享标题
      desc: thatopts.desc, // 分享描述
      link: thatopts.link, // 分享链接
      imgUrl: thatopts.imgUrl// 分享图标
    });
    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: thatopts.title, // 分享标题
      desc: thatopts.desc, // 分享描述
      link: thatopts.link, // 分享链接
      imgUrl: thatopts.imgUrl // 分享图标
    });
  });
}


/*
* 调用微信jssdk拍照api功能
* count  1到9张照片
* sourceType 也可以动态设置参数 看需求
* 注释：由于新华要求图片是使用的base64，所以没有使用微信server上传图片，后台也没有使用相关id去取相关的图片
*/
function wxImgServise(count){
  var arrList = [];
  let p = new Promise((resolve,reject)=>{
    wx.chooseImage({
      count: count,
      sizeType: ['compressed'], //微信上传图片,一个压缩/一个原图
      sourceType: ['album', 'camera'],
      success: function (res) {
        let localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        let localLength = localIds.length;
        localIds.forEach((id,index) => {
          wx.getLocalImgData({
            localId: id,
            success: (data) => {
              var localData = data.localData
              if (localData.indexOf('data:image') != 0) {
                localData = 'data:image/jpeg;base64,' +  localData
              }
              localData = localData.replace(/\r|\n/g, '').replace('data:image/jgp', 'data:image/jpeg');  //base64格式
              arrList.push(localData)
              if( localLength - 1 == index  ){
                resolve(arrList)
              }
            }
          })
        })
      },
      fail: function (res) {
        Toast('摄像头调用失败');
      }
    })
  })
  return p;
}
/*
* 调起微信扫一扫接口
*/
function scanCode(){
  let p = new Promise((resolve,reject)=>{
    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        resolve(result)
      }
    });
  });
  return p;
}
/*
* init 页面初始化配置
*/
export default  {
  init(configData,options){
    shareJs(configData,options);
  },
  imgServise(count){
    return wxImgServise(count)
  },
  evenScanCode(){
    return scanCode()
  }
}
