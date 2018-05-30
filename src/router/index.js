import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
// import Hello from '@/components/Hello'
import DetailsPlugin from '@/components/details-plugin/DetailsPlugin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/details-plugin',
      name: 'Details',
      component: DetailsPlugin
    }
  ]
});
