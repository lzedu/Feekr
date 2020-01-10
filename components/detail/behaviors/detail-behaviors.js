import WxParse from '../../../pages/assets/wxParse/wxParse.js'
let behavior = Behavior({
  properties: {
    title: String
  },
  data: {
    productThumblist: [],
    productThumblistlen: 0,
    detailheader: {},
    group: [],
    userinfo:{},
    prodesc:{}
  },
  attached: function () {
    let id = wx.getStorageSync("id")
    // let id ="25954"
    var that = this
    wx.request({
      url: `https://wapi.feekr.com/shop/product/detail?productId=${id}&pvFrom=wap_index_new&shopid=FK`,
      success(res) {
        let { productDesc, productName, productPrice, productUnit, productUnitCount, productThumb, group, user, head, recom, productContain, productDetail, usage, rule } = res.data.result
        console.log(productDetail)
        that.setData({
          productThumblist: productThumb,
          productThumblistlen: productThumb.length,
          detailheader: {
            productDesc,
            productName,
            productPrice,
            productUnit,
            productUnitCount,
          },
          group,
          userinfo: {
            head,
            user,
            recom
          },
          prodesc:{
            productContain,
            productDetail: WxParse.wxParse('productDetail', 'html', productDetail, that),
            usage,
            rule
          }
        })
        console.log(that.data.prodesc.productDetail)
      }
    })
  },
  test() {
    console.log(2)
  }
})

module.exports = behavior