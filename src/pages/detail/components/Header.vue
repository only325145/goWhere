<template>
  <div class="detailHeader">
    <router-link to="/" tag="div" class="goback" v-show="show">
      <div class="iconfont back">&#xe749;</div>
    </router-link>
    <div class="fixback" v-show="!show" :style="opacityStyle"> <!-- 绑定动态style -->
    景点详情
      <router-link to="/">
        <div class="iconfont backHome">&#xe749;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailHeader",
    data() {
      return {
        show: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      scrollTop() {
         const top = document.documentElement.scrollTop;
         if (top > 60){
            let opacity = top/140;
            opacity = opacity > 1 ? 1: opacity;    //滚动区域在60-140px之间时header部分是透明显示(opacity<1)
            this.opacityStyle = {opacity}
            this.show = false
         } 
         else {
            this.show = true
         }
      }
    },
    activated() {
      window.addEventListener("scroll", this.scrollTop)
    },
    deactivated() {
      window.removeEventListener("scroll", this.scrollTop)   //对于window全局的scroll监听事件只在此组件里进行，当该组件页面即将离开时去掉对scroll的监听
    }
  }
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
  .goback
    position: absolute
    left: .1rem
    top: .1rem
    width: .7rem
    height: .7rem
    border-radius: 50%
    background-color: rgba(0,0,0,0.5)
    .back
      text-align: center
      font-size: .4rem
      line-height: .7rem
      color: #fff
  .fixback
    position: fixed 
    top: 0
    left: 0
    right: 0
    z-index: 2
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background-color: $bkcolor
    .backHome
      position: absolute
      top: 0
      width: .64rem
      font-size: .4rem
      color: #fff
</style>