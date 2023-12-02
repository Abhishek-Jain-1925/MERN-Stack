#Simple Express Code That is used to demonstrate Routing

var express = require('express');
var app = express();

app.get('/',function(req,res){
  res.send("Hello World...Jay Jinendra...!!");
});

app.listen(1925);
