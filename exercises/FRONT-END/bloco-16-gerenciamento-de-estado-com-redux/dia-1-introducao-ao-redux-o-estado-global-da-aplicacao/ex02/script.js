const ESTADO_INICIAL_1 = {
  nome: 'Rodrigo',
  sobrenome: 'Santos da Silva',
  endereco: 'Rua Soldado Mathias, 765',
  cidade: 'Belo Horizonte',
};

const ESTADO_INICIAL_2 = {
  nome: 'Bruna',
  sobrenome: 'Santana Oliveira',
  endereco: 'Rua Holanda, 332',
  cidade: 'São Paulo',
};

const CHANGE_NAME_LASTNAME_1 = 'CHANGE_NAME_LASTNAME_1';
const CHANGE_NAME_LASTNAME_2 = 'CHANGE_NAME_LASTNAME_2';

const changeNameLastname_1 = (nome, sobrenome) => ({ type: CHANGE_NAME_LASTNAME_1, nome, sobrenome })
const changeNameLastname_2 = (nome, sobrenome) => ({ type: CHANGE_NAME_LASTNAME_2, nome, sobrenome })

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME_LASTNAME_1:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME_LASTNAME_2:
      return {
        ...state,
        nome: action.nome,
        sobrenome: action.sobrenome
      }
    default:
      return state;
  }
};

const reducerCombinado = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer
});

const store = Redux.createStore(reducerCombinado);

store.subscribe(() => {
  const { meuPrimeiroReducer, meuSegundoReducer } = store.getState();

  document.querySelector('#nome-1').textContent = meuPrimeiroReducer.nome;
  document.querySelector('#sobrenome-1').textContent = meuPrimeiroReducer.sobrenome;

  document.querySelector('#nome-2').textContent = meuSegundoReducer.nome;
  document.querySelector('#sobrenome-2').textContent = meuSegundoReducer.sobrenome;
});

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeNameLastname_1('Bill', 'Gates'))
    store.dispatch(changeNameLastname_2('Steve', 'Jobs'))
  }, 2000);
};
