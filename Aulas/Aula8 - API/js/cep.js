const $cep = document.getElementById('cep');
const $logradouro = document.getElementById('logradouro');
const $numero = document.getElementById('numero');
const $bairro = document.getElementById('bairro');
const $cidade = document.getElementById('cidade');
const $estado= document.getElementById('estado');

const encontrarCep = ( ) => {
    const cep = $cep.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch ( url )
        .then ( res => res.json())
        .then ( dados => mostrarEndereco(dados));
        
   
        const mostrarCep = ( endereco ) => {
            console.log(endereco);
        }

        const mostrarEndereco = (endereco) => {
            $logradouro.value = endereco.logradouro;
            $numero.value = 146;
            $bairro.value = endereco.bairro;
            $cidade.value = endereco.localidade;
            $estado.value = endereco.uf;

        }

}
$cep.addEventListener('blur', encontrarCep );
