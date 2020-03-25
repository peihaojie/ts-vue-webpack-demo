/*
 * @Date         : 2020-03-25 18:39:03
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-03-25 19:16:27
 * @FilePath     : \src\main.ts
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App),
});
