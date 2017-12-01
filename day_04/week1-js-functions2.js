
// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
const calculateAge = (birthYear, currentYear) => {
  let age = currentYear - birthYear;
  console.log(`You are either ${age-1} or ${age}`);
}
calculateAge(1990, 2000);
calculateAge(1990, 2029);
calculateAge(1990, 2034);

//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
const lengths = (arrOfStr) => {
  let arrOfLength = [];
  for (var i = 0; i < arrOfStr.length; i++) {
    arrOfLength.push(arrOfStr[i].length);
  }
  return arrOfLength;
}

// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
const transmogrifier = (num1, num2, num3) => {
  return Math.pow((num1*num2), 3);
}

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

const wordReverse = (str) => {
  return str.split(' ').reverse().join(' ');
}
