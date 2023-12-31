var express = require("express");
var router = express.Router();

let messages = require("../public/javascripts/messages");

/* GET home page. */
router.get("/", function (req, res, next) {
  const onClick = () => res.redirect("/new");

  res.render("index", {
    title: "Mini msg board",
    messages: messages,
    onClick: onClick,
  });
});

router.post("/", function (req, res) {
  res.redirect("/new");
});

module.exports = router;
