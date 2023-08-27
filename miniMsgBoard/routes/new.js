var express = require("express");
var router = express.Router();

let messages = require("../public/javascripts/messages");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res) {
  console.log(req);
  let user = req.body.name;
  let text = req.body.text;

  console.log(user, text);

  messages.push({ text: text, user: user, added: new Date() });

  res.redirect("/");
});

module.exports = router;
