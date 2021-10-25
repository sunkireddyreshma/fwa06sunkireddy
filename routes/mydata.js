var mydata = require('mydata');
var router = mydata.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Sunkireddy Reshmareddy'});
});

module.exports = router;