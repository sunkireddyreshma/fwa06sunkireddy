var content = require('content');
var router = content.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Content'});
});

module.exports = router;