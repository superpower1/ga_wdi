const fs = require('fs');

const text = fs.readFileSync('./rawData.txt', 'utf8');

const output = {}

text.split(/\r?\n/).forEach((line, index) => {
  if (index == 0)
    return;
  // console.log(line.split(','));
  lineArr = line.split(',')
  if (lineArr[0]) {
    const item = {
      product: lineArr[1],
      unitPrice: lineArr[2],
      units: lineArr[3],
      totalPrice: parseFloat(Number(lineArr[2])*Number(lineArr[3])).toFixed(2)
    }
    if (output[lineArr[0]]) {
      output[lineArr[0]].push(item)
    } else {
      output[lineArr[0]] = [item]
    }
  }
});

console.log(output);
