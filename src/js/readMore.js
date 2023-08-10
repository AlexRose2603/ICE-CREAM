const readBackdrop = document.querySelector('.read-backdrop');
const readMoreModal = document.getElementById('read');
const readMoreButton = document.querySelector('.read-more-btn');
const readMoreCloseButton = document.querySelector('.read-more-close-btn');

console.log(readMoreModal);
// Function to open the modal
const openReadMoreModal = () => {
  readBackdrop.classList.remove('is-hidden');
  readMoreModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
};

// Function to close the modal
const closeReadMoreModal = () => {
  readBackdrop.classList.add('is-hidden');
  readMoreModal.classList.add('is-hidden');
  document.body.classList.add('modal-open');
};

// Event listener for the read more button
readMoreButton.addEventListener('click', openReadMoreModal);

// Event listener for the close button
readMoreCloseButton.addEventListener('click', closeReadMoreModal);
