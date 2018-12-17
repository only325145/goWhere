<template>
  <div class="picBanner">
    <router-link to="/showimg">
      <img class="bannerImg" src="http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg"/>
    </router-link>
    <div class="imgInfor">
      <div class="imgTitle">武隆天坑地缝国家地质公园(AAAAA景区)</div>
      <div class="imgNumber">
        <span class="iconfont">&#xe640;</span>
        <span>4</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner"
  }
</script>

<style lang="stylus" scoped>
  .picBanner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .bannerImg
      width: 100%
    .imgInfor
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      .imgTitle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
        color: #fff
      .imgNumber
        margin-top: .2rem
        padding: 0 .4rem
        height: .32rem
        line-height: .32rem
        border-radius: .2rem
        background-color: rgba(0,0,0,0.6)
        color: #fff
        font-size: .24rem
        .iconfont
          font-size: .24rem
          margin-right: .1rem
          
</style>