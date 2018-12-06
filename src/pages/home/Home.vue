<template>
  <div id="home">
      <Header></Header>
      <HomeSwiper></HomeSwiper>
      <Icons></Icons>
      <Recommend></Recommend>
      <Weekend></Weekend>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import HomeSwiper from "./components/HomeSwiper.vue";
import Icons from "./components/Icons.vue";
import Recommend from "./components/Recommend.vue";
import Weekend from "./components/Weekend.vue";
export default {
  components: { Header, HomeSwiper, Icons, Recommend, Weekend }
};
</script>
