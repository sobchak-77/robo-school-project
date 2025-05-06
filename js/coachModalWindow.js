const page = document.querySelector('.page__body');
const modals = document.querySelectorAll('.coaches-modal');
const skillsMenu = document.querySelectorAll('.js-modal-menu');
const skillsTxt = document.querySelectorAll('.coaches-modal__text');

function closeModalWindow() {
  //* remove active window
  modals.forEach((modal) => {
    modal.classList.remove('open-modal');
  });

  //* remove active topic button
  skillsMenu.forEach((menuItem) => {
    menuItem.classList.remove('topic__btn--active');
  });

  //* remove active text
  skillsTxt.forEach((txt) => {
    txt.classList.remove('coaches-modal__text--active');
  });

  page.classList.remove('stop-scroll');
};

function openModalWindow() {
  const openBtns = document.querySelectorAll('.coaches__btn');
  openBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      const path = ev.currentTarget.dataset.path;

      //* remove active window before open another
      modals.forEach((modal) => {
        modal.classList.remove('open-modal');
      });

      document.querySelector(`[data-target='${path}']`).classList.add('open-modal');

      document.querySelector('.open-modal').querySelector('.topic__btn').classList.add('topic__btn--active');
      document.querySelector('.open-modal').querySelector('.coaches-modal__text').classList.add('coaches-modal__text--active');

      page.classList.add('stop-scroll');
    });
  });
}

function changeModalWindowTxt(path) {
  skillsTxt.forEach((txt) => {
    txt.classList.remove('coaches-modal__text--active');
  });

  document.querySelector(`[data-target='${path}']`).classList.add('coaches-modal__text--active');
}

function getcloseModalWindowBtn() {
  //* close modal window by button
  const closeBtns = document.querySelectorAll('.js-modal-btn');
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModalWindow();
    });
  });

  //* close modal window by 'Escape' key
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeModalWindow();
    }
  });
}

function selectSkill() {
  const selectELements = document.querySelectorAll('.js-choice');
  selectELements.forEach((selEl) => {
    const choices = new Choices(selEl, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      position: 'bottom',
    });
  });
}

function getSkillsMenuChanging() {
  // --- desktop version ---
  skillsMenu.forEach(menuItem => {
    menuItem.addEventListener('click', (ev) => {
      let path = ev.currentTarget.dataset.path;

      //* remove active menu button before open another
      skillsMenu.forEach((menuItem) => {
        menuItem.classList.remove('topic__btn--active');
      });

      ev.currentTarget.classList.add('topic__btn--active');

      changeModalWindowTxt(path);
    });
  });

  // --- mobile version ---
  const skillsMobileMenu = document.querySelectorAll('.js-choice');
  skillsMobileMenu.forEach(mobileMenuItem => {
    mobileMenuItem.addEventListener('change', (ev) => {
      let path = ev.target.value;

      changeModalWindowTxt(path);
    });
  });
}

export function getCoachModalWindow() {
  openModalWindow();
  getcloseModalWindowBtn();
  selectSkill();
  getSkillsMenuChanging();
}