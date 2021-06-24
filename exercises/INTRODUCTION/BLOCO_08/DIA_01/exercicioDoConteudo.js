const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const toSleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakingUp);