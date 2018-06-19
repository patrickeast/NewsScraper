var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var SavedSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  
 
  feedback: {
    type: Schema.Types.ObjectId,
    ref: "Feedback"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Saved = mongoose.model("Saved", SavedSchema);

// Export the Article model
module.exports = Saved;