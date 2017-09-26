//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     articlelist: {
       articleArr: [
         {
           iconImage: "",
           name: "李萧云",
           title: "微信事业部 | 市场拓展",
           body: "全新的办公环境，充满创意，温馨舒适。那么，能文能武的你们在哪里？招聘：HRBP、商务活动运营、商务拓展、产品经理、线上运营、Java、前端…",
           imgList: [
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg"
           ]
         },
         {
           iconImage: "",
           name: "李萧云",
           title: "微信事业部 | 市场拓展",
           body: "全新的办公环境，充满创意，温馨舒适。那么，能文能武的你们在哪里？招聘：HRBP、商务活动运营、商务拓展、产品经理、线上运营、Java、前端…",
           imgList: [
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
             "http://p3.wmpic.me/article/2017/09/19/1505800202_CivvASZB_215x185.jpg",
             "http://p1.wmpic.me/article/2017/09/19/1505788785_nGAweqYm_215x185.jpg"
           ]
         }
       ]
     },
     tab: "square",
     tabon: true,
     layervisible: true
  },
  toCreate(e) {
      let url = e.target.dataset.url;
     
      wx.navigateTo({
        url: url
      })
  },
  changetab(e) {
    let tabon = true
    let tab = e.target.dataset.tab;
    if(tab == "square") {
      tabon = true;
    } else {
      tabon = false;
    }
    this.setData({
      tab,
      tabon
    })
  },
  switchCat() {
    let layervisible = true;
    if(this.data.layervisible) {
      layervisible = false;
    } else {
      layervisible = true;
    }
    this.setData({
      layervisible
    })
  },
  /**   
     * 预览图片  
     */
  previewImage: function (e) {
    let imageUrl = [];
    this.data.articlelist.articleArr.map((article)=> {
      article.imgList.map((img)=>{
        imageUrl.push(img);
      });
    });
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imageUrl
    })
  },
  //事件处理函数
  bindViewTap: function() {
   
  },
  onLoad: function () {
   
  },
  getUserInfo: function(e) {
    
  }
})
