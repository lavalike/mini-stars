// index.js
// 获取应用实例
const app = getApp()
var Bmob = require('../../utils/Bmob-2.2.51.min.js')

Page({
  data: {
    nickname: null,
    avatar: null,
    isLogin: false,
    empty: true,
    diaries: {}
  },

  onLoad() {
    this.initUser()
    this.loadDiaries()
  },

  loadDiaries() {
    const that = this
    const query = Bmob.Query("diary")
    query.find().then(res => {
      if(res.length > 0){
        that.setData({
          empty: false,
          diaries: res
        })
      }
    })
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

  onLogin() {
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
    // 检查是否验证过密码
    wx.showModal({
      title: "提示",
      content: "检查发布专有密码",
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '点击确定',
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '点击取消',
          })
        }
      }
    })

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