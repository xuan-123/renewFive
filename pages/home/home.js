// pages/home/home.js
  let age = 18;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'xuan',
    age,
    plain:false,
    flag:0,
    title:['衣服','裤子','鞋子']
  },
  clickChange(e){
    this.setData({
      name:'ni',
      plain: !this.data.plain
    })
  },
  handClick(e){
    const newflag =e.currentTarget.dataset.index
    this.setData({
      flag:newflag
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var newup = getApp()
    console.log(newup)
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
    console.log(this.data.name)
    this.setData({
      name : 'xuan123'
    })
    console.log(this.data.name)
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