var db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");





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
  console.log(req.body.email);
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 587,
    secure: false, 
    auth:{
      user:'funapp1076@gmail.com',
      pass:"Alok@9988"
    },
  });

  console.log("ressetpasswordroute hit");
  db.User.findOne({email:req.body.email}).then(function(user){
    var token = jwt.sign({userId:user.id,password:user.password},process.env.SECRET_KEY);
    transporter.sendMail({
      from:"funapp1076@gmail.com",
      to:req.body.email,
      subject:"ResetPasswordForTweetApp",
      text: 'Hello world ?',
      html:`http://localhost:8081/api/auth/passwordreset/${user.id}/${token}`},function(err,info){
        if(err){
          console.log(err);
        } else {
          console.log(info);
          console.log("Email sent successfully")
        }
      })
    res.status(200).json({
      message:"you hit the reset password route",
      link:`<a href=/api/auth/passwordreset/ ${user.id} / ${token} >ResetPassword</a>`,
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
      res.redirect(`http://localhost:3000/changePassword/${req.params.id}/${req.params.token}`)
      // res.status(200).json({
      //   message:"user successfully verified",
      //   userId:req.params.id,
      //   token:req.params.token
      // })
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
