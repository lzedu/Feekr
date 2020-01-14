// components/detail-suite/detail-suite.js
import behavior from '../../detail/behaviors/detail-behaviors.js'
var app = getApp()
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
    // count: 1,
    price: 0,
    user:wx.getStorageSync("username") || '',
  },
  lifetimes:{
    

  },
  ready() {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    minusCount(e) {
      let currentindex = e.currentTarget.dataset.id
      if (this.data.counts[currentindex].count > 1) {
        let counts = this.data.counts.map((value, index) => {
          if (currentindex === index) {
            return {
              id: value.id,
              count: value.count - 1,
              price: value.price,
              name: value.groupName,
              desc: groupDesc
            }
          } else {
            return value
          }
        })
        this.setData({
          counts,
          price: -e.currentTarget.dataset.price
        })
      }
      // console.log(this.data.price)
    },
    addCount(e) {
      let currentindex = e.currentTarget.dataset.id
      if (this.data.counts[currentindex].count < this.data.group[currentindex].personMax) {
        let counts = this.data.counts.map((value, index) => {
          if (currentindex === index) {
            return {
              id: value.id,
              count: value.count + 1,
              price: value.price,
              name: value.name,
              desc: value.desc
            }
          } else {
            return value
          }
        })
        this.setData({
          counts
          // price: e.currentTarget.dataset.price
        })
      }
      console.log(this.data.counts)
    },
    checkboxChange(e) {
      // this.data.count
      let currentIndex = e.currentTarget.dataset.id
      if (e.detail.value.length) {
        let counts = this.data.counts.map((value, index) => {
          if (index === currentIndex) {
            return {
              id: value.id,
              count: 1,
              price: value.price,
              name: value.name,
              desc: value.desc
            }
          } else {
            return value
          }
        })
        this.setData({
          counts
          // sum: this.data.sum + ~~e.detail.value[0]
        })
        // let len = app.globalData.userOrder.len
      } else {
        let counts = this.data.counts.map((value, index) => {
          if (index === currentIndex) {
            return {
              id: value.id,
              count: 0,
              price: value.price,
              name: value.name,
              desc: value.desc
            }
          } else {
            return value
          }
        })
        this.setData({
          counts
          // sum: this.data.sum - ~~e.currentTarget.dataset.price
        })
      }
    },
    goBack() {
      wx.navigateBack()
    },
    writeInfo(){
      if(this.data.user){
        let counts = this.data.counts.filter((value)=>{
          return value.count >0
        })
        app.globalData.userOrder = counts
        app.globalData.price = this.data.sum
        wx.navigateTo({
          url: `/components/detail-suite/detail-suite-pay/detail-suite-pay?title=${this.data.detailheader.productName}`,
        })
      }else{
        app.globalData.userOrder = []
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }
    }
  },
  observers: {
    counts: function () {
      // console.log(111)
      // this.setData({
      //   sum: this.data.sum + this.data.price
      // })
      let sum = this.data.counts.reduce((sum,value)=>{
        return sum + ~~value.price*~~value.count
      },0)
      this.setData({
        sum
      })
    }
  }
})
