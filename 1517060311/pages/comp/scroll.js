// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/t0.jpg",
      name: "鬼剑士"
      
    }, {
        image: "/pages/image/t2.png.jpg",
        name: "神枪手",
    }, {
        image: "/pages/image/t1.jpg",
        name: "格斗家",
    }, {
        image: "/pages/image/mofa.jpg",
        name: "魔法师",
    }, {
        image: "/pages/image/大叔.jpg",
        name: "圣职者",
    }, {
        image: "/pages/image/cike.jpg",
        name: "暗夜使者",
    }, {
        image: "/pages/image/守护.jpg",
        name: "守护者",
    }, {
      image: "/pages/image/moq.jpg",
      name: "魔枪士",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
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

  onEnd: function () {
    
    var that = this;
    var data = that.data;
    that.setData({
      isEnd: true /*,
      messages: data.messages.concat([{
        name: "Tom",
        last: "Hello!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})