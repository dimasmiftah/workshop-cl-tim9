const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');
//pushcomment
const router = require('express').Router();

router.get('/', indexController.index);

router.get('/post', postController.index);
router.get('/post/create', postController.create);
router.post('/post/create', postController.store);
router.post('/post/:id/edit', postController.update);
router.get('/post/:id/delete', postController.delete);
router.get('/post/:id/edit', postController.edit);

module.exports = router;
