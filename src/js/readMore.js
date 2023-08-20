const readBackdrop = document.querySelector('.read-backdrop');
const readMoreModal = document.getElementById('read');
const readMoreButton = document.querySelector('.read-more-btn');
const readMoreCloseButton = document.querySelector('.read-more-close-btn');

const openReadMoreModal = () => {
  readBackdrop.classList.add('is-visible');
  readMoreModal.classList.add('is-visible');
  document.body.classList.add('modal-open');

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
};

const closeReadMoreModal = () => {
  readBackdrop.classList.remove('is-visible');
  readMoreModal.classList.remove('is-visible');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  document.body.style.position = '';
};

readBackdrop.addEventListener('click', function (event) {
  if (event.target === readBackdrop) {
    closeReadMoreModal();
  }
});

readMoreButton.addEventListener('click', openReadMoreModal);

readMoreCloseButton.addEventListener('click', closeReadMoreModal);
