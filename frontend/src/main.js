import 'core-js/stable';
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';
import CoreuiVue from '@coreui/vue';
import { freeSet as icons  } from '@coreui/icons';
import store from './state';
import auth from './auth';
import validation from './validation';

// Initialize a few vue options.
Vue.config.performance = true;
Vue.component('ValidationProvider', validation);
Vue.use(CoreuiVue);
auth.configureRedirection(router, store); // auth middleware

// Bind libraries global scope.
axios.defaults.baseURL = 'http://localhost:3000/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;


// Instantiate.
new Vue({
  el: '#app',
  axios,
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
});
