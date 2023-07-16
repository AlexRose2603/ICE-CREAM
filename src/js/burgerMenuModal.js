const burgerMenu = document.querySelector('.burger-menu');
const burgerOpenBtn = document.querySelector('.burger-modal-open');
const mobileClose = document.querySelector('.mobile-open-modal');
const burgerCloseBtn = document.querySelector('.burger-modal-close-btn');

// Function to open burger menu
const openBurgerMenu = () => {
  burgerMenu.classList.remove('is-hidden');
  burgerMenu.classList.add('open');
};

// Function to close the burger menu
const closeBurgerMenu = () => {
  burgerMenu.classList.add('is-hidden');
  burgerMenu.classList.remove('open');
};

// Add event listeners to open and close the burger menu
burgerOpenBtn.addEventListener('click', openBurgerMenu);
burgerCloseBtn.addEventListener('click', closeBurgerMenu);
mobileClose.addEventListener('click', closeBurgerMenu);
