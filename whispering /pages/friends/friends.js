// pages/friends/friends.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    ets:[],
    baseUrl:app.globalData.baseUrl
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: app.globalData.baseUrl + '/friendsList/', // 接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      // 成功
      success: function(res) {
        console.log("加载艺人列表 成功", res.data.data);
        that.setData({
          ets: res.data.data
        });
      },
      // 失败
      fail: function(err) {
        console.log("加载艺人列表 失败", err);
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新")
    var that = this;
    wx.showNavigationBarLoading()

    setTimeout(() => {
      that.loadPer();
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * Get the data
   */

   loadPer:function(){

   },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})