var db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");


exports.signin = function(req,res){
  db.User.findOne({email: req.body.email}).then(function(user){
    user.comparePassword(req.body.password, function(err, isMatch){
      if(isMatch){
        var token = jwt.sign({userId: user.id}, process.env.SECRET_KEY);
        res.status(200).json({userId: user.id,
                              username: user.username,
                              profileImageUrl: user.profileImageUrl,
                              token
                            });
      } else {
        res.status(400).json({message: 'Invalid Email/Password.'})
      }
    })
  }).catch(function(err){
    res.status(400).json({message: 'Invalid Email/Password'})
  })
};

exports.signup = function(req, res, next){
  console.log("signup route is hit now creatint the user")
  console.log(req.file)
  console.log(req.body);
  const data={
    email:req.body.email,
    username:req.body.username,
    password:req.body.password,
    profileImageUrl:req.file.path
  }
  db.User.create(data).then(function(user){
    console.log(user);
    var token = jwt.sign({ userId: user.id}, process.env.SECRET_KEY);
    res.status(200).json({userId: user.id,
                          username: user.username,
                          profileImageUrl: user.profileImageUrl,
                          token
                        });
  }).catch(function(err) {
    res.status(400).json(err);
  });
};

exports.upload=function(req,res,next){
  console.log(req.file)
res.json("it worked")
}

exports.passwordreset = function(req,res,next){
  console.log("ressetpasswordroute hit");
  db.User.findOne({email:req.body.email}).then(function(user){
    var token = jwt.sign({userId:user.id,password:user.password},process.env.SECRET_KEY);
    res.status(200).json({
      message:"you hit the reset password route",
      link:`<a href=/resetpassword / ${user.id} / ${token} >ResetPassword</a>`,
      token
    })
  }).catch(function(err){
    res.status(400).json(err);
  })
}

exports.verifyingpasswordreset = function(req,res,next){
  console.log("passwordresetroute is hit");
  jwt.verify(req.params.token,process.env.SECRET_KEY,function(err,decode){
    if(decode){
      res.status(200).json({
        message:"user successfully verified",
        userId:req.params.userId,
        token:req.params.token
      })
    }
    else{
      res.status(401).json({
        message:"Your token is not valid"
      })
    }
  })
}

exports.finalreset = function(req,res,next){
  bcrypt.hash(req.body.password,10,(err,hash)=>{
    if(err){
      res.status(500).json({
        message:"error from creating hash password"
      })
    } else{
        db.User.findOneAndUpdate({_id:req.body.userId},{$set:{password:hash}},function(err,user){
          if(err){
            res.status(401).json({
              message:"password update fail"
            })
          }
          else{
            res.status(200).json({
              message:"password updated successfully"
            })
          }
        })
    }
  })
  
}

module.exports = exports;
