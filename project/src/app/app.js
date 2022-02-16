import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import routes from '../routes.js';
import store from '../store.js';

const app_store = createStore(store);

const router = createRouter({
   routes: routes,
   history: createWebHistory(),
   scrollBehavior() {
      window.scrollTo(0,0);
   },
});

createApp(App)
   .use(app_store)
   .use(router)
   .mount('#app'); 