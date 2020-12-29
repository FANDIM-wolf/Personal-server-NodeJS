var http = require('http');
var fs =require('fs');

var server = http.createServer(function(req,res){
 //request for url
 if(req.url === '/index' || req.url ==='/'){
   // got html context
   res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
   //got html main page
   var myReadHtmlPage = fs.createReadStream(__dirname+'/index.html','utf8');
   //input of html page 
   myReadHtmlPage.pipe(res);
 }  
   
   
});

server_port=3000
//launch server in port 3000
server.listen(server_port,'127.0.0.1');
console.log("SERVER OSO is runnig ");
console.log("Port:127.0.0.1:",server_port);