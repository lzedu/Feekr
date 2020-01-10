// components/ProSearch/ProSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hasSearched:{
      type:String
    },
    keyword:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: ''
  },

  /**
   * 组件的方法列表
   */
  lifetimes:{
    attached(){
      console.log(this.data)
      if(this.data.keyword){
        console.log(this.data.keyword)
        this.setData({
          inputValue:this.data.keyword
        })
      }
    }
  },
  methods: {
    bindInput:function(e){
      this.setData({
        inputValue: e.detail.value
      })
    },
    bindSearch:function(e){
      if (this.data.hasSearched == 'false') {
        wx.navigateTo({
          url: `/pages/searchRes/searchRes?keyword=${e.detail.value}`
        })
      } else {
        var myEventDetail = {
          keyword:e.detail.value
        }
        this.triggerEvent('myevent', myEventDetail)
      }
    },
    handleSearch:function(e){
      this.setData({
        inputValue: ''
      })
      var myEventDetail = {
        keyword: ''
      }
      this.triggerEvent('myevent', myEventDetail)
      
    }
  }
})
