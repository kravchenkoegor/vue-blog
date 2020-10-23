require('dotenv').config();
const path = require('path');
const AuthController = require('./controllers/AuthController');
const PostsController = require('./controllers/PostsController');

module.exports = (router) => {
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  // fetch posts
  router.get('/posts', (req, res) => {
    PostsController.index(req, res);
  });

  // create a post
  router.post('/post', (req, res) => {
    PostsController.createPost(req, res);
  });

  // find post by id
  router.get('/post/:id', (req, res) => {
    PostsController.viewOne(req, res);
  });

  // update post
  router.put('/post/:id', (req, res) => {
    PostsController.updatePost(req, res);
  });

  // delete post
  router.delete('/post/:id', (req, res) => {
    PostsController.deletePost(req, res);
  });

  // TODO: убрать
  router.get('/edit/:id', (req, res) => {
    PostsController.viewOne(req, res);
  });

  router.post('/user', (req, res) => {
    AuthController.getUser(req, res);
  });

  router.post('/save_user', (req, res) => {
    AuthController.saveUser(req, res);
  });

  router.post('/register', (req, res) => {
    AuthController.register(req, res);
  });

  router.post('/login', (req, res) => {
    AuthController.login(req, res);
  });
};
