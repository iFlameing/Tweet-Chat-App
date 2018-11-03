var db = require("../models")

exports.comment = function(req,res,next){
    const image = req.file ? req.file.path:""
    var comment = {
        text:req.body.text,
        author:req.params.userId,
        image:image
    }
    db.Comment.create(comment).then(function(comment){
        console.log(comment)
        db.Message.findById(req.params.id).then(function(message){
            message.comments.push(comment._id)
            message.save().then(function(message){
                return db.Comment.findById(comment._id)
                    .populate("author",{username:true,profileImageUrl:true})
                })
                .then(function(c){
                    return res.status(200).json(c);
                }).catch(next);
        }).catch(next);
    }).catch(next);

};