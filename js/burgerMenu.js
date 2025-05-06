const page = document.querySelector('.page__body');
const burger = document.getElementById('burger');
const menu = document.querySelector('.panel__nav');

function closeMobileMenu() {
  menu.classList.remove('panel__nav--active');
  page.classList.remove('stop-scroll');
  burger.classList.remove('js-burger-active');
}

export function getBurgerMenu() {
  //* click on button
  burger.addEventListener('click', () => {
    menu.classList.toggle('panel__nav--active');
    page.classList.toggle('stop-scroll');
    burger.classList.toggle('js-burger-active');
  });
  
  //* click on menu panel
  menu.addEventListener('click', () => {
    closeMobileMenu();
  });
  
  //* click on 'escape'
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeMobileMenu();
    };
  });
}