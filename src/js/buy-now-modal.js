const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const buyButton = document.querySelector('.buy-btn');
const closeButton = document.querySelector('.modal-close-btn');

// Function to open the modal
const openModal = () => {
  backdrop.classList.remove('is-hidden');
  modal.classList.remove('is-hidden');
};

// Function to close the modal
const closeModal = () => {
  backdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');
};

// Event listener for the buy button
buyButton.addEventListener('click', openModal);

// Event listener for the close button
closeButton.addEventListener('click', closeModal);
