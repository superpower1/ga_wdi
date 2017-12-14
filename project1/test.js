let testArr = [
  {
    value: 'X'
  },
  {
    value: 'O'
  },
  {
    value: 'X'
  }
];

let testArr = [
  {
    textContent: 'X'
  },
  {
    textContent: 'O'
  },
  {
    textContent: 'X'
  }
];

const findTwoSameInArr = (arr) => {
  let flag = false;

  if (isAllOjectContentSame(arr)) {
    return false;
  }

  const sortedArr = arr.slice().sort((obj1, obj2) => {
    return (obj1.value<obj2.value?-1:(obj1.value>obj2.value?1:0));
  });

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1].value === sortedArr[i].value && sortedArr[i].value) {
      flag = true;
    }
  }

  return flag;
}
