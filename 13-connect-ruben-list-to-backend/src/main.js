import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(VueResource)

Vue.http.options.root = 'https://slack-clone-dc4e1.firebaseio.com';

new Vue({
  el: '#app',
  render: h => h(App)
})
