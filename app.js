// app.js
App({
  onLaunch() {
    var Bmob = require('./utils/Bmob-2.2.51.min.js')
    // Secret Key + API安全码
    Bmob.initialize("1ca4f6d0908d5ecc", "880408")
  },
  globalData: {
    userInfo: null
  }
})
