<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="content" v-for="(value) in list" :key="value.id">
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
  props: {
    list: Array
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
