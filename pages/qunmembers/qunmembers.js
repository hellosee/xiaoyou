//qunmembers.js
//获取应用实例
const app = getApp()

Page({
    data: {
        message: 'Hello World',
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {

    },
    getUserInfo: function(e) {

    }
})