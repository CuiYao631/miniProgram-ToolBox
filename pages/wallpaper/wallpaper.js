var feaUrl = "https://api.unsplash.com/photos/random"
var newUrl = "https://api.unsplash.com/photos"
var cliendID = "9zCOBN8DocV7aNAzQbMh0GexYhg0kgRb9FSkv2nqd-Y"

function fetchData (url, params, onSuccess) {
  wx.request({
    url: url,
    data: params,
    header: {
      "authorization": "Client-ID " + cliendID
    },
    success: onSuccess
  })
}

var app = getApp()
Page({
  data: {
    latests: [],
    modalHidden: true,
    user: {},
    FeaActived: false,
    NewActived: false,
    page: 1
  },
  loadNewList: function(e) {
    var that = this
    var params = {
      page: 1,
      per_page: 24,
      order_by: 'latest'
    }
    fetchData(newUrl, params, function (res) {
      that.setData({
        latests: res.data,
        FeaActived: false,
        NewActived: true
      })
    })
  },
  loadFeaList: function() {
    var that = this
    var params = {
      count:24,
      query:"4K"
      // page: 1,
      // per_page: 24,
      // order_by: 'latest'
    }
    fetchData(feaUrl, params, function (res) {
      that.setData({
        latests: res.data,
        FeaActived: true,
        NewActived: false
      })
    })
  },
  loadMore: function(e) {
    var that = this
    that.setData({
      page: that.data.page + 1
    })
    var params = {
      page: this.data.page,
      per_page: 12,
      order_by: 'latest'
    }

    if (that.data.FeaActived) {
      var url = feaUrl
    } else {
      var url = newUrl
    }
    fetchData(url, params, function (res) {
      that.setData({
        latests: that.data.latests.concat(res.data),
      })
    })
  },
  onLoad: function () {
    this.loadFeaList()
  }
})