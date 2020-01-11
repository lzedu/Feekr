// components/homeComponents/columnlist/columnlist.js
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
    newList:'',
    hotList:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getNewList(){
      wx.request({
        url: `https://wapi.feekr.com/selection/detail?columnId=3&order=new&page=1`,
        success:(res)=>{
          this.setData({
            newList:res.data.result.info
          })
        }
      })
    }
  },
  lifetimes:{
    attached:function(){
      this.getNewList()
    }
  }
})
