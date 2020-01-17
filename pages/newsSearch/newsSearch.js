// pages/newsSearch/newsSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keywordList: [],
    searchList: [],
    recentSearchList: [],
    inputValue:''
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }, 
  submitSearch: function (e) {
    var keyWord = e.currentTarget.dataset.title
    wx.request({
      url: 'https://wapi.feekr.com/guide/searchlist?keyword=' + keyWord + '&count=8',
      success: result => {
        this.setData({
          searchList: result.data.result.list
        })
        var slist = this.data.searchList
        var arr=[]
        if(slist.length){
          slist.forEach( val => {
            arr.push({id:val.id,title:val.site})
            return arr
          })
        }else{
          arr.push({id:'',title:keyWord})
        }
        var list = wx.getStorageSync('guideRecentSearch')
        if (list) {
          var flag = 0
          for(var item in list){
            for(var value in arr){
              if(list[item].id == arr[value].id&&list[item].title == arr[value].title){
                flag = 1
              }
            }
          }
          if(!flag){
            wx.setStorageSync('guideRecentSearch', [...list, ...arr])
          }
          
        } else {
          wx.setStorageSync('guideRecentSearch', [...arr])
        }
        if (slist.length == 0) {
          wx.navigateTo({
            url: `/pages/newsSeachRes/newsSearchRes?id=&keyword=${keyWord}`,
          })
        }
      }
    })
    
  },
  goToRes:function(e){
    wx.navigateTo({
      url: `/pages/newsSeachRes/newsSearchRes?id=${e.currentTarget.dataset.id}&keyword=${e.currentTarget.dataset.title}`
    })
  },
  gotoBack:function(){
    wx.navigateBack({})
  },
  clearInput: function () {
    this.setData({
      inputValue: '',
      searchList: []
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.request({
      url: 'https://wapi.feekr.com/guide/keywordlist',
      success: result => {
        this.setData({
          keywordList: result.data.result.list
        })
      }
    })
    this.setData({
      searchHistory: wx.getStorageSync('guideRecentSearch')
    })
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


