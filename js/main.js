// ----------------------------
// --- DEFINE HTML ELEMENTS ---
// ----------------------------

const PAGE = document.querySelector('.page__body');

// --------------------------------
// --- BENEFITS SECTION TOOLTIP ---
// --------------------------------
{
  tippy('#tooltipBtn', {
    content: 'При наличии свободных мест',
    arrow: false,
    placement: 'top',
    theme: 'white',
    animation: 'scale',
    delay: [0, 300],
  });
};

// ------------------------------
// --- COACHES SECTION SWIPER ---
// ------------------------------

{
  const swiper = new Swiper('.swiper', {
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    draggable: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
      pageUpDown: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      701: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      861: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      981: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1170: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

// ------------------------------------
// --- COACHES SECTION MODAL WINDOW ---
// ------------------------------------

{
  const openBtns = document.querySelectorAll('.coaches__btn');
  const closeBtns = document.querySelectorAll('.js-modal-btn');
  const modals = document.querySelectorAll('.coaches-modal');
  const skillsMenu = document.querySelectorAll('.js-modal-menu');
  const skillsTxt = document.querySelectorAll('.coaches-modal__text');
  const skillsMobileMenu = document.querySelectorAll('.js-choice');

  // --- to close modal window ---
  function closeModalWindow() {
    // remove active window
    modals.forEach((modal) => {
      modal.classList.remove('open-modal');
    });

    // remove active topic button
    skillsMenu.forEach((menuItem) => {
      menuItem.classList.remove('topic__btn--active');
    });

    // remove active text
    skillsTxt.forEach((txt) => {
      txt.classList.remove('coaches-modal__text--active');
    });

    PAGE.classList.remove('stop-scroll');
  };

  // --- to change modal window text ---
  function changeModalTxt(path) {
    skillsTxt.forEach((txt) => {
      txt.classList.remove('coaches-modal__text--active');
    });

    document.querySelector(`[data-target='${path}']`).classList.add('coaches-modal__text--active');
  };

  // --- open modal window ---
  openBtns.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      const path = ev.currentTarget.dataset.path;
      
      // remove active window before open another
      modals.forEach((modal) => {
        modal.classList.remove('open-modal');
      });

      document.querySelector(`[data-target='${path}']`).classList.add('open-modal');

      document.querySelector('.open-modal').querySelector('.topic__btn').classList.add('topic__btn--active');
      document.querySelector('.open-modal').querySelector('.coaches-modal__text').classList.add('coaches-modal__text--active');

      PAGE.classList.add('stop-scroll');
    });
  });

  // --- close modal window by button ---
  closeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModalWindow();
    });
  });

  // --- close modal window by 'Escape' key ---
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeModalWindow();
    };
  });

  // ----------------------------
  // --- COACHES SECTION TABS ---
  // ----------------------------

  // --- desktop version ---

  skillsMenu.forEach((menuItem) => {
    menuItem.addEventListener('click', (ev) => {
      let path = ev.currentTarget.dataset.path;
      
      // remove active menu button before open another
      skillsMenu.forEach((menuItem) => {
        menuItem.classList.remove('topic__btn--active');
      });

      ev.currentTarget.classList.add('topic__btn--active');

      changeModalTxt(path);
    });
  });

  // --- mobile version ---

  skillsMobileMenu.forEach((mobileMenuItem) => {
    mobileMenuItem.addEventListener('change', (ev) => {
      let path = ev.target.value;

      changeModalTxt(path);
    });
  });

  // -----------------------------------
  // --- COACHES MODAL WINDOW SELECT ---
  // -----------------------------------

  {
    const selectELements = document.querySelectorAll('.js-choice');
    selectELements.forEach((selEl) => {
      const choices = new Choices(selEl, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        position: 'bottom',
      });
    });
  };
};

// ---------------------------------------------
// --- VALIDATION FORM IN CONTACT US SECTION ---
// ---------------------------------------------

{
  const formBtn = document.getElementById('form-submit-btn');
  const inpName = document.getElementById('name');
  const inpPhone = document.getElementById('tel');
  const inpEmail = document.getElementById('email');

  // --- to shake input ---
  function shakeInput(input) {
    if (input.classList.contains('just-validate-error-field') ||
    input.value === '') {
      input.classList.add('shake');
      setTimeout(() => {
        input.classList.remove('shake');
      }, 600);
    };
  };

  // --- validation ---

  document.addEventListener('DOMContentLoaded', function () {
    const validation = new JustValidate('#form');
    const selector = document.querySelector(`input[type='tel']`);
    const im = new Inputmask('+7 (999)-999-99-99');
    im.mask(selector);
    validation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Заполните поле',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Недостаточно символов',
        },
        {
          rule: 'maxLength',
          value: 30,
          errorMessage: 'Слишком много символов',
        },
      ])
      .addField('#email', [
        {
          rule: 'required',
          errorMessage: 'Заполните поле',
        },
        {
          rule: 'email',
          errorMessage: 'Почта с ошибкой!',
        },
      ])
      .addField('#tel', [
        {
          rule: 'function',
          validator: function (name, value) {
            const phone = selector.inputmask.unmaskedvalue();
            return phone.length === 10
          },
          errorMessage: 'Заполните поле',
        }
      ]);
  });

  // --- shake inputs ---

  formBtn.addEventListener('click', () => {
    // --- check the name input ---
    shakeInput(inpName);

    // --- check the e-mail input ---
    shakeInput(inpPhone);

    // --- check the phone input ---
    shakeInput(inpEmail);
  });
};

// -------------------
// --- BURGER MENU ---
// -------------------

{
  const burger = document.getElementById('burger');
  const menu = document.querySelector('.panel__nav');

  // --- to close menu ---
  function closeMobileMenu() {
    menu.classList.remove('panel__nav--active');
    PAGE.classList.remove('stop-scroll');
    burger.classList.remove('js-burger-active');
  };

  // --- click on button ---
  burger.addEventListener('click', () => {
    menu.classList.toggle('panel__nav--active');
    PAGE.classList.toggle('stop-scroll');
    burger.classList.toggle('js-burger-active');
  });

  // --- click on menu panel ---
  menu.addEventListener('click', () => {
    closeMobileMenu();
  });

  // --- click on 'escape' ---
  window.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      closeMobileMenu();
    };
  });
};