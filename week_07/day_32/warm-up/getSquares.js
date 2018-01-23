const getSquares = arr => {
  const result = [];
  arr.forEach(square=>{
    if (Math.sqrt(square) == Math.round(Math.sqrt(square))) {
      if (result.indexOf(square) == -1) {
        result.push(square)
      }
    }
  })
  return result.sort(numberSort);
}

const numberSort = (a,b) => {
    return a - b;
};

getSquares([4, 1, 16, 1, 10, 35, 22])
