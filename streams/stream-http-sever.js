import http, { Server } from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{
    _transform(chunk,encoding,callback){
        const transformed = Number(chunk.toString()) * -1
        console.log(transformed)
        callback(null, Buffer.from(String(transformed)))

    }
}

// req => seria uma ReadableStream.
// res => seria uma WritableStream.

const sever = http.createServer((req, res)=>{
    return req
        .pipe(new InverseNumberStream())
        .pipe(res)
})

sever.listen(3334)