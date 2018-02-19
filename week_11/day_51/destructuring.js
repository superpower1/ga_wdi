const getFavColor = () => {
  return ['red', 'black'];
}

const [color1, color2] = getFavColor();

console.log(color1);
console.log(color2);

const getPersonDetails = () => {
  return {
    name: 'sp1',
    sex: 'male'
  }
}

// instead of using getPersonDetails().name
// we can use something like below
const {name: personName} = getPersonDetails();
console.log(personName);
