
const makeFakeMap = (x, y, region, size, mark) => {
  let regionX, regionY;
  if (size>x||size>y) {
    return null;
  } else {
    regionX = Math.floor((Math.random() * (x-size)));
    regionY = Math.floor((Math.random() * (y-size)));
  }

  const map = [];
  const randX = Math.floor((Math.random() * size)) + regionX;
  const randY = Math.floor((Math.random() * size)) + regionY;

  for (let i = 0; i < x; i++) {
    const row = [];
    for (let j = 0; j < y; j++) {
      if (i>=regionX && i<(regionX+size) && j>=regionY && j<(regionY+size)) {
        if ((i===randX)&&(j===randY)) {
          row.push(mark)
        } else {
          row.push(region);
        }
      } else {
        row.push('A');
      }
    }
    map.push(row);
  }
  return map;
}

const position = {
  x:0,
  y:0
}

const findInMap = (x, y, map) => {
  return map[x][y];
}

const map = makeFakeMap(5, 5, 'F', 2, 'X');
console.log(map);

const updatePosition = () => {
  const positionSpan = document.querySelector('.position').querySelector('span');
  positionSpan.textContent = `(${position.x}, ${position.y})`;
}

const congratulate = () => {
  document.querySelector('.cong').textContent = "You found the treasure!";
}

const updateHint = () => {
  const hintSpan = document.querySelector('.hint').querySelector('span');
  switch (findInMap(position.x, position.y, map)) {
    case 'A':
      hintSpan.textContent = "plain"
      break;
    case 'F':
      hintSpan.textContent = "forest"
      break;
    case 'W':
      hintSpan.textContent = "water"
      break;
    case 'D':
      hintSpan.textContent = "desert"
      break;
    default:
      congratulate();
  }
}


document.querySelector('.up').addEventListener('click', e => {
  position.x++;
  if (position.x>4) {
    position.x = 4
  }
  updatePosition();
  updateHint();
});

document.querySelector('.down').addEventListener('click', e => {
  position.x--;
  if (position.x<0) {
    position.x = 0
  }
  updatePosition();
  updateHint();
});

document.querySelector('.left').addEventListener('click', e => {
  position.y--;
  if (position.y<0) {
    position.y = 0
  }
  updatePosition();
  updateHint();
});

document.querySelector('.right').addEventListener('click', e => {
  position.y++;
  if (position.y>4) {
    position.y = 4
  }
  updatePosition();
  updateHint();
});
