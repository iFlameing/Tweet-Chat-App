var express = require("express");
var router = express.Router({mergeParams: true});
var helpers = require('../helpers/messages');



router.post('/comment', helpers.createComment);
router.get('/messages', helpers.getMessage);


module.exports = router;