require('dotenv').config()
const path = require('path')
const AuthenticationController = require('./controllers/AuthenticationController')
const PostsController = require('./controllers/PostsController')
const SongsController = require('./controllers/SongsController')

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

  router.post('/register', (req, res) => {
    AuthenticationController.register(req, res)
  })

  router.post('/login', (req, res) => {
    AuthenticationController.login(req, res)
  })

  router.get('/songs', (req, res) => {
    SongsController.index(req, res)
  })

  router.get('/posts', (req, res) => {
    PostsController.index(req, res)
  })

  router.post('/create', (req, res) => {
    PostsController.createPost(req, res)
  })

  router.post('/page', (req, res) => {
    PostsController.changePage(req, res)
  })

  router.get('/post/:id', (req, res) => {
    PostsController.viewOne(req, res)
  })

  router.get('/edit/:id', (req, res) => {
    PostsController.viewOne(req, res)
  })

  router.post('/save', (req, res) => {
    PostsController.savePost(req, res)
  })

  router.get('/delete/:id', (req, res) => {
    PostsController.deletePost(req, res)
  })
}
