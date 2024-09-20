import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Home from '../home/presentation/templates/Home.vue'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebase';
import Platform from '../platform/presentation/templates/Platform.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/platform', component: Platform, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        next();
      } else {
        next('/');
      }
    });
  } else {
    next();
  }
});

export default router