// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */data: {
    navbar: ['演出','展览', '音乐', '旅游','读书会'],
    currentTab: 0,
    activityList: [
      {
        advimg: "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",        
        name: "武汉站 俄罗斯芭蕾国家剧院芭蕾舞《天鹅湖》",
        price: "¥90 起",
        address: "武汉中南剧场 14.8km",
        time:"10月27日开始"
      },
      {
        advimg: "http://p3.wmpic.me/article/2017/09/19/1505800793_ifRRQepR_215x185.jpg",
        name: "武汉站 俄罗斯芭蕾国家剧院芭蕾舞《天鹅湖》",
        price: "¥90 起",
        address: "武汉中南剧场 14.8km",
        time: "10月27日开始"
      }
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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
  
  }
})