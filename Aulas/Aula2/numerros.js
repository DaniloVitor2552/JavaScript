const $vMinimo = document.getElementById('minimo');
const $vMaximo = document.getElementById('maximo');
const $bPares = document.getElementById('pares');
const $bFato = document.getElementById('fatorial');
const $bFibo = document.getElementById('fibonacci');
const $bPrimo = document.getElementById('primo');
const $txtArea = document.getElementById('resultado');

const arrayPares = []
const arrayFatorial = []
const arrayFibo = []

/* PARES */

const paresCalc = () =>{
    for(let i = $vMinimo.value; i <= $vMaximo.value; i++){
        if(i % 2 == 0){
            arrayPares.push(i);
        }
        else if(i % 2 == 1){
        }
    }
    $txtArea.value = (arrayPares);
  
} 

$bPares.addEventListener("click", paresCalc);


/******************************/

/* FATORIAL */

const fatorial = (num) => {
    let fat = 1;
    while(num >= 1){
        fat *= num;
        num--;
    }
    return fat;
}

const fatorialCalc = () => { 
    var min = parseInt($vMinimo.value);
    var max = parseInt($vMaximo.value);
    var y = 0;    
    for(let i = min; i <= max; i++){
     y = fatorial(i); 
        arrayFatorial.push(y) ;
    }
    $txtArea.value = (arrayFatorial);
}

$bFato.addEventListener("click" , fatorialCalc);

/****************************************************** */

/* FIBONACCI*/ 

const fibo = (num) => {
    let cont = 0;
    let atual = 1;
    let anterior = 0;
    while(cont <= num){
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        cont++;
    }
    return anterior;
}

const ListaFibo = (num) => {
   num = $vMinimo.value;
   while(num <= $vMaximo.value ){
        arrayFibo.push(fibo (num));
        num++;
   }
  $txtArea.value = (arrayFibo);
}

$bFibo.addEventListener("click" , ListaFibo);
