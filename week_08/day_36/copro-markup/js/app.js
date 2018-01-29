const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', e => {
    // console.log(e.target.closest('.ui-card'));
    e.target.closest('.ui-card').querySelector('.star-count').textContent++;
  })
});
