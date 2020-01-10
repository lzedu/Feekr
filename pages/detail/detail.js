// pages/detail/detail.js
import behavior from '../../components/navindex/behaviors/detail-behavior1.js'
Page({

  /**
   * 页面的初始数据
   */
  behaviors:[behavior],
  data: {
    productThumblist: [],
    productThumblistlen: 0,
    detailheader: {},
    group: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    let id = options.id
    wx.setStorageSync("id",id)
    // console.log(wx.getStorageSync("id"))
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.test
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

  }
})