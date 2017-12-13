const tableDiv = document.querySelector('.table');
const resultDiv = document.querySelector('.result');
const winnerDiv = document.querySelector('.winner');
const player = document.querySelector('.player span');
const table = [];
let isGameFinished = false;
let challengeBot = true;

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

const highlightWinning = (arr) => {
  arr.forEach(ele => {
    ele.style.backgroundColor = "lightgreen";
  });
}

const checkTable = (table) => {
  let winner = "";
  table.forEach(row => {
    if (isAllOjectContentSame(row)) {
      winner = row[0].textContent;
      highlightWinning(row);
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
    isGameFinished = true;
  } else if (isAllFilled(table)) {
    winnerDiv.textContent = "Draw Game";
    resultDiv.classList.remove('hidden');
    isGameFinished = true;
  } else {

  }

}

const playerVS = (e) => {
  if (switchPlayer) {
    e.target.textContent = 'X';
    player.textContent = 'O';
  } else {
    e.target.textContent = 'O';
    player.textContent = 'X';
  }
  switchPlayer = !switchPlayer;

  endOfGame();
}

const botVS = (e) => {
  if (switchPlayer) {
    easyBot(table, "X");
    player.textContent = 'O';
  } else {
    easyBot(table, "X");
    player.textContent = 'O';
  }
  switchPlayer = !switchPlayer;

  endOfGame();
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
          playerVS(e);
          if (challengeBot&&!isGameFinished) {
            botVS(e);
          }
        }        
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
      item.style.backgroundColor = "white";
    });
  });
  document.querySelector('.result').classList.add('hidden');
  isGameFinished = !isGameFinished;
}

document.querySelector('.reset button').addEventListener('click', reset);


init();
console.log(table);
