// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: ["/assets/bu/bu.png", "/assets/bu/jiandao.png", "/assets/bu/shitou.png"],
    currentNum:0,
    setInter:'',
    tip:'看结果',
    count:0,
    lowcount:0,
    flag:false,
    imger:0
  },
  //再来一次
  renew(e){
    var that = this
    clearInterval(that.data.setInter)
    that.data.setInter = setInterval(() => {
      const number = parseInt(Math.random() * 3)
      this.setData({
        currentNum: number,
        tip:'看结果'
      })
    }, 80)
    that.setData({
      flag: false
    })
  },
  tonull(e){
    this.setData({
      count:0,
      lowcount:0
    })
    var that = this
    clearInterval(that.data.setInter)
    that.data.setInter = setInterval(() => {
      const number = parseInt(Math.random() * 3)
      this.setData({
        currentNum: number
      })
    }, 80)
    that.setData({
      flag: false
    })
  },
  //点击我出的
  imgclick(e){
    
    var that = this;

    if(!that.data.flag){
      
      clearInterval(that.data.setInter)
      const hiNum = that.data.currentNum
      const myNum = e.currentTarget.dataset.index
      console.log(that.data.currentNum)
      console.log(e)

      that.setData({
        imger: myNum
      })

      if (hiNum == myNum) {
        this.setData({
          tip: '平局'
        })
      } else if (myNum == 0 && hiNum == 1 || myNum == 1 && hiNum == 2 || myNum == 2 && hiNum == 0) {
        this.setData({
          tip: '你输了',
          lowcount: that.data.lowcount + 1
        })
      } else if (myNum == 0 && hiNum == 2 || myNum == 1 && hiNum == 0 || myNum == 2 && hiNum == 1) {
        this.setData({
          tip: '你赢了',
          count: that.data.count + 1
        })

      }
      that.setData({
        flag: true
      })
    }else{
      if (that.data.flag) {
        wx.showModal({
        title: '提示',
        content: '请点击再来一次',
        showCancel:false,
        success(res) {
          if (res.confirm) {

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
        that.setData({
          flag: true
        })
      }
     
      
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var that = this
    that.data.setInter = setInterval(() => {
      const number = parseInt(Math.random() * 3)
      this.setData({
        currentNum: number
      })
    }, 80)
    
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