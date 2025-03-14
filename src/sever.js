import http from 'http'

// requisição http precisa ter dois principais recusos

// Metodo http e url

// http status code
// quando devolvemos uma resposta p/ o front temos varios tipos de 
// codigos numericos p/ comunicar pro front se o codigo deu certo ou
// não se deu erro foi por palta de informações e tal
// importancia semantica de font pro back

// 


const users = []

const sever = http.createServer((req, res)=>{
    const {method, url}=req

    if(method ==='GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }
    if(method==='POST' && url==='/users'){
        users.push({
            id:1,
            name:'john',
            email:'johndoe@example.com',
        })
        return res.writeHead(201).end()
    }

    

    // return res.writeHead(404).end()
    return res.end('hello')
})

sever.listen(3333)
//no caso o localhost