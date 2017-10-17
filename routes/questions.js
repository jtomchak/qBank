var router = require("express").Router();
var Question = require("../models/question");

/* GET questions listing. */
router.get("/", function(req, res) {
  res.send("Question List here");
});

/* GET questions input template */
router.get("/new", function(req, res) {
  res.render("newQuestion", { title: "Add Questions" });
});

/* POST questions to db */
router.post("/new", function(req, res, next) {
  //Create new question HERE -->
  var question = new Question({
    question: req.body.question,
    answer: req.body.answer,
    author: req.body.author
  });
  question.save(function(err, meow) {
    if (err) {
      next(err);
    } else {
      //saved!!!!
      console.log(meow);
      res.send("Totally saved dude! Good Job!!!!");
    }
  });
});

module.exports = router;
