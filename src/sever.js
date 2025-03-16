import http from 'http'
import { json } from './middlewares/json.js'

const users = []

const sever = http.createServer(async(req, res)=>{
    const {method, url}=req

    await json(req,res)

    if(method ==='GET' && url === '/users'){
        return res
        .end(JSON.stringify(users))
    }
    if(method==='POST' && url==='/users'){
        const{name,email} = req.body

        users.push({
            id:1,
            name,
            email,
        })
        return res.writeHead(201).end()
    }

    

    return res.writeHead(404).end()
    // return res.end('hello')
})

sever.listen(3333)
