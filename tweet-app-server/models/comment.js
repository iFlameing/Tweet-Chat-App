var mongoose = require("mongoose");
var User = require("./user");


let commentSchema = new mongoose.Schema({
    text: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
      }
})


let Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment

