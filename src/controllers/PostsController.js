const Post = require('../models/post.model');

module.exports = {
  async index(req, res) {
    try {
      const { skip } = req.query;
      const count = await Post.countDocuments({});
      const query = {
        limit: 8,
        sort: { created: 'desc' },
      };

      if (skip) {
        query.skip = skip;
      }

      const posts = await Post.find({}, null, query);
      res.send({ count, posts });
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async createPost(req, res) {
    try {
      const post = await new Post(req.body).save();
      res.json(post);
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  // async changePage(req, res) {
  //   try {
  //     const { page } = req.body;
  //     const result = await Post.find({})
  //       .limit(8)
  //       .skip((page - 1) * 8);
  //     res.send(result);
  //   } catch (error) {
  //     res.status(500).send({
  //       error: `An error has occured ${error}`,
  //     });
  //   }
  // },

  async viewOne(req, res) {
    try {
      const postId = req.params.id;
      const post = await Post.findOne({ _id: postId });
      res.json(post);
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async updatePost(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(req.body.id, req.body);
      post.save();
      res.json(post);
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },

  async deletePost(req, res) {
    try {
      const post = await Post.findByIdAndRemove(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).send({
        error: `An error has occured ${error}`,
      });
    }
  },
};
