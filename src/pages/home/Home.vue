<template>
  <div id="home">
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import Icons from "./components/Icons.vue";
export default {
  components: { Header, HomeSwiper ,Icons }
};
</script>
