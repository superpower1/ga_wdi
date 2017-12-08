const coinFlip = () => {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}

const toss = () => {
  let counterHeads = 0;
  let counterTails = 0;
  let winner = '';
  while (counterHeads <5 && counterTails <5) {
    let result = coinFlip();
    if (result === 'heads') {
      counterHeads++;
    } else {
      counterTails++;
    }
  }
  winner = (counterHeads>counterTails) ? 'heads' : 'tails';

  console.log(`${counterHeads} times heads, ${counterTails} times tails, winner is ${winner}`);
  return winner;
}

const img = document.querySelector('img');
const headsSpan = document.querySelector('.heads').querySelector('span');
const tailsSpan = document.querySelector('.tails').querySelector('span');
const resultDiv = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');

let counter = 0;
let counterHeads = 0;
let counterTails = 0;

img.addEventListener('click', e => {
  if (counter<5) {
    let result = coinFlip();
    if (result === 'heads') {
      img.src = './images/atc-coin.png';
      counterHeads++;
      headsSpan.textContent = counterHeads;
    } else {
      img.src = './images/capricoin.png';
      counterTails++;
      tailsSpan.textContent = counterTails;
    }
    counter++;
    if (counter>=5) {
      let winner = (counterHeads>counterTails) ? 'Heads' : 'Tails';
      resultDiv.textContent = `${winner} win!`;
      resetBtn.style.display = 'block';
    }
  }
});

resetBtn.addEventListener('click', e => {
  reset();
  resetBtn.style.display = 'none';
});

const reset = () => {
  counter = 0;
  counterHeads = 0;
  counterTails = 0;
  headsSpan.textContent = counterHeads;
  tailsSpan.textContent = counterTails;
  resultDiv.textContent = '';
}
