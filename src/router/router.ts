import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../home/presentation/templates/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router