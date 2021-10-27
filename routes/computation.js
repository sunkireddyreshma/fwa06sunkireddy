var express = require('express');
const url = require('url');
var router = express.Router();
const querystring = require('querystring');


/* GET my data page. */
router.get('/', function(req, res, next) {
    var arg = req.query.value;
    res.send('floor applied to: ' + arg + " is " + Math.floor(arg));
});


module.exports=router;