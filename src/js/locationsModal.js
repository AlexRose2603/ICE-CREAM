const locationsBackdrop = document.querySelector('.locations-backdrop');
const locationsModal = document.getElementById('modal-location');
const closeLocationsBtn = document.querySelector('.locations-close-btn');
const locationsBtn = document.querySelector('.btn-link');

const openLocationsModal = () => {
  locationsBackdrop.classList.add('is-visible');
  locationsModal.classList.add('is-visible');
  document.body.classList.add('modal-open');
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
};

const closeLocationsModal = () => {
  locationsBackdrop.classList.remove('is-visible');
  locationsModal.classList.remove('is-visible');
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  document.body.style.position = '';
};

locationsBackdrop.addEventListener('click', function (event) {
  if (event.target === locationsBackdrop) {
    closeLocationsModal();
  }
});

locationsBtn.addEventListener('click', openLocationsModal);

closeLocationsBtn.addEventListener('click', closeLocationsModal);
