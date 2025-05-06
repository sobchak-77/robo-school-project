export function validateForm() {
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
}