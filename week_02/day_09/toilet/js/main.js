let water = document.querySelector('.water');
let button = document.querySelector('.button');

const flush = () => {
  water.classList.add('flush');
  setTimeout(() => {
    water.classList.remove('flush');
  }, 4000);
}

button.addEventListener('click', flush);
