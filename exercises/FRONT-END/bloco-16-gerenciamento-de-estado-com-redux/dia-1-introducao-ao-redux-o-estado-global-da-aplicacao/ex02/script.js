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

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_LASTNAME = 'CHANGE_LASTNAME';

const changeName = (nome) => ({ type: CHANGE_NAME, nome })
const changeLastname = (sobrenome) => ({ type: CHANGE_LASTNAME, sobrenome })

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state, nome: action.nome,
      }
    case CHANGE_LASTNAME:
      return {
        ...state, sobrenome: action.sobrenome,
      }
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state, nome: action.nome,
      }
    case CHANGE_LASTNAME:
      return {
        ...state, sobrenome: action.sobrenome,
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
    store.dispatch(changeName('Pedro'))
    store.dispatch(changeLastname('Alles'))
  }, 1000);
};
