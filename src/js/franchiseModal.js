const franchiseBackdrop = document.querySelector('.franchise-backdrop');
const franchiseModal = document.querySelector('.franchise-modal');
const closeFranchiseBtn = document.querySelector('.franchise-close-btn');
const franchiseBtn = document.querySelector('.franchise-btn');

const htmlStyle = document.querySelector('html');

const openFranchiseModal = () => {
  franchiseBackdrop.classList.add('is-visible');
  franchiseModal.classList.add('is-visible');
  document.body.classList.add('modal-open');
  htmlStyle.style.overflow = 'hidden';
};

const closeFranchiseModal = () => {
  franchiseBackdrop.classList.remove('is-visible');
  franchiseModal.classList.remove('is-visible');
  document.body.classList.remove('modal-open');
  htmlStyle.style.overflow = '';
};

franchiseBackdrop.addEventListener('click', function (event) {
  if (event.target === franchiseBackdrop) {
    closeFranchiseModal();
  }
});

franchiseBtn.addEventListener('click', openFranchiseModal);

closeFranchiseBtn.addEventListener('click', closeFranchiseModal);
