// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id,"fdsfdsfsd")  
     wx.request({
       url: "https://api.it120.cc/xiaoxiameijia/shop/goods/detail",
       data:{
         id: options.id
       },
       success:res=>{
         console.log(res.data.data.basicInfo,"详情")
          this.setData({
            detailData: res.data.data.basicInfo
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
  addBuy(e){ 
    //加入购物车
    let arr = wx.getStorageSync("details");
    arr.push(e.currentTarget.dataset.shoppingdetail)
    wx.setStorageSync("details", arr)
    
    wx.showToast({
      title: "加入成功"
    })
    setTimeout(()=>{
      wx.switchTab({
        url: '../index/index'
      })
    },1000)
   
  },
  srcBig(event){
    console.log(11111111)
    console.log(event)
    let arr = [], src = event.currentTarget.dataset.src;
    arr.push(event.currentTarget.dataset.src);
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: arr, // 需要预览的图片http链接列表
    })
  }
})