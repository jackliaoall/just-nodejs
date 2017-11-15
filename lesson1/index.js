var vhttp = require("http");
 
function onRequest(req, res) {
  console.log("Request received.");
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello World");
  res.end();
}
 
vhttp.createServer(onRequest).listen(3000);
 
console.log("Server has started to listen at port: 3000.");
