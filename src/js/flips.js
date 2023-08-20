const cards = document.querySelectorAll('.choice-item');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
  });
  card.querySelector('.back-side').addEventListener('click', event => {
    event.stopPropagation();
    card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
  });
});
