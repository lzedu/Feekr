let behavior = Behavior({
  properties: {
    title: String
  },
  data: {
    productThumblist: [],
    productThumblistlen:0,
    detailheader:{},
    group:[]
  },
  attached: function () {
    var that = this
    wx.request({
      url: 'https://wapi.feekr.com/shop/product/detail?productId=25954&pvFrom=wap_index_new&shopid=FK',
      success(res) {
        let { productDesc, productName, productPrice, productUnit, productUnitCount, productThumb,group } = res.data.result
        that.setData({
          productThumblist:productThumb,
          productThumblistlen:productThumb.length,
          detailheader:{
            productDesc,
            productName,
            productPrice,
            productUnit,
            productUnitCount,
          },
          group
        })
        console.log(res)
      }
    })
  }
})

module.exports = behavior