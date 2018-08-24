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
  telClick(){
    //拨打电话
    wx.makePhoneCall({
      phoneNumber: '15220064409' 
    })
  },
  maptap() {
      //定位导航。。
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          name: "福田口岸商业广场(2楼)",
          scale: 28
        })
      }
    })
  }
})