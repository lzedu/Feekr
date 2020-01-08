// component/homeComponents/selectedlist/selectedlist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedlist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function () {
      wx.request({
        url: 'https://wapi.feekr.com/editor/selected',
        success: (res) => {
          this.setData({
            selectedlist: res.data.result.list
          })
        }
      })
    }
  }
})
