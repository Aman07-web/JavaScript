const http=require('http');
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type", "text/html");
    resp.write(`
        <html>
          <head></head>
           <body>
             <h2>hii i am aman kumar.</h2>
           </body>
        </html>
        `)
    resp.end();
    process.exit();
}).listen(5800);