// components/detail-suite/detail-suite.js
import behavior from '../../detail/behaviors/detail-behaviors.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [behavior],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 1,
    price: 0,
  },


  /**
   * 组件的方法列表
   */
  methods: {
    minusCount(e) {
      if (this.data.count > 1) {
        this.setData({
          count: this.data.count - 1,
          price: -e.currentTarget.dataset.price
        })
      }
      console.log(this.data.price)
    },
    addCount(e) {
      if (this.data.count < this.data.group[0].personMax) {
        this.setData({
          count: this.data.count + 1,
          price: e.currentTarget.dataset.price
        })
      }
      console.log(this.data.price)
    },
    checkboxChange(e) {
      if (e.detail.value.length) {
        this.setData({
          sum: this.data.sum + ~~e.detail.value[0]
        })
      } else {
        this.setData({
          sum: this.data.sum - ~~e.currentTarget.dataset.price
        })
      }
    },
    goBack() {
      wx.navigateBack()
    }
  },
  observers: {
    count: function (count) {
      this.setData({
        sum: this.data.sum + this.data.price
      })
    }
  }
})
