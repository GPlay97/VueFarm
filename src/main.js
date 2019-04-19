import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  data: () => ({
    money: 200,
    level: 1,
    xp: 0
  }),
  router,
  render: h => h(App)
}).$mount('#app')
