const form = document.getElementById('form-contato');
const nome = [];
const contato = [];

let linhas = ''

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinhas();
    atualizaTabela();
});

function adicionarLinhas () {
    const inputNome = document.getElementById('inserir-nome');
    const inputContato = document.getElementById('inserir-contato');
    
    if (nome.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserido`);
        } else {

    nome.push(inputNome.value);
    contato.push(parseFloat(inputContato.value));

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha

        }
    inputNome.value = '';
    inputContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}