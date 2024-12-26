let http=require('http');
const { json } = require('stream/consumers');
let server=http.createServer(async(req,res)=>{
    let fetchRes= await fetch("https://fakestoreapi.com/products");
    let data=await fetchRes.json();
    res.write(JSON.stringify(data));
    res.end()
})
server.listen(port=3011,()=>console.log("connected server http://localhost:"+port))