<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <li class="content border-bottom" v-for="(value) in recommendList" :key="value.id">
        <img class="contentImg" :src="value.imgUrl"/>
        <div class="contentText">
          <p class="textTitle">{{value.textTitle}}</p>
          <p class="text">{{value.text}}</p>
          <input class="butt" type="button" value="查看详情"/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Recommend",
  data () {
    return {
      recommendList: [{
        id: "0001",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0002",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0003",
        imgUrl: "http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_200x200_45d36d9b.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0004",
        imgUrl: "http://img1.qunarzz.com/sight/p0/201311/27/5dad2ac65813222058b7596ed26a2255.jpg_200x200_8f9bed8c.jpg",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      {
        id: "0005",
        imgUrl: "http://img1.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_200x200_839ce24d.png",
        textTitle: "重庆洪崖洞",
        text: "重庆网红打卡必经之处，现实版的千与千寻重庆网红打卡必经之处，现实版的千与千寻"
      },
      ]
    }
  }
}
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
