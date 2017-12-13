const easyBot = (table, player) => {
  let emptyArr = [];

  table.forEach(row => {
    const tempArr = row.filter(item => !item.textContent);
    emptyArr = emptyArr.concat(tempArr);
  });

  const rand = Math.floor(Math.random()*emptyArr.length);

  if (emptyArr.length != 0) {
    emptyArr[rand].textContent = player;
  }

}
