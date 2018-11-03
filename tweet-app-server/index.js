require("dotenv").config()
var express = require("express");
var app = express();
var cors = require('cors');
var bodyParser = require("body-parser");
var authRoutes = require("./routes/auth");
var messagesRoutes = require("./routes/messages");
var commentRoutes = require("./routes/comment")
var auth = require('./middleware/auth');
var db = require("./models");
var server = require('http').createServer(app);
const io = require('socket.io')(server)

app.use('/uploads',express.static('uploads'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.json({message: "Make a POST requst to /api/auth/signup to signup"});
});

app.use('/api/users/:id/messages',
        auth.loginRequired, auth.ensureCorrectUser,
        messagesRoutes);
app.use('/api/users',auth.loginRequired,commentRoutes)
app.use('/api/auth', authRoutes);
app.get('/api/messages', function(req, res, next) {
  db.Message.find().sort({createAt: 'desc'})
    .populate("userId", {username: true, profileImageUrl: true})
    .then(function(messages) {
      res.json(messages);
    }).catch(function(err) {
      res.status(500).json(err);
    })
});

const PORT = 8081

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })
});

server.listen(PORT, function(){
  console.log(`Server is listening on port ${PORT}`);
});
