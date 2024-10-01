const form = document.querySelector('form');
const contatoNome = [];
const contatoTelefone = [];

let linhas = '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  adicionarContato();
  atualizaTabela();
})

function adicionarContato() {
  const inputNome = document.querySelector('#nome');
  const inputTelefone = document.querySelector('#telefone');

  if (contatoNome.includes(inputNome.value) || contatoTelefone.includes(inputTelefone.value)) {
    alert('Esse contato já existe');
  } else {
    contatoNome.push(inputNome.value);
    contatoTelefone.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
  }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}