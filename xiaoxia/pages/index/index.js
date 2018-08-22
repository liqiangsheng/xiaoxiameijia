//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isDised:false,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  loginClick(){
    wx.showToast({

      title: '登录成功加载中',

      icon: 'success',

      duration: 2000//持续的时间

    })
    wx.request({
      url: "https://api.it120.cc/xiaoxiameijia/user/wxapp/login",
      data: {
        code: wx.getStorageSync("code"),
        type: 2
      },
      success:res=>{
        wx.setStorageSync("token", res.data)
        wx.navigateTo({
          url: '/pages/home/index',
        })
      },

    })
  },
  registerClick(){
    wx.request({
      url: "https://api.it120.cc/xiaoxiameijia/user/wxapp/register/simple",
      data: {
        code: wx.getStorageSync("code"),
        type: 2
      },
      success: res => {
        console.log(res,"15")
        if(res.data.code==10000){
          //提示注册过，登录
          
          wx.showToast({

            title: '已有账号请登录',

            icon: 'none',

            duration: 2000//持续的时间

          })
          this.setData({
            isDised:true,
          })
        } else if (res.data.code==0){
        //提示注册成功，登录
          wx.showToast({

            title: '注册成功请登录',

            icon: 'none',

            duration: 2000//持续的时间

          })
          this.setData({
            isDised: true,
          })
        }else{
          //提示注册失败，原因
          wx.showToast({

            title: '注册失败请刷新',

            icon: 'none',

            duration: 2000//持续的时间

          })
          this.setData({
            isDised: false,
          })
        }
      },
      // fail：res1 => {
      //   console.log(res1, "15")
      // }

    })

  }
})
