const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const nextColor = () => ({
  type: NEXT_COLOR
})

const previousColor = () => ({
  type: PREVIOUS_COLOR
})

const randomColor = () => ({
  type: RANDOM_COLOR
})

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      if (state.index === state.colors.length - 1) {
        return {
          ...state, index: 0
        }
      }
      else {
        return {
          ...state, index: state.index + 1
        }
      }
    case PREVIOUS_COLOR:
      if (state.index === 0) {
        return {
          ...state, index: state.colors.length - 1
        }
      }
      else {
        return {
          ...state, index: state.index - 1
        }
      }
    case RANDOM_COLOR:
      return {
        ...state, colors: [...state.colors, criarCor()], index: state.colors.length
      }
    default:
      return state;
  }
}
const store = Redux.createStore(reducer)

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.querySelector('#container').style.backgroundColor = colors[index];
  document.querySelector('#value').innerHTML = colors[index];
});

document.querySelector('#previous').addEventListener('click', function (e) {
  console.log('clic prev');
  store.dispatch(previousColor())
})

document.querySelector('#next').addEventListener('click', function (e) {
  console.log('clic next');
  store.dispatch(nextColor())
})

document.querySelector('#random').addEventListener('click', function (e) {
  console.log('clic rand');
  store.dispatch(randomColor())
})
