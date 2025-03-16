// requisição http precisa ter dois principais recusos

// Metodo http e url

// http status code
// quando devolvemos uma resposta p/ o front temos varios tipos de 
// codigos numericos p/ comunicar pro front se o codigo deu certo ou
// não se deu erro foi por palta de informações e tal
// importancia semantica de font pro back

// --------------------------------------

// streams do node:

// ler pequenas partes de alguma coisa e ja cinseguir trabalhar com aqueles 
// dados antes de abrir totalmente

// importação de clientes via exel(CSV)
// 1gb -> 1.000.000
// post /upload import.csv

// 10mb/s -> 100s pra aarregar 1gb 

// 100s -> inserções em banco de dados

// readable streams / writable streams
// 1° é oq le/2°oq escreve

---------------------------------------------------------------------------

// streams -> 
// process.stdin-> leitura
// process.stdout->escrita

// process.stdin
//     .pipe(process.stdout)

import {Readable} from 'node:stream'
import { buffer } from 'node:stream/consumers'

class OneToHundredStream extends Readable{
   index = 1
   
    _read(){
        const i = this.index++

        // if (i >100){
        //     this.push(null)
        // }else{
        //     const buf= Buffer.from(String(i))

        //     this.push(buf)
        // }
   } 
}

new OneToHundredStream()
    .pipe(process.stdout)

// streams -> 
// process.stdin-> leitura
// process.stdout->escrita

// process.stdin
//     .pipe(process.stdout)