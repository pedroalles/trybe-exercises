const employeeGen = (fullName) => {
  const formatedName = fullName.toLowerCase().split(' ').join('_');
  const email = `${formatedName}@trybe.com`;
  return { fullName, email }
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGen));