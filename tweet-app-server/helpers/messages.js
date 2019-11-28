var db = require('../models');


exports.createMessage = function(req,res,next){
  const image = req.file ? req.file.path:""
  console.log(req.file)
  console.log(req.body.text)
  const newMessage = {
    text: req.body.text,
    userId: req.params.id,
    image:image
  };
  
  db.Message.create(newMessage).then(function(message){
    db.User.findById(req.params.id).then(function(user){
      user.messages.push(message.id)
      user.save().then(function(user) {
        return db.Message.findById(message._id)
          .populate("userId", {username: true, profileImageUrl: true})
      }).then(function(m) {
        return res.status(200).json(m);
      }).catch(next);
    }).catch(next);
  }).catch(next);
};

exports.getMessage = function(req, res, next){
  db.Message.findById(req.params.id).populate("userId").populate({
    path: 'comments',
    // Get friends of friends - populate the 'friends' array for every friend
    populate: { path: 'userId' }
  }).exec(function(err, msg){
    if(err){
      console.log(err);
    } else{
      return res.status(200).json(msg);
    }
  })
}

exports.createComment = function(req, res, next){
  db.Message.findById(req.params.id, function(err,msg){
    if(err){
      res.redirect("/home")
    } else{
      const comment = {
        text:req.body.text,
        userId: req.body.userId,
      }
      db.Comment.create(comment, function(err, comment){
        if(err){
          res.redirect("/home")
        } else{
          msg.comments.push(comment);
          msg.save();
          res.redirect("/users/"+msg._id/messages);

        }
      })
    }
  })
}

module.exports = exports;