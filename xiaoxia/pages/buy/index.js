// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   detail:[],
   allPrice:0,
   allPrice1: 0,
   items: [
     { name: 'yes', value: '是' },
     { name: 'no', value: '否', checked: 'true' },
   ],
   goPrice:0,
   peopleValue:1,
   isTuan:"no",
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
    let that = this;
    that.setData({
      detail: wx.getStorageSync("details")
    })
    let a=0,b=0;
    wx.getStorageSync("details").map((v, i) => {
      a += v.minPrice;
      b += v.pingtuanPrice;
     
      if (that.data.isTuan === "yes") {
        that.setData({
          allPrice: a,
          allPrice1: b,
          goPrice: b * that.data.peopleValue,

        })
      } else {
        that.setData({
          allPrice: a,
          allPrice1: b,
          goPrice: a * that.data.peopleValue,

        })
      }
     
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
    let that = this;
    let arr = wx.getStorageSync("details");
    arr.map((v,i)=>{
      if(e.currentTarget.dataset.index ===i){
        arr.splice(i,1)
        wx.setStorageSync("details", arr)
       
        if (that.data.isTuan === "yes") {
          that.setData({
            detail: arr,
            allPrice: that.data.allPrice -= v.minPrice,
            allPrice1: that.data.allPrice1 -= v.pingtuanPrice,
            goPrice: that.data.allPrice1 * that.data.peopleValue,
          })
        } else {
          that.setData({
            detail: arr,
            allPrice: that.data.allPrice -= v.minPrice,
            allPrice1: that.data.allPrice1 -= v.pingtuanPrice,
            goPrice: that.data.allPrice * that.data.peopleValue,
          })
        }
      }
    })
    if(arr.length<=0){
      that.setData({
        detail: arr,
        allPrice: 0,
        allPrice1: 0,
        goPrice: 0,
        peopleValue:1,
      })
    }
   
  },
   people(e){
     //人数失去焦点
     let that = this;
     console.log("我失去焦点了", e.detail.value)
    
     if (e.detail.value<1){
       that.setData({
         peopleValue: 1,
       })
     }else{
       if (that.data.isTuan==="yes"){
         that.setData({
           peopleValue: e.detail.value,
           goPrice: that.data.allPrice1 * e.detail.value,
         })
       }else{
         that.setData({
           peopleValue: e.detail.value,
           goPrice: that.data.allPrice * e.detail.value,
         })
       }
      
     }
  },
  radioChange(e){
    let that = this;
    //是否团购
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value === "yes"){
      
          wx.showModal({
            title: '提示',
            content: '您选择了团购，三人成团，如无三人到店将按优惠价格收取，请明确您的人数哦',
           
            success: function (res) {
              let a = that.data.allPrice1 * that.data.peopleValue;
              let b = that.data.allPrice * that.data.peopleValue;
              if (res.confirm) {
               
                that.setData({
                  goPrice: a,
                  isTuan: e.detail.value,
                })
              } else {
                that.setData({
                  goPrice: b,
                  isTuan: e.detail.value,
                })
              }
            }
          })
     
      }else{
      that.setData({
        goPrice: that.data.allPrice * that.data.peopleValue,
        isTuan: e.detail.value,
      })
      }
  },
  goPriceMoney(){
    let that = this;
    wx.showToast({
      title: '暂未开发支付',
      icon: 'success',
      duration: 2000
    })
    // // 去支付
    // wx.request({
    //   url: 'https://api.it120.cc/xiaoxiameijia/pay/wx/wxapp',
    //   data: {
    //     // token: wx.getStorageSync("token").data.token,
    //     // // money: that.data.goPrice,
    //     // money: 0.1,
    //     // remark: "支付测试",
    //     // payName: "美甲服务费"
    //     token: wx.getStorageSync("token").data.token,
    //     money: 0.1,
    //     remark: "支付测试",
    //     payName: "小程序支付测试"
    //   },
    //   method:'POST',
    //   success: function (res) {
    //     console.log('api result:',res);
    // //     console.log(res.data);
    // //     if (res.data.code == 0) {
    // //       // 发起支付
    // //       wx.requestPayment({
    // //         timeStamp: res.data.data.timeStamp,
    // //         nonceStr: res.data.data.nonceStr,
    // //         package: 'prepay_id=' + res.data.data.prepayId,
    // //         signType: 'MD5',
    // //         paySign: res.data.data.sign,
    // //         fail: function (aaa) {
    // //           wx.showToast({ title: '支付失败' })
    // //         },
    // //         success: function () {
    // //           wx.showToast({ title: '支付成功' })
    // //         }
    // //       })
    // //     } else {
    // //       wx.showToast({ title: '服务器忙' + res.data.code })
    // //     }
    //   }
    // })
  }
})