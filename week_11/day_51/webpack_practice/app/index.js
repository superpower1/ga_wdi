import lodash from 'lodash';
import $ from 'jquery'

const fruits = ['apple', 'orange', 'banana'];

const randomFruit = lodash.sample(fruits);

console.log(randomFruit);
console.log($.ajax);
