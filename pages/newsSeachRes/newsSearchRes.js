// pages/newsSeachRes/newsSearchRes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    datas:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const titles = ['资讯', '商城']
    wx.request({
      method: 'POST',
      data: {id: options.id, keyword:options.keyword,disableLazyInit: 1},
      url: 'https://wapi.feekr.com/guide/search',
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success: result=>{
        this.setData({
          datas: [...this.data.datas,result.data.result]
        })
      }
    })

    setTimeout(()=>{
      wx.request({
        url: 'https://wapi.feekr.com/shop/product/search?sort=&paymentType=1&keyword='+options.keyword+'&page=1&count=5&shopid=FK',
        success: result => {
          this.setData({
            datas: [...this.data.datas,result.data.result]
          })
          const tabs = [{ title: titles[0], data: this.data.datas[0] }, { title: titles[1], data: this.data.datas[1] }]
          this.setData({ tabs })
          console.log(this.data.tabs)
        }
      })
    },500)
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

  }
})