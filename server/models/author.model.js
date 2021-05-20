const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: [
      true,
      "Author Full Name is required",
    ],
    minlength: [
      3,
      "Author Full Name must be at least 3 characters long"
    ]
  }
}, {timestamps: true});


module.exports.Author = mongoose.model("Author", AuthorSchema);