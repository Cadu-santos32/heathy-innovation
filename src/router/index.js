import { createRouter, createWebHistory } from 'vue-router'

import JogoDeAlimentos from '@/view/jogoDeAlimentos.vue'
import TelaInicial from '@/view/telaInicial.vue'
import nutrientesDoMeuPrato from '@/view/nutrientesDoMeuPrato.vue'

const routes = [
  { path: '/', component: TelaInicial },
  { path: '/jogoAlimento', component: JogoDeAlimentos },
  { path: '/nutrientesDoMeuPrato', component: nutrientesDoMeuPrato }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
