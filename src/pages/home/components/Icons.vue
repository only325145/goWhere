<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,num) in pages" :key="num">
        <div class="icon" v-for="(value,item) in page" :key="item">
        <div class="iconImag">
            <img class="iconPicture" :src="value.imgUrl">  
        </div>
        <p class="imgText">{{value.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data () {
    return {
    iconList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
        text: "景点门票景点门票景点门票"
    },{
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
        text: "游乐场"
    },{
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
        text: "重庆必游" 
    },{
        id: "0004",
        imgUrl: "https://img1.qunarzz.com/piao/fusion/1811/1d/c46140e32fffa502.png",
        text: "去哪儿甄选" 
    },{
        id: "0005",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
        text: "一日游" 
    },{
        id: "0006",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png",
        text: "两江夜游"
    },{
        id: "0007",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
        text: "神秘武隆" 
    },{
        id: "0008",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png",
        text: "泡温泉" 
    },{
        id: "0009",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
        text: "野生动物园" 
    },{
        id: "0010",
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
        text: "全部玩乐" 
    },]
    }
  },
  computed: {
    pages () {
        const pages = [];
        this.iconList.forEach((value,index) => {
          const page = Math.floor(index/8);
          if(!pages[page]){
            pages[page] = [];
          }
          pages[page].push(value);
        });
        return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
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