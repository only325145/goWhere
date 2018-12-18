<template>
  <div class="detailList">
    <div v-for="(value,key) in list" :key="key">
      <div class="listTitle border-bottom">
        <span class="listIcon"></span>
        {{value.title}}
      </div>
      <div v-if="value.children" class="listChildren">
        <detailList :list="value.children"></detailList>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailList",
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
  .listTitle
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    .listIcon
      position: relative   /* 必须使用relative,用absolute图标会被提高层级位于文字上面 */
      top: .1rem
      left: .1rem
      display: inline-block
      width: .36rem
      height: .36rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .listChildren
    padding: 0 .3rem
</style>