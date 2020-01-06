let behavior = Behavior({
  properties: {
    title:String
  },
  data: {
    list:{},
    swiperlist:[],
    stylelist:[],
    newProductlist:[],
    specialsProductlist:[]
  },
  attached: function () { 
    var that = this
    wx.request({
      url: 'https://wapi.feekr.com/shop/home/index?shopid=FK',
      success(res){
        that.setData({
          swiperlist:res.data.result.slider,
          stylelist:res.data.result.style,
          newProductlist: res.data.result.newProduct,
          specialsProductlist: res.data.result.specialsProduct
        })
          console.log(res)
      }
    })
  },

})

module.exports = behavior