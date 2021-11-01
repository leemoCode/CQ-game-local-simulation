// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from 'vue-router';

// import Home from '../components/Home.vue';
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
