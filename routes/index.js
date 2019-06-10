var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({},(err,users)=>{
    res.render('index',{users:users})
  })
});

module.exports = router;
