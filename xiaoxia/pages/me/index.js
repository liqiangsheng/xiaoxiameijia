// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    footIndex: 3,
    userInfo:{},

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:res=>{
        console.log(res.userInfo,"dsfjkdsjkfs")
        this.setData({
          userInfo: res.userInfo
        })
        console.log(this.userInfo,"dasdas")
      }
         
    })

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
  menuClick(e) {
    this.setData({
      footIndex: e.target.dataset.num
    })
    if (e.target.dataset.num == 1) {
      wx.navigateTo({
        url: '../home/index',
      })
    }
    if (e.target.dataset.num == 2) {
      wx.navigateTo({
        url: '../buy/index',
      })
    }
    if (e.target.dataset.num == 3) {
      wx.navigateTo({
        url: 'index',
      })
    }
  }
})