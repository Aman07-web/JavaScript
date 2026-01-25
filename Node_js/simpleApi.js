const http=require('http');
const usersData=[
    {
        name:"aman",
        age:23,
        email:"aman.com"
    },
     {
        name:"shyam",
        age:24,
        email:"shyamkumar.com"
    },
     {
        name:"rahul",
        age:25,
        email:"rahul.com"
    }
]

http.createServer((req,resp)=>{
    resp.setHeader("Content-Type",'application/json');
     resp.write(JSON.stringify(usersData));
     resp.end();
}).listen(8000);