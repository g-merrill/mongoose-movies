var express = require('express');
var router = express.Router();
const moviesCtrl = require('../controllers/movies');


/* GET /movies/new */

router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.post('/', moviesCtrl.create);

module.exports = router;
