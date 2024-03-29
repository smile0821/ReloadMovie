// pages/posts/post.js
var postsData = require('../../data/posts-data.js')
Page({
  onDetail: function (event) {
    var postId = event.currentTarget.dataset.postid;
    console.log('postid:'+postId)
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?postid=' + postId
    })
  },

  onSwapDetal: function(event){
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: '../posts/post-detail/post-detail?postid=' + postId
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ post_key: postsData.postList})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})