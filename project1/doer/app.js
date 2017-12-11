let todoList = document.querySelector('.todo');
let listItems = todoList.querySelectorAll('li');

listItems.forEach(element => {
  element.addEventListener('click', e => {
    console.log(e.target.textContent);
    e.target.classList.toggle('done');
  });
});
