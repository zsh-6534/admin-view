import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入 element-ui
import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/zh-CN";
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
