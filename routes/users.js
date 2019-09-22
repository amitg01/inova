var express = require("express");
var router = express.Router();
var User = require("../models/users");

/* GET users listing. */


router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.json({ success: false, err });
    return res.json({ success: true, users });
  });
});

router.post("/", (req, res) => {
  User.create(
    { name: req.body.name, number: req.body.number },
    (err, user) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(201).json({ success: true, user });
    }
  );
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.json({ sucess: true, user });
  });
});

router.put("/:id/purchase", (req, res) => {
  var id = req.params.id;
  var obj = {
    product: req.body.product,
    amount: req.body.amount,
    date: new Date()
  };
  User.findByIdAndUpdate(
    id,
    { $push: { products: obj } },
    { new: true },
    (err, user) => {
      if (err) return res.json({ err });

      if (user) {
        User.findByIdAndUpdate(
          id,
          { total: user.total + Number(req.body.amount) },
          { new: true },
          (err, user) => {
            if (err) return res.json(err);
            return res.json({ success: true, user });
          }
        );
      }
    }
  );
});

router.put("/:id/payment", (req, res) => {
  var id = req.params.id;
  var obj = {
    product: "paid",
    amount: req.body.amount,
    mode: req.body.mode,
    date: new Date()
  };
  User.findByIdAndUpdate(
    id,
    { $push: { products: obj } },
    { new: true },
    (err, user) => {
      if (err) return res.json(err);
      User.findByIdAndUpdate(
        id,
        { total: user.total - Number(req.body.amount) },
        { new: true },
        (err, user) => {
          if (err) return res.json(err);
          return res.json({ user });
        }
      );
    }
  );
});

router.delete("/:id/remove", (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndRemove(id, err => {
    if (err) return res.stataus(400).json({ err });
    return res.status(200).json({ success: true, msg: "user deleted" });
  });
});

module.exports = router;
