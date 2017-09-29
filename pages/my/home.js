// pages/my/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "resource",
    tabon: true,
    layervisible: true,
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
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  changetab(e) {
    let tabon = true
    let tab = e.target.dataset.tab;
    if (tab == "resource") {
      tabon = true;
    } else {
      tabon = false;
    }
    this.setData({
      tab,
      tabon
    })
  }
})