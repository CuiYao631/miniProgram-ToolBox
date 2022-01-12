// pages/Tool/item/item.js
var app = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    loading: true,
    movie: {}
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 拼接请求url
    const url = app.globalData.ServerUrl+'/recs/get?id=' + options.id;
    // 请求数据
    wx.request({
      url: url,
      method:"post",
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res) {
        console.log(res.data);
        // 赋值
        _this.setData({

          movie: res.data,
          loading: false // 隐藏等待框
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: this.data.title +"工具"
    })
  }
})