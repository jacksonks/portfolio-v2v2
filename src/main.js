import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import vuetify from '@/plugins/vuetify' // path to vuetify export
import vuetify from "./plugins/vuetify";
//import './assets/main.css'

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
