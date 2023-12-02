#Simple JS Code That is Used to Create Server in NodeJS

var http = require('http');
var app = http.createServer(
  function(req,res){
    res.send("Hello World...Jay Jinendra...!!");
  }
);

app.listen(1925);
