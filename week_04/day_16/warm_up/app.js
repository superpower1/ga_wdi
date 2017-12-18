const map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];

const treasureFinder = (map, mark) => {
  const position = {
    x:0,
    y:0
  }

  let counter = 0;

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === mark) {
        position.x = i;
        position.y = j;
        counter++;
        if (counter > 1) {
          break;
        }
      }
    }
  }

  if (counter === 0) {
    console.log("Treasure does not exist in this map!");
    return false;
  } else if (counter === 1) {
    console.log("Found the treasure!");
    return position;
  } else {
    console.log("That does not belong in a museum!");
    return false;
  }

}


console.log(treasureFinder(holyGrailMap, "v"));
