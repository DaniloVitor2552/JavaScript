let arrayAleatorio =[]
let arrayPar = []
let arrayQuadrado = []

/******* 1° parte Mandar 20 numeros aleatorios na tela ************** */
// for(let i = 1; i<=30; i++){
//    let random = Math.floor(Math.random() * 21)
//    arrayAleatorio.push(random)
// }
// console.log(arrayAleatorio)

for(let i=0; i<=30; i++){
    let numeros = Math.floor(Math.random() * 21)
    arrayAleatorio.push(numeros)
}
console.log(arrayAleatorio)

/***********2° PARTE  retornar numeros pares************/

for(let a = 0; a<=29; a++){
    if(arrayAleatorio[a] % 2 ==0){
        arrayPar.push(arrayAleatorio[a])
    }

}
console.log(arrayPar)

/*************3° Parte Retornar o quadrado dos numeros gerados**************/

// for(let b = 0; b<=29; b++){
//         arrayQuadrado.push(arrayAleatorio[b] * arrayAleatorio[b])
// }
// console.log(arrayQuadrado)


for(let b = 0; b<=29; b++){
    arrayQuadrado.push(arrayAleatorio[b] * arrayAleatorio[b])
      
}
console.log(arrayQuadrado)


/*********************4° parte  Retornar apenas os numeros unicos***************************** */

