const Post = require('../models/Post');
const { post } = require('../routes/index.route');

module.exports = {
  index: async (req, res) => {
    const posts = await Post.findAll();
    //menambahkan komentar
    return res.render('post/index', {
      posts
    });
    
  },

  create: async (req, res) => {

    return res.render('post/create');

  },

  store: async (req, res) => {
    await Post.create({
      title : req.body.title,
      content : req.body.content
    });

    return res.redirect('/post');
  },

  update: async (req, res) => {
    await Post.update({
      title : req.body.title,
      content : req.body.content
    }, {
      where : {
        id: req.params.id
      }
    });

    return res.redirect('/post');
  },

  delete: async (req, res) => {
    await Post.destroy({
        where : {
          id: req.params.id
        }
    });

    return res.redirect('/post');
  },

  edit: async (req, res) => {
    const post = await Post.findOne({
      where: { 
        id: req.params.id 
      }
    });
    
    return res.render('post/edit', {
      post
    });
    
  },

};
