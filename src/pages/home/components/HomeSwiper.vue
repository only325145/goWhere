<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
      <swiper-slide v-for="(value,index) in swiperList" :key="index">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/vc/a5/e0/64/c6bd8680fb67247db15df6057b.jpg",
      },{
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/vc/a4/36/26/07c5904b545d66b3abe72e9dfa.jpg",
      }]
    };
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
