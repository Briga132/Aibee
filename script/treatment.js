// hospital treatment
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.gore');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const card = button.closest('.kletka1, .kletka2, .kletka3, .kletka4');

            if (!card) return;

            const dots = card.querySelector('.help3');
            const fullText = card.querySelector('.help2');

            if (!fullText) return;

            const isVisible = fullText.classList.contains('show');

            if (isVisible) {

                if (dots) dots.style.display = 'inline';
                fullText.classList.remove('show');
                button.textContent = 'READ MORE';
            } else {

                if (dots) dots.style.display = 'none';
                fullText.classList.add('show');
                button.textContent = 'READ LESS';
            }
        });
    });
});
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
// burger menu
const prompt = require("prompt-sync")({ sigint: true });

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const burger = document.querySelector('.burger');
    sidebar.classList.toggle('active');
    burger.classList.toggle('active');
}
let lastScrollTop = 0;
const topBar = document.getElementById("topBar");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        topBar.style.transform = "translateY(-100%)";
    } else {
        topBar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
});
