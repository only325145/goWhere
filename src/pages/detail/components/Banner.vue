<template>
  <div class="picBanner" >
    <!-- <router-link to="/showimg">
      <img class="bannerImg" :src="this.bannerImg" />
    </router-link> -->
    <img class="bannerImg" :src="this.bannerImg" @click="show"/>
    <div class="imgInfor">
      <div class="imgTitle">{{this.sightName}}</div>
      <div class="imgNumber">
        <span class="iconfont">&#xe640;</span>
        <span>{{gallaryImgs.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "banner",
    methods: {
      show() {
        this.$emit("haveclick")  //点击图片显示图片详情，触发haveclick事件，在Detail.vue中将show改为true
      }
    },
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    }
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