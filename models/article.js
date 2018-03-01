// Article model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var articleSchema = new Schema({
  // title, a string, must be entered
  title: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  // url, a string, must be entered
  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: Date
  }
});

// Create the Article model using the articleSchema
var Article = mongoose.model("Article", articleSchema);

// Export the Article model
module.exports = Article;
