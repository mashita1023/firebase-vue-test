import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/components/Signup'
import Signin from '@/components/Signin'
import HelloWorld from '@/components/HelloWorld'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'signin'
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: { requireAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

console.log(process.env.BASE_URL)


router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requireAuth = to.matched.some(record => record.meta.requireAuth)
  if (requireAuth && !currentUser) next('signin')
  else if (!requireAuth && currentUser) next()
  else next()
})

export default router
