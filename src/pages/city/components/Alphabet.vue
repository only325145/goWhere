<template>
  <ul class="list">
    <li class="item" v-for="value in letters" :key="value" 
      @click="leftMach" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="value"
    >{{value}}</li>
  </ul>
</template>

<script>
  export default {
    name: "alphabet",
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {
      this.startY = this.$refs["A"][0].offsetTop
    },
    computed: {
      letters() {
        const letters = [];
        for(let i in this.cities) {
          letters.push(i)
        };
        return letters;
      }
    },
    methods: {
      leftMach(e) {
        this.$emit("change", e.target.innerText);   //e.target是获取点击处的元素
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if(this.touchStatus){
          if(this.timer) {    //函数节流，限制函数执行的频率
            clearTimeout(this.timer)
          };
          this.timer = setTimeout(() => {
            //const startY = this.$refs["A"][0].offsetTop;   //获取A字母与父级元素（头部蓝色区域）的距离
            const touchY = e.touches[0].clientY - 89;    //获取当前点击位置距离页面顶部的距离，89是头部蓝色区域的高度
            const index = Math.floor((touchY - this.startY)/19);   //touchY - this.startY得到当前滑动位置到A的距离
            if (index >=0 && index < this.letters.length){
              this.$emit("change", this.letters[index]);
            }
          },16);
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      text-align: center
      line-height: .38rem
      color: $bkcolor
</style>