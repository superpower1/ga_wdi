const tableDiv = document.querySelector('.table');
const table = [];

let switchPlayer = false;

const isAllOjectContentSame = (arr) => {
  const temp = arr[0];
  if (temp==="") {
    return false;
  }
  return arr.every(ele => {
    return ele.textContent === temp.textContent;
  });
}

const checkForWin = (table) => {
  let flag = false;
  table.forEach(row => {
    if (isAllOjectContentSame(row)) {
      flag = true;
    }
  });

  //transpose the matrix
  const transposedTable = table[0].map((col, i) => table.map(row => row[i]));

  transposedTable.forEach(row => {
    if (isAllOjectContentSame(row)) {
      flag = true;
    }
  });

  const diagonal = [[table[0][0], table[1][1], table[2][2]], [table[2][0], table[1][1], table[0][2]]];

  diagonal.forEach(row => {
    if (isAllOjectContentSame(row)) {
      flag = true;
    }
  });

  return flag;

}

const init = () => {
  const size = 3;

  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
      const newBlock = document.createElement("div");
      newBlock.className = `row${i} col${j}`;
      newBlock.coordinateX = i;
      newBlock.coordinateY = j;
      row.push(newBlock);
      newBlock.addEventListener('click', e => {
        if (!e.target.textContent) {
          if (switchPlayer) {
            e.target.textContent = 'X';
          } else {
            e.target.textContent = 'O';
          }
          switchPlayer = !switchPlayer;
        }
        console.log(`${e.target.textContent}`);
        console.log(checkForWin(table));
      });
      tableDiv.appendChild(newBlock);
    }
    table.push(row);
  }
}



init();
console.log(table);
