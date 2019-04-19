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
  watch: {
    money(money) {
      localStorage.setItem('money', money);
    },
    level(level) {
      localStorage.setItem('level', level);
    },
    xp(xp) {
      localStorage.setItem('xp', xp);
      if (xp > Math.pow(2, this.level + 1)) this.level++;
    }
  },
  created() {
    this.money = parseInt(localStorage.getItem('money')) || this.money;
    this.level = parseInt(localStorage.getItem('level')) || this.level;
    this.xp = parseInt(localStorage.getItem('xp')) || this.xp;
  },
  router,
  render: h => h(App)
}).$mount('#app')
