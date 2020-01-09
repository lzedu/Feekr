// component/homeComponents/newlist/newlist.js
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
    newlist:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    attached:function(){
      wx.request({
        url:'https://wapi.feekr.com/news/lists?page=1&count=3',
        success:(res)=>{
          // console.log(res.data)
          this.setData({
            newlist:res.data.result.list
          })
        }
      })
    }
  }
})
