// our doctors
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.darkwillow');
    const prev = document.querySelector('.axel');
    const next = document.querySelector('.axer');

    if (!track || !prev || !next) return;

    const originalSlides = Array.from(track.children).slice(0, 3);
    const cloneCount = 4;

    if (originalSlides.length === 0) return;

    let slideWidth = originalSlides[0].offsetWidth + 15;
    let index = cloneCount;

    const clonesStart = originalSlides.slice(-cloneCount).map(card => card.cloneNode(true));
    clonesStart.forEach(clone => track.insertBefore(clone, track.firstChild));

    const clonesEnd = originalSlides.slice(0, cloneCount).map(card => card.cloneNode(true));
    clonesEnd.forEach(clone => track.appendChild(clone));

    function setStartPosition() {
        track.style.transition = 'none';
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    setStartPosition();

    let isMoving = false;

    function moveTo(newIndex) {
        if (isMoving) return;
        isMoving = true;

        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${slideWidth * newIndex}px)`;

        track.addEventListener('transitionend', function handler() {
            track.removeEventListener('transitionend', handler);

            if (newIndex < cloneCount) {
                newIndex += originalSlides.length;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            }

            if (newIndex >= originalSlides.length + cloneCount) {
                newIndex -= originalSlides.length;
                track.style.transition = 'none';
                track.style.transform = `translateX(-${slideWidth * newIndex}px)`;
            }

            index = newIndex;
            isMoving = false;
        });
    }

    next.addEventListener('click', () => moveTo(index + 1));
    prev.addEventListener('click', () => moveTo(index - 1));

    window.addEventListener('resize', () => {
        slideWidth = originalSlides[0].offsetWidth + 15;
        setStartPosition();
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

