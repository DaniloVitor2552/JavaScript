const $conteiner = document.getElementById("conteiner");

const numeroAleatorio = (min,max) => {
    return Math.floor(Math.random() * (max + 1 - min) ) + min;

}

const gerarNumeros = () => {
    let numeros = [];
    for ( i=0; i < 30; i++){
        numeros.push( numeroAleatorio(i,30));
    }
    return numeros;
}

const gerarCards = ( arr, header, title ) => {
    html = `
    <div class='card'>
    
            <div class= 'card-header'> ${header} </div>
                <div class= 'card-body'>
                    <h5 class='card-title'> ${title} </h5> 
                    <p class='card-text'>   ${arr.join()} </p>
                
                 </div>
                 
    </div>`

    return html;
}

const numeros = gerarNumeros();

const epar = ( num ) => num % 2 == 0;

const filtrarPar = ( arr ) => arr.filter (epar); 

const quadrado = ( num ) => num * num;

const arrayQuadrado = ( arr ) => arr.map(quadrado)

const numerosPares = filtrarPar(numeros);
const numerosQuadrados = numeros.map(quadrado);

const eUnico = ( el, i, arr) => {
    let qtd = arr.filter ( num => num == el ).length;
    return qtd == 1;

}


const arrayUnicos = ( arr ) => arr.filter (eUnico);



$conteiner.innerHTML = gerarCards(numeros, "Exercicio 01", "Numeros Aleatorios"); 
$conteiner.innerHTML += gerarCards(numerosPares, "Exercicio 2", "Numeros pares");
$conteiner.innerHTML += gerarCards(numerosQuadrados, "Exercicio 3", "Numeros ao quadrado");
$conteiner.innerHTML += gerarCards(numerosUnicos, "Exercicio 4", "Numeros Unicos");

