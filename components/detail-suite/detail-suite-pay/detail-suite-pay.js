// components/detail-suite/detail-suite-pay/detail-suite-pay.js
var app = getApp()
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
    title:'',
    counts:[],
    sum:0
  },
  ready(){
    let { title } = this.options
    let counts = app.globalData.userOrder
    // console.log(counts)
    this.setData({
      title,
      counts,
      sum: app.globalData.price
    })
    // console.log(this.data.counts)
    // console.log(this.options)
    // console.log(this.data.counts)
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
