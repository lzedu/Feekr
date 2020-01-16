// components/detail/detail-footer/detail-footer.js
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
    status:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pickLike(){
      this.setData({
        status:!this.data.status
      })
    }
  }
})
