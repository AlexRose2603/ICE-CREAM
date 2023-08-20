new Swiper('.feedback-slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

/////////For toggling cards in products section
const cards = document.querySelectorAll('.choice-item');

cards.forEach(card => {
  const frontSide = card.querySelector('.front-side');
  const backSide = card.querySelector('.back-side');

  card.addEventListener('click', () => {
    card.querySelector('.card').classList.toggle('flipped');
  });
});
