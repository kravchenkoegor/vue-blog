import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Error from '@/components/Error'
import Post from '@/components/Post'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'

Vue.use(Router)

const isLoggedIn = (to, from, next) => {
  if (store.getters.isUserLoggedIn) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: isLoggedIn
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      beforeEnter: isLoggedIn
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      beforeEnter: isLoggedIn,
      props: true
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
      beforeEnter: isLoggedIn
    }
  ],
  mode: 'history'
})
