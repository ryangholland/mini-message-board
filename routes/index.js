const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "I'm Ryan and I like to party.",
    user: "Ryan",
    added: new Date(),
  },
  {
    text: "Meow.",
    user: "Isaiah",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res, next) => {
  console.log(req.body);
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect('/')
});

module.exports = router;
