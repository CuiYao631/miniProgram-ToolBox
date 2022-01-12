// pages/Tool/list/list.js
var app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    loading: true // 显示等待框
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;

    // 拼接请求url
    const url = app.globalData.ServerUrl+'/recs/list';
    // 请求数据
    wx.request({
      url: url,
      method:"POST",
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success: function(res) {
        console.log(res.data);
        // 赋值
        _this.setData({
          title: "工具",
          list: res.data,
          type: options.type,
          loading: false // 关闭等待框
        })
      }
    })
  }
})
