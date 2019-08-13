Page({
  onTap: function(){
    // wx.navigateTo({
    //   url: '../posts/post'
    // })
    wx.redirectTo({
      url: '../posts/post'
    })
  },
  onContainerTap: function(){
    console.log('Container tap')
  },
  onSubTap: function(){
    console.log('Sub tap')
  }
})
