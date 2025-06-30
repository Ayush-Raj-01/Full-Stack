const http = require('http')

const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req , res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type' , 'text/plain')
        res.end("Hello friends..!")
    }
    else if (req.url === '/ask') {
        res.statusCode = 200
        res.setHeader('Content-Type' , 'text/plain')
        res.end("How are you doing.?")
    }
    else{
        res.statusCode = 404
        res.setHeader('Content-Type' , 'text/plain')
        res.end("404:FileNot Found Broooo..!!😛😛")
    }
})

server.listen(port , hostname, () => {
    console.log(`Server is istning at http://${hostname}:${port}`)
}) 