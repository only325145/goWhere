<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <router-link tag="li" to="/detail"  class="content border-bottom" v-for="(value) in list" :key="value.id">
        <img class="contentImg" :src="value.imgUrl"/>
        <div class="contentText">
          <p class="textTitle">{{value.textTitle}}</p>
          <p class="text">{{value.text}}</p>
          <input class="butt" type="button" value="查看详情"/>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background-color: #eee
    text-indent : .2rem
    color: $darkTextColor
  .content
    overflow: hidden
    height: 1.9rem
    display: flex
    .contentImg
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .contentText
      flex: 1
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
      .butt
        margin-top: .16rem
        line-height: .44rem
        background-color: $bkcolor
        padding: 0 .1rem
        border-radius: .06rem
</style>
