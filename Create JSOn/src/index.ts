import http from "http";

const server = http.createServer((req,res)=>{

    if(req.method==="POST"&& req.url ==="/data"){
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({message:"create post request received"}));
    }

    if(req.method==="GET"&&req.url==='/get')
    {

        res.writeHead(200,{"content-type":"text/plain"})
        res.writeHead(200,({"content-type":"application/json"}))
        res.end(JSON.stringify({message:"get request received"}));
    }



})

server.listen(8989,()=>{
    console.log("Server is listening on port 8989")
})