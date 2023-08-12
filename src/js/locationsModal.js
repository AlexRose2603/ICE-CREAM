const locationsBackdrop = document.querySelector('.locations-backdrop');
const locationsModal = document.getElementById('modal-location');
const closeLocationsBtn = document.querySelector('.locations-close-btn');
const locationsBtn = document.querySelector('.btn-link');

// Function to open the modal
const openLocationsModal = () => {
  locationsBackdrop.classList.remove('is-hidden');
  locationsModal.classList.remove('is-hidden');
  document.body.classList.add('modal-open');
};

// Function to close the modal
const closeLocationsModal = () => {
  locationsBackdrop.classList.add('is-hidden');
  locationsModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
};

locationsBackdrop.addEventListener('click', function (event) {
  if (event.target === locationsBackdrop) {
    closeLocationsModal();
  }
});
// Event listener for the read more button
locationsBtn.addEventListener('click', openLocationsModal);

// Event listener for the close button
closeLocationsBtn.addEventListener('click', closeLocationsModal);
