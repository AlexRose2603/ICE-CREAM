const franchiseBackdrop = document.querySelector('.franchise-backdrop');
const franchiseModal = document.querySelector('.franchise-modal');
const closeFranchiseBtn = document.querySelector('.franchise-close-btn');
const franchiseBtn = document.querySelector('.franchise-btn');
console.log(franchiseModal);
// Function to open the modal
const openFranchiseModal = () => {
  franchiseBackdrop.classList.remove('is-hidden');
  franchiseModal.classList.remove('is-hidden');
};

// Function to close the modal
const closeFranchiseModal = () => {
  franchiseBackdrop.classList.add('is-hidden');
  franchiseModal.classList.add('is-hidden');
};

// Event listener for the read more button
franchiseBtn.addEventListener('click', openFranchiseModal);

// Event listener for the close button
closeFranchiseBtn.addEventListener('click', closeFranchiseModal);
