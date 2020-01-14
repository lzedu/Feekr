import WxParse from '../../../pages/assets/wxParse/wxParse.js'
var app = getApp()
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
    prodesc:{},
    sum: 0,
    counts: []
  },
  ready: function () {
    let id = wx.getStorageSync("id")
    // let id =app.globalData.detailId
    // console.log(app.globalData.detailId)
    var that = this
    wx.request({
      url: `https://wapi.feekr.com/shop/product/detail?productId=${id}&pvFrom=wap_index_new&shopid=FK`,
      success(res) {
        let { productDesc, productName, productPrice, productUnit, productUnitCount, productThumb, group, user, head, recom, productContain, productDetail, usage, rule } = res.data.result
        // console.log(productDetail)
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
          },
          sum:group[0].groupPrice
        })
        console.log(that.data.group)
        let counts = that.data.group.map((value, index) => {
          if (index === 0) {
            return {
              id: value.groupId,
              count: 1,
              price: value.groupPrice,
              name: value.groupName,
              desc: value.groupDesc
            }
          } else {
            return {
              id: value.groupId,
              count: 0,
              price: value.groupPrice,
              name: value.groupName,
              desc: value.groupDesc
            }
          }
        })
        that.setData({
          counts
        })
        // console.log(that.data.counts)
      }
    })
  },
  test() {
    console.log(2)
  }
})

module.exports = behavior