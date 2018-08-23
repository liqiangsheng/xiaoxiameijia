// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   detail:[],
   allPrice:0,
   allPrice1: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //  this.setData({
  //    detail:wx.getStorageSync("details")
  //  })
  //  this.data.detail.map((v,i)=>{
  //    this.setData({
  //      allPrice: this.data.allPrice += v.minPrice,
  //      allPrice1: this.data.allPrice1 += v.pingtuanPrice,
  //    })
  //  })
   
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
    this.setData({
      detail: wx.getStorageSync("details")
    })
    let a=0,b=0;
    wx.getStorageSync("details").map((v, i) => {
      a += v.minPrice;
      b += v.minPrice;
      this.setData({
        allPrice: a,
        allPrice1: b,
      })
     
    })
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
  goHone(){
    //跳转到首页
    wx.switchTab({
      url: '../index/index'
    })
  },
  del(e){
    //删除
    console.log(e)
    let arr = wx.getStorageSync("details");
    console.log(arr)
    arr.map((v,i)=>{
      if(e.currentTarget.dataset.index ===i){
        arr.splice(i,1)
        wx.setStorageSync("details", arr)
        this.setData({
          detail: arr,
          allPrice: this.data.allPrice -= v.minPrice,
          allPrice1: this.data.allPrice1 -= v.pingtuanPrice,

        })
           }
    })
   
  }
  
})