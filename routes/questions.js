var router = require("express").Router();
var Question = require("../models/question");

/* GET questions input template */
router.get("/", function(req, res) {
  Question.find({}).exec(function(err, payload) {
    if (err) {
      next(err);
    } else {
      res.send(payload);
    }
  });
});

/* POST questions to db */
router.post("/", function(req, res, next) {
  //Create new question HERE -->
  console.log(req.body);
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
