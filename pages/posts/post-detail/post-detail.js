var postData = require("../../../data/posts-data.js")
Page({
  data: {
    isPlayMusic:false
  },
  onLoad: function (options) {
    var postId = options.postid;
    this.data.currentPostId = postId;
    this.setData({ postDetail: postData.postList[postId] })


    // wx.setStorageSync("key", "agar")    
    // wx.setStorageSync("key", {
    //   game: "gwer",
    //   developer: "yvonne"
    // })
    var postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected){
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    }
    else{
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync("posts_collected", postsCollected);
    }
  },
  onCollectionTap: function(event){
    // this.getPostsCollectedSyn();
    this.getPostsCollectedAsy();
  },
  
  getPostsCollectedSyn: function(){
    var postsCollected = wx.getStorageSync("posts_collected");
    var postCollected = postsCollected[this.data.currentPostId];
    // 点击后收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },

  getPostsCollectedAsy: function () {
    var that = this;
     wx.getStorage({
      key: "posts_collected",
      success: function(res){
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.currentPostId];
        // 点击后收藏变成未收藏，未收藏变成收藏
        postCollected = !postCollected;
        postsCollected[that.data.currentPostId] = postCollected;
        that.showToast(postsCollected, postCollected);
      }

    });
    
  },

  showToast: function (postsCollected, postCollected){
    // 更新文章是否收藏的缓存值
    wx.setStorageSync("posts_collected", postsCollected);
    // 更新数据绑定中的是否收藏值
    this.setData({
      collected: postCollected
    });
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消收藏",
      duration: 500,
      icon: "success"
    });
  },

  onMusicTap: function(event){
    var isPlayMusic = this.data.isPlayMusic;
    var dataInfo = postData.postList[this.data.currentPostId];
    if(isPlayMusic){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayMusic: false
      });
    }
    else{
      wx.playBackgroundAudio({
        dataUrl: dataInfo.music.url,
        title: dataInfo.music.title,
        coverImgUrl: dataInfo.music.coverImg
      }),
      this.setData({
        isPlayMusic: true
      });
    }
  }
})