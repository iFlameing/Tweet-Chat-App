var db = require('../models');


exports.createMessage = function(req,res,next){
  const image = req.file ? req.file.path:""
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

exports.foundMessage = function(req,res,next){
  db.Message.findById(req.params.id).populate("userId",{username:true,profileImageUrl:true}).then(function(message){
    return res.status(200).json(message);
  }).catch(next);
}

module.exports = exports;