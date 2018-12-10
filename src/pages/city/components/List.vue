<template>
  <div class="list">
    <div class="area " >
      <div class="title border-topbottom">您的位置</div>
      <div class="buttonList">
        <div class="button">
          <div class="buttonText">重庆</div>
        </div>
      </div>
    </div>
    <div class="area ">
      <div class="title border-topbottom">热门城市</div>
      <div class="buttonList">
        <div class="button">
          <div class="buttonText">北京</div>
        </div>
        <div class="button">
          <div class="buttonText">上海</div>
        </div>
        <div class="button">
          <div class="buttonText">杭州</div>
        </div>
        <div class="button">
          <div class="buttonText">成都</div>
        </div>
        <div class="button">
          <div class="buttonText">西安</div>
        </div>
        <div class="button">
          <div class="buttonText">重庆</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
        <ul class="itemList">
          <li class="item">阿克苏</li>
          <li class="item">阿拉善</li>
          <li class="item">阿拉善</li>
          <li class="item">阿克苏</li>
          <li class="item">阿克苏</li>
          <li class="item">阿克苏</li>
          <li class="item">阿拉善</li>
          <li class="item">阿拉善</li>
          <li class="item">阿克苏</li>
          <li class="item">阿克苏</li>
          <li class="item">阿克苏</li>
          <li class="item">阿拉善</li>
          <li class="item">阿拉善</li>
          <li class="item">阿克苏</li>
          <li class="item">阿克苏</li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
      name: "citylist"
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .border-topbottom
    &:before
      border-color: #777
    &:after
      border-color:#777
  .list
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
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
