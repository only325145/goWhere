<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="swiperstart">
    <!-- slides -->
      <swiper-slide v-for="(value,index) in list" :key="index">
        <img class="swiperImg" alt="" :src="value.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000
      }
    };
  },
  computed: {
    swiperstart() {
      return this.list.length
    }
  }
};
</script>

<style lang="stylus" scoped>   //定义的是当前组件(即HomeSwiper)里面的样式
.swiper >>> .swiper-pagination-bullet-active  //定义swiper组件里面的class样式，只要当前组件里出现swiper组件里的此class做出的样式改变
  background-color: white
.swiper
  overflow: hidden
  width: 100%
  height: 0 
  padding-bottom: 31.25%    //使得图片宽高保持固定的比例
  background-color: #ccc
  color: #000
  .swiperImg
    width: 100%
  .test 
    color: #000
</style>
