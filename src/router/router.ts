import { createRouter, createWebHistory } from 'vue-router'
import Home from '../home/presentation/templates/Home.vue'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../firebase/firebase';
import Heroes from '../heroes/presentation/templates/Heroes.vue';
import CreateHeroes from '../heroes/presentation/templates/CreateHeroes.vue';
import ViewHero from '../heroes/presentation/templates/ViewHero.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/heroes', component: Heroes, meta: { requiresAuth: true } },
  { path: '/heroes/create', component: CreateHeroes, meta: { requiresAuth: true } },
  { path: '/heroes/details/:id', component: ViewHero, meta: { requiresAuth: true } },
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