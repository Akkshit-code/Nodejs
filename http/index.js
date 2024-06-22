const http = require('http');

const server = http.createServer((req,res)=>{
     if(req.url == '/'){
          res.write("<h1>Hello World , This is Node.js</h1>");
     }
     else if(req.url == '/about'){
          res.write("<h1>This is about page</h1>");
     }
     res.end();
})
server.listen(5001);
console.log('The HTTP Server is running on port number 5001');