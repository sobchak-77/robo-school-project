function shakeInput(input) {
  if (input.classList.contains('just-validate-error-field') ||
    input.value === '') {
    input.classList.add('shake');
    setTimeout(() => {
      input.classList.remove('shake');
    }, 600);
  }
}

export function runInputShaking() {
  const inpName = document.getElementById('name');
  const inpPhone = document.getElementById('tel');
  const inpEmail = document.getElementById('email');
  const formBtn = document.getElementById('form-submit-btn');
  formBtn.addEventListener('click', () => {
    shakeInput(inpName);
    shakeInput(inpPhone);
    shakeInput(inpEmail);
  });
}