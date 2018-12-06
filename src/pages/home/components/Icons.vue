<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,num) in pages" :key="num">
        <div class="icon" v-for="(value,item) in page" :key="item">
        <div class="iconImag">
            <img class="iconPicture" :src="value.imgUrl">  
        </div>
        <p class="imgText">{{value.text}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((value, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(value);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .icons >>> .swiper-pagination-bullet-active 
    background-color: $bkcolor
  /* .icons
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 50%
    background-color: pink */    
    //原本的样式，定义整个图标区域的宽高。因为改变滑动区域的原因去掉
  .icons >>> .swiper-container   
    height: 0 
    padding-bottom: 50%   //使得滑动区域等于icons区域，这样即使图标不满两排也能在第二排点击滑动
  .icons
    margin-top: .1rem
    .icon 
      position: relative
      overflow: hidden
      float: left 
      height: 0 
      width: 25%
      padding-bottom: 25%
      .iconImag
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom:.44rem
        box-sizing: border-box
        padding: .1rem
        .iconPicture
          display: block
          margin: 0 auto
          height: 100%
      .imgText
        position: absolute 
        left: 0
        right: 0 
        bottom: 0 
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align: center
        ellipsis()
</style>
