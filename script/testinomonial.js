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
// testinimonial
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".burlyki");
    const leftBtn = document.querySelector(".syro4ekr");
    const rightBtn = document.querySelector(".syro4ekl");

    if (!slides.length || !leftBtn || !rightBtn) return;

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "flex";
                slide.classList.remove("skrytnost");
            } else {
                slide.style.display = "none";
                slide.classList.add("skrytnost");
            }
        });
    }

    leftBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    rightBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});