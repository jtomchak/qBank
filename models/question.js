var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var questionSchema = new Schema({
  question: String,
  answer: String,
  author: String
});

module.exports = mongoose.model("question", questionSchema);
