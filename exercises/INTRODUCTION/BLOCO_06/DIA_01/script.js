let estadoSelect = document.getElementById('estado-input');

let estados = ['RS', 'SC', 'PR', 'SP', 'RJ', 'MG', 'MT', 'MS', 'GO', 'AM', 'CE', 'PE', 'PI', 'AC', 'AL', 'AP', 'BA', 'DF', 'ES', 'MA', 'PA', 'SE', 'TO'];

for (let estado of estados.sort()) {
  let opcao = document.createElement('option');
  opcao.innerText = estado;
  estadoSelect.appendChild(opcao);
}