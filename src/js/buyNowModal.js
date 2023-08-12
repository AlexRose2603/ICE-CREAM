const backdrop = document.querySelector('.backdrop');
const buyModal = document.getElementById('buy-modal');
const buyButton = document.querySelector('.buy-btn');
const mobileOpen = document.querySelector('.mobile-open-modal');
const buyNowCloseButton = document.querySelector('.modal-close-btn');

// Function to open the modal
const openBuyModal = () => {
  backdrop.classList.remove('is-hidden');
  buyModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
};

// Function to close the modal
const closeBuyModal = () => {
  backdrop.classList.add('is-hidden');
  buyModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
};
backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeBuyModal();
  }
});

// Event listener for the buy button
buyButton.addEventListener('click', openBuyModal);
mobileOpen.addEventListener('click', openBuyModal);

// Event listener for the close button
buyNowCloseButton.addEventListener('click', closeBuyModal);
