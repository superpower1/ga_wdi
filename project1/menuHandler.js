document.querySelector('.pvp').addEventListener('click', e => {
  document.querySelector('#menu-toggle').checked = !document.querySelector('#menu-toggle').checked;
  reset();
  challengeBot = false;
  player.display = "block";
});

document.querySelector('.pvcEasy').addEventListener('click', e => {
  document.querySelector('#menu-toggle').checked = !document.querySelector('#menu-toggle').checked;
  reset();
  challengeBot = true;
  difficulty = "easy";
  player.display = "none";
});

document.querySelector('.pvcHard').addEventListener('click', e => {
  document.querySelector('#menu-toggle').checked = !document.querySelector('#menu-toggle').checked;
  reset();
  challengeBot = true;
  difficulty = "hard";
  player.display = "none";
});
