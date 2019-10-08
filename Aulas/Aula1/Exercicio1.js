const $nome = document.getElementById("nome");
const $media = document.getElementById("media");
const $situacao = document.getElementById("situacao");
const $fundo = document.getElementById("fundo");
const $calc = document.getElementById("calcular");

const calcular = () =>{
    if(parseInt($media.value) > 5){
        $fundo.style ="background-color:green;";
        $situacao.value = " Parabens " + $nome.value + " Aprovado!";

    }else{
     $fundo.style ="background-color:red;";
     $situacao.value = " Que pena " + $nome.value + " Reprovado!";
    }
}

$calc.addEventListener("click",calcular);


