// pages/search-result/search-result.js
Page({

  /**
   * Page initial data
   */
  data: {
    searchName : '',
    ets:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var name = options.searchName
    this.setData({
      searchName: name
    })

    var that = this
    wx.request({
      url: app.globalData.baseUrl + '/searchFriends?username=' + searchName, // 接口地址
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