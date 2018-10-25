var mongoose = require("mongoose")

var commentSchema = new mongoose.Schema({
    text:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

var Comment = monsgoose.model("Comment",commentSchema);

module.exports = Comment;