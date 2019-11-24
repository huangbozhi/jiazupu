// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive: 2,
    isLoading: false,
    animationData: {},
    wallsList: [
      {
        "avatar": "http://img5.imgtn.bdimg.com/it/u=3925552757,1000644004&fm=26&gp=0.jpg",
        "subTitle": "赵云(?——229年), 字子龙, 三国时期蜀国名将。"
      },
      {
        "avatar": "http://img5.imgtn.bdimg.com/it/u=3925552757,1000644004&fm=26&gp=0.jpg",
        "subTitle": "赵云(?——229年), 字子龙, 三国时期蜀国名将。"
      },
      {
        "avatar": "http://img5.imgtn.bdimg.com/it/u=3925552757,1000644004&fm=26&gp=0.jpg",
        "subTitle": "赵云(?——229年), 字子龙, 三国时期蜀国名将。"
      },
      {
        "avatar": "http://img5.imgtn.bdimg.com/it/u=3925552757,1000644004&fm=26&gp=0.jpg",
        "subTitle": "赵云(?——229年), 字子龙, 三国时期蜀国名将。"
      },
    ],
    jiafengjiaxun:
    {
      "image": "http://img5.imgtn.bdimg.com/it/u=3925552757,1000644004&fm=26&gp=0.jpg",
      "title": "赵 云(?——229年), 字子龙, 三国时期蜀国名将,赵云(?——229年), 字子龙, 三国时期蜀国名将,赵云(?——229年), 字子龙, 三国时期蜀国名将,赵云(?——229年), 字子龙, 三国时期蜀国名将"
    }

  },
  setActive: function (e) {
    console.log("---", e);
    var index = e.target.dataset.index;
    // 初始化动画数据
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      delay: 0
    });
    // 距离左边位置
    animation.left((index * 250) + 'rpx').step()
    // 设置动画
    this.setData({
      animationData: animation.export()
    });
    this.setData({
      isActive: index,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

})