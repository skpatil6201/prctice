import http from 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({name:"tejas"}))
})

server.listen(8989,()=>{
    console.log("server running on port 8989")
})