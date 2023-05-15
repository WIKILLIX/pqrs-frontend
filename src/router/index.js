import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {name:'pqrs'},
    },
    {
      path: '/pqrs',
      name: 'pqrs',
      component:()=>import('../views/HomeView.vue'),
      children:[
        {
        path:'dependencias',
        name:'dependence',
        component:()=>import('../modules/pqrs/dependences/views/Index.vue')
      }
    ]
    },
    {
      path:'/:pathMatch(.*)*',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
