<template>
  <div class="list" ref="wraper">
    <div>
      <div class="area" >
        <div class="title border-topbottom">您的位置</div>
        <div class="buttonList">
          <div class="button">
            <div class="buttonText">重庆</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="buttonList">
          <div class="button" v-for="value in hot" :key="value.id">  <!-- 循环数组时的key值是默认的0、1、2...下标 -->
            <div class="buttonText">{{value.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(value, key) in cities" :key="key" :ref="key">  <!--  循环Object时value得到的是对象的内容，cities里面"A"是对象里的key值，"A"后的数据才是循环cities得到的内容 -->
        <div class="title border-topbottom">{{key}}</div>
        <ul class="itemList">
          <li class="item border-bottom" v-for="value1 in value" :key="value1.id">{{value1.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
      name: "citylist",
      props: {
        cities: Object,
        hot: Array,
        letter: String
      },
      mounted() {
        this.scroll = new BScroll(this.$refs.wraper)
      },
      watch: {
        letter() {
          if (this.letter) {
            const element = this.$refs[this.letter][0];   //this.$refs是一个对象，因为ref绑定的是循环的数据，所以this.$refs对象里面有全部的数据
                                                          //A:"[xxx]",B:"[xxx]",C:"[xxx]"...    this.$refs[this.letter][0]获取的是数组里面的DOM元素

            this.scroll.scrollToElement(element)     //better-scroll参数需要的是DOM元素
          }
        }
      }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color:#ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0    //此部分设定让元素自动撑开到页面区域大小，不用单独给定位元素设定宽高
    font-size: .24rem
    .area
      line-height: .44rem
      .title
        padding-left: .2rem
        background-color: #eee
      .buttonList 
        overflow: hidden
        background-color: #fff
        padding: .1rem .6rem .1rem .1rem    //左侧的距离是.2rem，但是因为显示边框的是buttonText区域，而buttonText区域与父级button之间还有.1rem的margin距离，所以一共是.2rem，和title区域显示出来是对齐的
        .button
          float: left
          width: 33.33%
          .buttonText
            margin: .1rem
            padding: .05rem 0
            text-align: center
            border: .02rem solid #ccc
            border-radius: .06rem
      .itemList
        .item
          line-height: .66rem
          padding-left: .2rem
</style>
