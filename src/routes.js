require('dotenv').config()
const path = require('path')
const AuthenticationController = require('./controllers/AuthenticationController')
const PostsController = require('./controllers/PostsController')

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  router.post('/api/register', (req, res) => {
    AuthenticationController.register(req, res)
  })

  router.post('/api/login', (req, res) => {
    AuthenticationController.login(req, res)
  })

  router.get('/api/posts', (req, res) => {
    PostsController.index(req, res)
  })

  router.post('/api/create', (req, res) => {
    PostsController.createPost(req, res)
  })

  router.post('/api/page', (req, res) => {
    PostsController.changePage(req, res)
  })

  router.get('/api/post/:id', (req, res) => {
    PostsController.viewOne(req, res)
  })

  router.get('/api/edit/:id', (req, res) => {
    PostsController.viewOne(req, res)
  })

  router.post('/api/save_post', (req, res) => {
    PostsController.savePost(req, res)
  })

  router.get('/api/delete/:id', (req, res) => {
    PostsController.deletePost(req, res)
  })

  router.post('/api/user', (req, res) => {
    AuthenticationController.getUser(req, res)
  })

  router.post('/api/save_user', (req, res) => {
    AuthenticationController.saveUser(req, res)
  })
}
