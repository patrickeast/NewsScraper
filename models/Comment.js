var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var CommentSchema = new Schema({

  text: {
    type: String,
    required: true
  }
 
});
var Feedback = mongoose.model("Comment", CommentSchema);

module.exports = Feedback;
