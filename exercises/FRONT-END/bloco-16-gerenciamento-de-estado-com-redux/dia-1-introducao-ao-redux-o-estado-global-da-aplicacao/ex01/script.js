const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const nextColor = () => ({ type: NEXT_COLOR });

const previousColor = () => ({ type: PREVIOUS_COLOR });

const randomColor = () => ({ type: RANDOM_COLOR });

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
  const { index, colors } = state;
  const colorsLen = colors.length;

  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state, index: index === colorsLen - 1 ? 0 : index + 1
      }
    case PREVIOUS_COLOR:
      return {
        ...state, index: index === 0 ? colorsLen - 1 : index - 1
      }
    case RANDOM_COLOR:
      return {
        ...state, colors: [...colors, criarCor()], index: colorsLen
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
