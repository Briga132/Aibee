// GET IN TOUCH
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorPhone = document.getElementById('error-phone');
    const errorMessage = document.getElementById('error-message');

    if (name) name.classList.remove('error');
    if (email) email.classList.remove('error');
    if (phone) phone.classList.remove('error');
    if (message) message.classList.remove('error');

    if (errorName) errorName.textContent = '';
    if (errorEmail) errorEmail.textContent = '';
    if (errorPhone) errorPhone.textContent = '';
    if (errorMessage) errorMessage.textContent = '';

    let hasErrors = false;

    const nameValue = name ? name.value.trim() : '';
    if (nameValue === '') {
      if (errorName) errorName.textContent = 'Įveskite vardą';
      if (name) name.classList.add('error');
      hasErrors = true;
    } else if (!/^[A-ZĄČĘĖĮŠŲŪŽ][a-ząčęėįšųūž]+$/.test(nameValue)) {
      if (errorName) errorName.textContent = 'Vardas turi prasidėti didžiąja raide ir būti be skaičių';
      if (name) name.classList.add('error');
      hasErrors = true;
    }

    const emailValue = email ? email.value.trim() : '';
    if (emailValue === '') {
      if (errorEmail) errorEmail.textContent = 'Įveskite el. paštą';
      if (email) email.classList.add('error');
      hasErrors = true;
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(emailValue)) {
      if (errorEmail) errorEmail.textContent = 'El. paštas turi būti teisingas (pvz., vardas@gmail.com)';
      if (email) email.classList.add('error');
      hasErrors = true;
    }

    const phoneValue = phone ? phone.value.trim() : '';
    if (phoneValue === '') {
      if (errorPhone) errorPhone.textContent = 'Įveskite telefono numerį';
      if (phone) phone.classList.add('error');
      hasErrors = true;
    } else if (!/^\+?\d+$/.test(phoneValue)) {
      if (errorPhone) errorPhone.textContent = 'Telefono numeris turi prasidėti „+“ ir būti tik iš skaičių';
      if (phone) phone.classList.add('error');
      hasErrors = true;
    }

    const messageValue = message ? message.value.trim() : '';
    if (messageValue === '') {
      if (errorMessage) errorMessage.textContent = 'Parašykite žinutę';
      if (message) message.classList.add('error');
      hasErrors = true;
    }

    if (!hasErrors) {
      alert('Forma sėkmingai išsiųsta! Ačiū :)');
    }
  });
}
// login/sign-up
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const loginBtnHeader = document.getElementById('login-btn');
  const signupBtnHeader = document.getElementById('signup-btn');

  const loginBtnModal = document.getElementById('login-btn-modal');
  const signupBtnModal = document.getElementById('signup-btn-modal');

  const closeBtn = modal ? modal.querySelector('.close-btn') : null;

  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  const users = {};

  function showModal() {
    if (!modal) return;
    modal.classList.remove('hidden');
    showLoginForm();
  }

  function hideModal() {
    if (!modal) return;
    modal.classList.add('hidden');
  }

  function showLoginForm() {
    if (!loginForm || !signupForm) return;
    loginForm.style.display = 'flex';
    signupForm.style.display = 'none';
    clearMessages();

    if (loginBtnModal) loginBtnModal.classList.add('active');
    if (signupBtnModal) signupBtnModal.classList.remove('active');
  }

  function showSignupForm() {
    if (!loginForm || !signupForm) return;
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
    clearMessages();

    if (signupBtnModal) signupBtnModal.classList.add('active');
    if (loginBtnModal) loginBtnModal.classList.remove('active');
  }

  function clearMessages() {
    if (!modal) return;
    const messages = modal.querySelectorAll('.message');
    messages.forEach(msg => msg.remove());
  }

  function showMessage(form, text, isError = true) {
    clearMessages();

    const msg = document.createElement('div');
    msg.classList.add('message');
    msg.style.color = isError ? 'red' : '#00c6a9';
    msg.style.marginTop = '10px';
    msg.textContent = text;

    form.appendChild(msg);
  }

  if (loginBtnHeader) {
    loginBtnHeader.addEventListener('click', (e) => {
      e.preventDefault();
      showModal();
    });
  }

  if (signupBtnHeader) {
    signupBtnHeader.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.remove('hidden');
      showSignupForm();
    });
  }

  if (loginBtnModal) loginBtnModal.addEventListener('click', showLoginForm);
  if (signupBtnModal) signupBtnModal.addEventListener('click', showSignupForm);
  if (closeBtn) closeBtn.addEventListener('click', hideModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const usernameEl = loginForm.querySelector('input[type="text"]');
      const passwordEl = loginForm.querySelector('input[type="password"]');

      const username = usernameEl ? usernameEl.value.trim() : '';
      const password = passwordEl ? passwordEl.value : '';

      if (!username || !password) {
        showMessage(loginForm, 'Please enter username and password.');
        return;
      }

      if (!(username in users)) {
        showMessage(loginForm, 'User not found.');
        return;
      }

      if (users[username] !== password) {
        showMessage(loginForm, 'Incorrect password.');
        return;
      }

      showMessage(loginForm, 'Login successful!', false);
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const usernameEl = signupForm.querySelector('input[type="text"]');
      const emailEl = signupForm.querySelector('input[type="email"]');
      const passwordEl = signupForm.querySelector('input[type="password"]');

      const username = usernameEl ? usernameEl.value.trim() : '';
      const email = emailEl ? emailEl.value.trim() : '';
      const password = passwordEl ? passwordEl.value : '';

      if (!username || !email || !password) {
        showMessage(signupForm, 'Please fill all fields.');
        return;
      }

      if (username in users) {
        showMessage(signupForm, 'Username already taken.');
        return;
      }
      users[username] = password;

      showMessage(signupForm, 'Registration successful! You can now log in.', false);
      setTimeout(() => {
        showLoginForm();
      }, 1500);
    });
  }
});
