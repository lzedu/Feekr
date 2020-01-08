import behavior from '../navindex-behavior.js'
Component({
  behaviors: [behavior],
  properties: {
    title:String
  },
  data: {
    imgHeight: 0,
    current: 0
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
    },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function () { },

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
    imageLoad: function (e) {//获取图片真实宽度  
      var imgwidth = e.detail.width,
        imgheight = e.detail.height,
        //宽高比  
        ratio = imgwidth / imgheight;
      //计算的高度值  
      var viewHeight = wx.getSystemInfoSync().windowWidth*2 / ratio;
      var imgHeight = this.data.imgHeight;
      //把每一张图片的对应的高度记录到数组里  
      imgHeight = viewHeight;
      this.setData({
        imgHeight
      })
    },
    bindchange: function (e) {
      this.setData({
        current: e.detail.current
      })
    },
    _propertyChange: function (newVal, oldVal) {

    }
  }
})