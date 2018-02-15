const _ = require('underscore')

const s1 = "xyaabbbccccdefww"
const s2 = "xxxxyyyyabklmopq"

const arr1 = s1.split('')
const arr2 = s2.split('')

const concatArr = _.uniq(arr1.concat(arr2)).sort();
const result = concatArr.sort().join("");
console.log(result);
