import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let defaultCity = "重庆"
try {
  if(localStorage.city) {   //localStorage相当于cache缓存
    defaultCity = localStorage.city   //重新加载页面时将获取localStorage.city里的值，所以刷新页面也将显示上次的选择数据
  }
} catch(e) {}

export default new Vuex.Store({
  state: {
    //city: "重庆"   //这样写固定值的话，即使通过vuex修改了城市数据，但刷新页面后又将变成重庆
    city: defaultCity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = city   //将用户选择的城市存入localStorage.city里
      } catch(e) {}
    }
  },
  actions: {
    changeCity(actions, city) {    //actions为自定义名称
      actions.commit("changeCity", city)
    }
  }
});
