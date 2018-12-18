<template>
  <div class="showimg" v-show="show">
    <div class="imgHeader">
      <!-- <router-link to="/detail">
        <span class="iconfont back">&#xe749;</span>
      </router-link> -->
      <span class="iconfont back" @click="hide">&#xe749;</span>
      <div class="imgTitle">景区图片</div>
    </div>
    <div class="imgList">
      <div class="bannerImg" v-for="(value,key) in gallaryImgs" :key=key>
        <img class="pic" :src="value" />  <!-- 属性里面使用数据采用 :src的方式 -->
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
  export default {
    name: "showimg",
    data(){
      return{
        gallaryImgs: [],
      }
    },
    props: {
      show: Boolean
    },
    methods: {
      getImgInfor() {
        Axios.get("/detail.json").then(this.getImgInforSucc);
      },
      getImgInforSucc(res) {
        res = res.data;
        if(res.ret && res.data) {
          const data = res.data;
          this.gallaryImgs = data.gallaryImgs;
        }
      },
      hide() {
        this.$emit("change",this.show)    //当点击imgList页面的返回键时提交一个change事件，在Detail.vue中当本组件侦测到此事件时将show改为false
      }
    },
    mounted() {
      this.getImgInfor()
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl" 
  .showimg
    position: absolute   /* 设置为relative背景色将只会比图片区域多一点，不会是整个页面。设置为absolute背景色铺满整个画面 */
    top: 0 
    bottom: 0
    left: 0
    right: 0
    background-color: #f5f5f5
    .imgHeader
      position: fixed
      z-index: 91
      width: 100%
      height: .88rem
      background: #fff
      border-bottom: 1px solid #e0e0e0
      .back
        position: absolute
        left: 0
        top: 0
        font-size: .4rem
        color: #333
        text-align: center
        width: .8rem
        height: .88rem
        line-height: .88rem
      .imgTitle
        /* overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis */
        ellipsis()
        margin: 0 1rem
        line-height: .88rem
        font-size: .32rem
        text-align: center
        color: #333
    .imgList
      padding: 1.08rem .2rem .4rem .2rem
      zoom: 1
      overflow: hidden
      .bannerImg
        width: 50%    /* 对图片容器设置宽度50%，以此确保图片的宽度 */
        float: left
        padding-right: .05rem
        margin-bottom: .1rem
        box-sizing: border-box
        .pic
          width: 100%
</style>