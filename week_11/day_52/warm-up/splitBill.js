const add = (a, b) => {
    return a + b;
}

const splitTheBill = group => {

  const values = Object.values(group)
  const totalAmount = values.reduce(add, 0);

  const result = {};

  const people = Object.keys(group);
  const average = (totalAmount / people.length).toFixed(2);
  const diffArr = values.map(amount => {
    return amount-average;
  })

  for (let i = 0; i < people.length; i++) {
    result[people[i]] = diffArr[i];
  }

  return result;
}

const group = {
  A: 20,
  B: 15,
  C: 10
}

console.log(splitTheBill(group));
