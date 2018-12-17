<template>
  <div id="app">
    <keep-alive>   <!-- 减少ajax数据请求，请求过的数据再次请求时将直接从内存里面读取数据 -->
      <router-view></router-view>  <!-- 因为涉及整个页面的跳转，所以整个页面展示都是通过<router-view>来实现，
                                 一开始的Home组件显示是根据配置根目录路由链接显示出来的 -->
    </keep-alive>
  </div>
</template>

<script>
</script>
<style lang="less">
</style>
