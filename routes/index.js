var express = require("express");
var router = express.Router();

var userRouter = require("./users");

router.use("/users", userRouter);

/* GET home page. */
router.get("*", function(req, res, next) {
  const cssPath =
    process.env.NODE_ENV == "production"
      ? `/dist/bundle/bundle.css`
      : "/static/bundle.css";
  const jsPath =
    process.env.NODE_ENV == "production"
      ? `/dist/bundle/bundle.js`
      : "/static/bundle.js";
  res.render("index", { title: "Inova", cssPath, jsPath });
});

module.exports = router;
