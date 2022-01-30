// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    empty: true
  },

  onLoad() {

  },

  onPublish: function(){
    wx.showToast({
      title: '正在开发',
    })
  },

  onShareAppMessage: function(){
    return {
      title: "清清日记"
    }
  }
})
