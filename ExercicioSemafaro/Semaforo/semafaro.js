const $img = document.getElementById("img");
const $amarelo = document.getElementById("amarelo");
const $verde = document.getElementById("verde");
const $vermelho = document.getElementById("vermelho");
const $desligar = document.getElementById("desligautomatico");
const $automatico = document.getElementById("automatico");

const ligar = ( cor ) => {
    // $img.src = "./img/" + cor + ".png"
$img.src = `./img/${cor}.png`;

}

const desligar = ( desligado ) =>{
    clearInterval(lig);
    $img.src = `./img/${desligado}.png`;
}

$amarelo.addEventListener ("click", () => ligar("amarelo"));
$verde.addEventListener ("click", () => ligar("verde"));
$vermelho.addEventListener ("click", () => ligar("vermelho"));
$desligar.addEventListener ("click", () => desligar("desligado"));
$automatico.addEventListener ("click", () => ligaAut());

let i = 0;
const automatico = () => {
    if( i == 0){
        ligar("vermelho");
        i=1;
    }
    else if ( i == 1){
        ligar("amarelo");
        i=2;
    }else{
        ligar("verde");
        i = 0;
    }

}
function ligaAut(){
    lig = setInterval( automatico, 2000);
}



