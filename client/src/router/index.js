import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home/Home.vue';
import Order from '../pages/Order/Order.vue';
import Person from '../pages/Person/Person.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})