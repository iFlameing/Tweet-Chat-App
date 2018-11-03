var express = require("express")
var router = express.Router()
var db = require("../models")
var helpers = require("../helpers/comment")

const multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString()+file.originalname);
    }
})

const fileFilter = (req,file,cb)=>{
    if(file.mimetype=="image/jpeg" || file.mimetype === "image/png"){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    limit:{
        fileSize:1024*1024*5
    },
    fileFilter:fileFilter
})

router.post('/:userId/messages/:id/comments',upload.single("files"),helpers.comment);

module.exports = router;