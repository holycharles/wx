//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
     articlelist: [
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
  /**   
     * 预览图片  
     */
  previewImage: function (e) {
    let imageUrl = [];
    this.data.articlelist.map((article)=> {
      article.imgList.map((img)=>{
        imageUrl.push(img);
      });
    });

   
    var current = e.target.dataset.src;
    console.log(e.target);
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imageUrl
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
