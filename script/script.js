// about hospital
$(".bobel").click(function () {
  $(".labuba2").toggle('show');
});


const button = document.querySelector('.bobel');
const dots = document.querySelector('.labuba3');
const fullText = document.querySelector('.labuba2');

if (button && fullText) {
    button.addEventListener('click', function () {
        const isVisible = fullText.classList.contains('show');

        if (isVisible) {

            if (dots) dots.style.display = 'inline';
            fullText.classList.remove('show');
            button.textContent = 'Read More';
        } else {

            if (dots) dots.style.display = 'none';
            fullText.classList.add('show');
            button.textContent = 'Read Less';
        }
    });
}

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



  // GET IN TOUCH
document.getElementById('btnnn').addEventListener('click', function(e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorPhone = document.getElementById('error-phone');
  const errorMessage = document.getElementById('error-message');

  name.classList.remove('error');
  email.classList.remove('error');
  phone.classList.remove('error');
  message.classList.remove('error');

  errorName.textContent = '';
  errorEmail.textContent = '';
  errorPhone.textContent = '';
  errorMessage.textContent = '';

  let hasErrors = false;

  const nameValue = name.value.trim();
  if (nameValue === '') {
    errorName.textContent = 'Įveskite vardą';
    name.classList.add('error');
    hasErrors = true;
  } else if (!/^[A-ZĄČĘĖĮŠŲŪŽ][a-ząčęėįšųūž]+$/.test(nameValue)) {
    errorName.textContent = 'Vardas turi prasidėti didžiąja raide ir būti be skaičių';
    name.classList.add('error');
    hasErrors = true;
  }

  const emailValue = email.value.trim();
  if (emailValue === '') {
    errorEmail.textContent = 'Įveskite el. paštą';
    email.classList.add('error');
    hasErrors = true;
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(emailValue)) {
    errorEmail.textContent = 'El. paštas turi būti teisingas (pvz., vardas@gmail.com)';
    email.classList.add('error');
    hasErrors = true;
  }

  const phoneValue = phone.value.trim();
  if (phoneValue === '') {
    errorPhone.textContent = 'Įveskite telefono numerį';
    phone.classList.add('error');
    hasErrors = true;
  } else if (!/^\+?\d+$/.test(phoneValue)) {
    errorPhone.textContent = 'Telefono numeris turi prasidėti „+“ ir būti tik iš skaičių';
    phone.classList.add('error');
    hasErrors = true;
  }

  const messageValue = message.value.trim();
  if (messageValue === '') {
    errorMessage.textContent = 'Parašykite žinutę';
    message.classList.add('error');
    hasErrors = true;
  }

  if (!hasErrors) {
    alert('Forma sėkmingai išsiųsta! Ačiū :)');
  }
});

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

// book apointment
const bookBtn = document.getElementById('btn');
if (bookBtn) {
  bookBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById('originalPatientName');
    const doctor = document.getElementById('originalDoctorName');
    const department = document.getElementById('originalDepartmentName');
    const phone = document.getElementById('originalPhone');
    const symptoms = document.getElementById('originalSymptoms');
    const date = document.getElementById('date');

    const fields = [name, doctor, department, phone, symptoms, date];
    let hasEmpty = false;

    fields.forEach(field => {
      if (!field || !field.value.trim()) {
        if (field) field.classList.add('error-border');
        hasEmpty = true;
      } else {
        if (field) field.classList.remove('error-border');
      }
    });

    const phoneValue = phone ? phone.value.trim() : '';
    const plusCount = (phoneValue.match(/\+/g) || []).length;
    const phoneError = plusCount > 1 || (plusCount === 1 && !phoneValue.startsWith('+'));

    const nameValue = name ? name.value.trim() : '';
    const nameError = nameValue && nameValue[0] !== nameValue[0].toUpperCase();

    if (phoneError) {
      if (phone) phone.classList.add('error-border');
      alert('Telefono numeris turi prasidėti vienu „+“ simboliu ir be papildomų pliusų.');
      return;
    }

    if (nameError) {
      if (name) name.classList.add('error-border');
      alert('Vardas turi prasidėti didžiąja raide.');
      return;
    }

    if (hasEmpty) {
      alert('Nepavyko išsiųsti. Užpildykite visus laukus!');
    } else {
      alert('Sėkmingai išsiųsta! Ačiū :)');

      fields.forEach(field => {
        if (!field) return;
        if(field === phone) {
          field.value = '+';
        } else {
          field.value = '';
        }
        field.classList.remove('error-border');
      });
    }
  });
}

const symptomsEl = document.getElementById('originalSymptoms');
if (symptomsEl) {
  symptomsEl.addEventListener('input', function () {
    const value = this.value;
    this.value = value.charAt(0).toUpperCase() + value.slice(1);
  });
}

// mico hospital

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

document.getElementById('originalSymptoms').addEventListener('input', function () {
  const value = this.value;
  this.value = value.charAt(0).toUpperCase() + value.slice(1);
});

// mico hospital
  const slides = document.querySelectorAll('.vosvagen');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('arrowL').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('arrowR').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
})});