<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="content" v-for="(value) in WeekendList" :key="value.id">
        <div class="imgbox">
          <img class="contentImg" :src="value.imgUrl"/>
        </div>
        <div class="contentText">
          <p class="textTitle">{{value.textTitle}}</p>
          <p class="text">{{value.text}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Weekend",
  data () {
    return {
      WeekendList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/source/1509/d5/82498669f3a48d.jpg_r_640x214_21f7a4ff.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .title
    line-height: .8rem
    background-color: #eee
    text-indent : .2rem
    color: $darkTextColor
  .imgbox
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .contentImg
      width:100%
  .contentText
    padding: .1rem
    min-width: 0       //虽然添加了ellipsis方法，文字超出范围没有挤到下一行，但还是没有...，添加此语句后可实现
    .textTitle
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .text
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
