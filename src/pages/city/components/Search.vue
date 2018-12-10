<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="searchInput"/>
  </div>
</template>

<script>
  export default {
      name: "citySearch"
  }
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"

  .search
    height: .72rem
    padding: .1rem
    background-color: $bkcolor
    .searchInput
      height: .62rem
      line-height: .62rem
      width: 100%
      padding: .1rem
      box-sizing: border-box
      border-radius: .06rem
      color: #666
      font-size: .2rem
      text-align: center
</style>
