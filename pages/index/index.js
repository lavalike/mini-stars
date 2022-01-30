// index.js
// 获取应用实例
const app = getApp()
var Bmob = require('../../utils/Bmob-2.2.51.min.js')

Page({
  data: {
    nickname: null,
    avatar: null,
    isLogin: false,
    empty: true
  },

  onLoad() {
    this.initUser()
  },

  initUser() {
    var _nickname = wx.getStorageSync('user-nickname')
    var _avatar = wx.getStorageSync('user-avatar')
    if (_nickname && _avatar) {
      this.setData({
        nickname: _nickname,
        avatar: _avatar,
        isLogin: true
      })
    }
  },

  onLogin(){
    const that = this
    wx.getUserInfo({
      success: function (res) {
        var info = res.userInfo
        wx.setStorageSync('user-nickname', info.nickName)
        wx.setStorageSync('user-avatar', info.avatarUrl)
        that.initUser()
        wx.showToast({
          title: '登录成功',
        })
      }
    })
  },

  onPublish: function () {
    // 发布记录
    // 日期、昵称、头像、内容

  },

  send(nickname, avatar) {
    console.log("nickname -> " + nickname)
    console.log("avatarUrl -> " + avatar)
  },

  onShareAppMessage: function () {
    return {
      title: "清清日记"
    }
  }
})