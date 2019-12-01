import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

export const eventBus = new Vue();

Vue.use(VueRouter);

import {routes} from './router/routes' 

const router = new VueRouter({	 
    routes,  
    mode: 'history'   
  });


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
