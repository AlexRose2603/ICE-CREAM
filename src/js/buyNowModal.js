const backdrop = document.querySelector('.backdrop');
const buyModal = document.getElementById('buy-modal');
const buyButton = document.querySelector('.buy-btn');
const mobileOpen = document.querySelector('.mobile-open-modal');
const buyNowCloseButton = document.querySelector('.modal-close-btn');

const openBuyModal = () => {
  backdrop.classList.add('is-visible');
  buyModal.classList.add('is-visible');
  document.body.classList.add('modal-open');
};

const closeBuyModal = () => {
  backdrop.classList.remove('is-visible');
  buyModal.classList.remove('is-visible');
  document.body.classList.remove('modal-open');
};
backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeBuyModal();
  }
});

buyButton.addEventListener('click', openBuyModal);
mobileOpen.addEventListener('click', openBuyModal);

buyNowCloseButton.addEventListener('click', closeBuyModal);
