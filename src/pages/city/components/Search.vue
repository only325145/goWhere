<template>
  <div>
    <div class="search">
      <input v-model="content" class="searchInput" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="showBox" v-show="content" ref="search">
      <ul>
        <li class="item border-bottom" v-for="(value,key) in list" :key="key">{{value.name}}</li>
        <li class="item border-bottom" v-show="nodata">没有相关数据</li>  <!-- 没有匹配数据的时候显示这句话（即list里面没有数据） -->
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    name: "citySearch",
    data() {
      return{
        content: "",
        timer: null,
        list: [],
      }
    },
    props: {
      cities: Object
    },
    computed: {
      nodata() {
        return !this.list.length
      }
    },
    watch: {      //监听到输入内容发生变化时的操作
      content() {
        if (this.timer) {
          clearTimeout(this.timer)   //防止用户操作过快
        }
        const timer = setTimeout(() => {
          const result = [];
          for(let i in this.cities){
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.content) > -1 || value.name.indexOf(this.content) > -1) {
                result.push(value)
              }   //在cities数据中匹配输入框里的内容，匹配城市拼音或者名称。匹配成功就将数据（cities中的城市对象数据）放在result数组中
            })
          }
          this.list = result;   //将最终搜索完成的数组赋值给list
        }, 100);
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.search)  //为搜索出来的区域设置滑动效果
    }
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
  .showBox
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background: #eee   /* 设置背景色挡住下面的内容 */
    .item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
