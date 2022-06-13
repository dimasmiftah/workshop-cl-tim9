const indexController = require('../controllers/index.controller');
const postController = require('../controllers/post.controller');
const auth = require('../middlewares/auth');
//pushcomment
const router = require('express').Router();

router.get('/', indexController.index);

router.get('/post', postController.index);
router.get('/post/create', postController.create);
router.post('/post/create', postController.store);

module.exports = router;
