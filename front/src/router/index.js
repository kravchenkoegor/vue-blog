import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import EditUser from '@/components/EditUser'
import Error from '@/components/Error'
import Post from '@/components/Post'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'

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
      path: '/edit_user',
      name: 'EditUser',
      component: EditUser,
      beforeEnter: isLoggedIn
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post,
      beforeEnter: isLoggedIn
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
      beforeEnter: isLoggedIn
    },
    {
      path: '/edit/:id',
      name: 'EditPost',
      component: EditPost,
      beforeEnter: isLoggedIn
    },
    {
      path: '/delete/:id',
      name: 'DeletePost',
      component: EditPost,
      beforeEnter: isLoggedIn
    }
  ],
  mode: 'history'
})
