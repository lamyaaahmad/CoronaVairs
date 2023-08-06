import { createRouter, createWebHistory } from 'vue-router'
import  Home from "../components/Home.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ 
    path:'/',
  name:'home',
  component:Home
}, 
{
  path: '/about',
  name: 'about',
  component: () => import('../components/About.vue')
},
{
  path: '/sym',
  name: 'sym',
  component: () => import('../components/Symptoms.vue')
},
{
  path: '/prev',
  name: 'prev',
  component: () => import('../components/Prevention.vue')
},{
  path: '/treat',
  name: 'treat',
  component: () => import('../components/Prevention.vue')
},{
  path: '/treat',
  name: 'treat',
  component: () => import('../components/Treatment.vue')
},{
  path: '/faq',
  name: 'faq',
  component: () => import('../components/FAQ.vue')
},{
  path: '/news',
  name: 'news',
  component: () => import('../components/News.vue')
},{
  path: '/do',
  name: 'do',
  component: () => import('../components/Do.vue')
},

{
   path:'/how',
   name:'how',
   component:()=> import('../components/How.vue')
  
},
{
  path:'/pro',
  name:'pro',
  component:()=> import('../components/Protect.vue')
 
},
{
  path:'/wash',
  name:'wash',
  component:()=> import('../components/Wash.vue')
 
},



  ]
})

export default router
