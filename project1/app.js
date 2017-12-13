const tableDiv = document.querySelector('.table');
const resultDiv = document.querySelector('.result');
const winnerDiv = document.querySelector('.winner');
const table = [];

let switchPlayer;

const isAllOjectContentSame = (arr) => {
  const temp = arr[0].textContent;
  if (!temp) {
    return false;
  }
  return arr.every(ele => {
    return ele.textContent === temp;
  });
}

const checkTable = (table) => {
  let winner = "";
  table.forEach(row => {
    if (isAllOjectContentSame(row)) {
      winner = row[0].textContent;
    }
  });
  return winner;
}

const checkForWin = (table) => {

  let winner;

  if (checkTable(table)) {
    winner = checkTable(table);
  }

  //transpose the matrix
  const transposedTable = table[0].map((col, i) => table.map(row => row[i]));

  if (checkTable(transposedTable)) {
    winner = checkTable(transposedTable);
  }

  const diagonal = [[table[0][0], table[1][1], table[2][2]], [table[2][0], table[1][1], table[0][2]]];

  if (checkTable(diagonal)) {
    winner = checkTable(diagonal);
  }

  return winner;

}

const isAllFilled = (table) => {
  let flag = true;
  table.forEach(row => {
    row.forEach(ele => {
      if (!ele.textContent) {
        flag = false;
      }
    });
  });
  return flag;
}

const endOfGame = () => {
  const winner = checkForWin(table);

  if (winner) {
    winnerDiv.textContent = `Winner is ${winner}`;
    resultDiv.classList.remove('hidden');

    console.log(winner);
  } else if (isAllFilled(table)) {
    winnerDiv.textContent = "Draw Game";
    resultDiv.classList.remove('hidden');
  } else {

  }

}

const init = () => {
  const size = 3;
  switchPlayer = false;
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
        endOfGame();
      });
      tableDiv.appendChild(newBlock);
    }
    table.push(row);
  }
}

const reset = () => {
  switchPlayer = false;
  table.forEach(row => {
    row.forEach(item => {
      item.textContent = "";
    });
  });
  document.querySelector('.result').classList.add('hidden');
}

document.querySelector('.reset button').addEventListener('click', reset);


init();
console.log(table);
