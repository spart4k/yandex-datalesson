import Vue from 'vue'
import VueRouter from 'vue-router'

import Lesson1 from '@/views/Lesson1'
import Lesson2 from '@/views/Lesson2'
import Lesson3 from '@/views/Lesson3'
import TemporaryStartScreen from '@/components/temp/TemporaryStartScreen'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/lesson1',
    component: TemporaryStartScreen,
  },
  {
    path: '/lesson1',
    name: 'lesson1',
    component: Lesson1,
  },
  {
    path: '/lesson2',
    name: 'lesson2',
    component: Lesson2,
  },
  {
    path: '/lesson3',
    name: 'lesson3',
    component: Lesson3,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
