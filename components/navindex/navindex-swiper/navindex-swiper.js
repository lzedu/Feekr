import behavior from '../behaviors/navindex-behavior.js'
Component({
  behaviors: [behavior],
  properties: {
    title:String
  },
  data: {
    current: 0
  }, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { 
    },
    moved: function () { },
    detached: function () { },
  },

  methods: {
    
  }
})