/*Declaração de variavel
   1° const - imutavel - escopo local
   2° let - local e pode ser modificado - escopo local
   3° var - global e pode ser modificado - escopo global
   
*/

const n1 = 10;
const n2 = 80;

/*
    Tipo de funções:
    1)
    function nomeDaFuncao ( paramentros ){
        codigos;
    }

    2)
    const nomeDaFuncao = (parametros){

    }

    3)
    const nomeDaFuncao = ( parametros ){
        codigos;
    }

*/

const $n1 = document.getElementById("numero1");
const $n2 = document.getElementById("numero2");
const $somar = document.getElementById("somar");
const $resultado = document.getElementById("resultado");

const soma = () => {
    $resultado.value = parseInt($n1.value) + parseInt($n2.value);
}

$somar.addEventListener("click",soma);
