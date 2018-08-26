// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerImage: [],
    dataList: [],
    buyDetailArr: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "https://api.it120.cc/xiaoxiameijia/banner/list",
      success: res => {
        this.setData({
          bannerImage: res.data.data
        })
      }
    })
    wx.request({
      url: "https://api.it120.cc/xiaoxiameijia/shop/goods/list",
      success: res => {
        console.log(res);
        this.setData({
          dataList: res.data.data
        })
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
  buy(e) {
    let arr = wx.getStorageSync("details");
    arr.push(e.currentTarget.dataset.shoppingdetail)
    wx.setStorageSync("details", arr)
    wx.showToast({
      title: "加入成功"
    })
  },
  lookDetail(e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../detail/index?id=' + e.currentTarget.dataset.id,
    })
  },

})