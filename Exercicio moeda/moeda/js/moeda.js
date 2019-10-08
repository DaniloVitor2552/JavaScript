
const $moeda = document.getElementById('sltvalor1');
const $valor = document.getElementById('valor');
const $moedaconvertida = document.getElementById('sltvalor2');

const encontrarMoeda = () => {
    const url = `https://api.hgbrasil.com/finance#`;
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    let fati = 
    fetch( proxy+url);

    fati.then(resposta => resposta.json())
    .then( dados => console.log(dados.results))
}
encontrarMoeda();

