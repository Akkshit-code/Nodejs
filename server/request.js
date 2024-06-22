const http = require('http');

const Hostname = "Akkshit Singh";
const PORT = 6022;

const server = http.createServer((req,res)=>{
     
     // Home page
     // About page
     // Contact page
     // Product page
     // 200 means successful port number
     // 500 means unsuccessful port number

     if(req.url == '/'){
          res.statusCode = 200;
          res.setHeader('Content-Type' , 'text/plain');
          res.end('Welcome to the home page of the Nodejs Server');
     }
     else if(req.url == '/about'){
          res.statusCode = 200;
          res.setHeader('Content-Type' , 'text/plain');
          res.end('About Page !');
     }
     else if(req.url == '/contact'){
          res.statusCode = 200;
          res.setHeader('Content-Type' , 'text/plain');
          res.end('Contact Us Page');
     }
     else if(req.url == '/product'){
          const options = {
               hostname : 'fakestoreapi.com',
               path : '/products/1',
               method : 'GET'
          }
          
          const apireq = http.request(options , (apiRes)=>{
               apiRes.on("data" , (data)=>{
                    res.statusCode = 200;
                    res.setHeader('Content-Type' , 'application/json');
                    res.end(data.toString());
               })
          
          
               
          })
          
          apireq.on("error", () =>{
               console.log(e);
          })
          
          apireq.end();

         
     }
     else{
          res.statusCode = 500;
          res.setHeader('Content-Type' , 'application/json');
          res.end(JSON.stringify({error : "Server Error!"}));
     }
})
server.listen(PORT, ()=>{
     console.log(`Server running at ${Hostname} : ${PORT}`)
})