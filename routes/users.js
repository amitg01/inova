var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/',(req,res) => {
  User.create({name:req.body.name, number:req.body.number},(err,user) => {
    res.redirect('/');
  }) 
})

router.get('/:id',(req,res) => {
  var id = req.params.id;
  User.findById(id,(err,user) => {
    res.render('singleUser',{user:user});
  })
})

router.post('/:id/products',(req,res) => {
  var id = req.params.id;
  var obj = {product:req.body.product,amount:req.body.amount,date:new Date()};
  User.findByIdAndUpdate(id,{$push: {products:obj}},{new:true},(err,user) => {
    if (err) return next(err);

    if(user) {
      User.findByIdAndUpdate(id,{total: user.total+Number(req.body.amount)},{new:true},(err,user) => {
        if (err) return next(err);
        console.log(user.products['date']);
        res.render('singleUser',{user:user});
      });
    }
  })
})

router.post('/:id/payment',(req,res,next) => {
  var id = req.params.id;
  var obj = {product:"paid",amount:req.body.amount,mode:req.body.mode,date:new Date()};
  User.findByIdAndUpdate(id,{$push: {products:obj}},{new:true},(err,user) => {
    if (err) return next(err);
      User.findByIdAndUpdate(id,{total: user.total-Number(req.body.amount)},{new:true},(err,user) => {
        if (err) return next(err);
        res.render('singleUser',{user:user});
      })
  })
})

router.get('/:id/remove',(req,res,next) => {
  var id = req.params.id;
  User.findByIdAndRemove(id,(err)=>{
    if(err) return next(err);
    res.redirect('/');
  })
})


module.exports = router;
