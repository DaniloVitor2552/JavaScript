const alunos = [
{ 
    "nome": "ana", 
    "idade":15,
    "uf":"SP", 
    "salario":1100.00 
},
{
    "nome": "julie", 
    "idade":10,
    "uf":"RJ", 
    "salario":900.00 
},

{
    "nome": "jose", 
    "idade":22,
    "uf":"SP", 
    "salario":800.00 
},

{
    "nome": "juan", 
    "idade":20,
    "uf":"MG", 
    "salario":200.00 
},

];

const $dados = document.getElementById("dados");
console.log(alunos);
const mostrarDados = ( json ) => {

    // const tamanho = json.length;
    // let valores = "";
    // for (let i=0; i< tamanho; i++) {
    //     valores +=  `${json[i].nome} - ${json[i].idade} <br>`;
    // }
    // return valores;

    const criarHtml = (acc, aluno ) => `${acc} ${aluno.nome} 
    - ${aluno.idade} - ${aluno.uf} - ${aluno.salario}<br>`

    return json.reduce ( criarHtml, "" )
}

const alunosSP = ( aluno ) => aluno.uf == "SP";
const somaSalario = ( acc, aluno ) => acc + aluno.salario;
const aumentasalario = ( aluno ) => ({"nome": aluno.nome, "idade":aluno.idade, "uf":aluno.uf , 
"salario": aluno.salario + 100});

const aumentasalarioSp = ( aluno ) =>({"nome": aluno.nome, "idade": aluno.idade, "uf":aluno.uf, 
"salario": aluno.salario + 300});

const salariomenor = ( aluno ) => aluno.salario < 1000;


$dados.innerHTML = mostrarDados ( alunos );

$dados.innerHTML +=  "<div>------------- <h2>Alunos de SP</h2> ---------------</div><br>";
$dados.innerHTML += mostrarDados( alunos.filter ( alunosSP) );

$dados.innerHTML += "<div> --- <h2>Total</h2> --- </div><br>";
$dados.innerHTML += alunos.reduce ( somaSalario, 0 );

$dados.innerHTML += "<div> --- <h2>Novos salários</h2> --- </div><br>";
$dados.innerHTML += mostrarDados (alunos.map (aumentasalario));

$dados.innerHTML += "<div> --- <h2>Novo salário SP</h2> --- </div><br>";
$dados.innerHTML += mostrarDados (alunos.filter (alunosSP).map ( aumentasalarioSp ));

$dados.innerHTML +=  "<div>------------- <h2>Menores Salários</h2> ---------------</div><br>";
$dados.innerHTML += mostrarDados (alunos.filter (alunosSP).filter (salariomenor));

