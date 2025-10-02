  
  // about hospital
  $(".bobel").click(function()
  {
      $(".labuba2").toggle('show')
  }
  )


    const button = document.querySelector('.bobel');
    const dots = document.querySelector('.labuba3');
    const fullText = document.querySelector('.labuba2');

    button.addEventListener('click', function () {
        const isVisible = fullText.classList.contains('show');

        if (isVisible) {

            dots.style.display = 'inline';
            fullText.classList.remove('show');
            button.textContent = 'Read More';
        } else {

            dots.style.display = 'none';
            fullText.classList.add('show');
            button.textContent = 'Read Less';
        }
    });


// hospital treatment
    document.addEventListener('DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('.gore');

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                const card = button.closest('.kletka1, .kletka2, .kletka3, .kletka4');

                const dots = card.querySelector('.help3');
                const fullText = card.querySelector('.help2');

                const isVisible = fullText.classList.contains('show');

                if (isVisible) {

                    dots.style.display = 'inline';
                    fullText.classList.remove('show');
                    button.textContent = 'READ MORE';
                } else {

                    dots.style.display = 'none';
                    fullText.classList.add('show');
                    button.textContent = 'READ LESS';
                }
            });
        });
    });


  // GET IN TOUCH
document.getElementById('sendBtn').addEventListener('click', function(e) {
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

// our doctors
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.darkwillow');
    const prev = document.querySelector('.axel');
    const next = document.querySelector('.axer');

    const originalSlides = Array.from(track.children).slice(0, 3);
    const visibleSlides = 4;
    const cloneCount = 4;

    let slideWidth = originalSlides[0].offsetWidth + 15;
    let index = cloneCount;

    const clonesStart = originalSlides.slice(-cloneCount).map(card => card.cloneNode(true));
    clonesStart.forEach(clone => track.insertBefore(clone, track.firstChild));

    const clonesEnd = originalSlides.slice(0, cloneCount).map(card => card.cloneNode(true));
    clonesEnd.forEach(clone => track.appendChild(clone));

    const totalSlides = track.children.length;

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

document.getElementById('btn').addEventListener('click', function (e) {
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
    if (!field.value.trim()) {
      field.classList.add('error-border');
      hasEmpty = true;
    } else {
      field.classList.remove('error-border');
    }
  });

  const phoneValue = phone.value.trim();
  const plusCount = (phoneValue.match(/\+/g) || []).length;
  const phoneError = plusCount > 1 || (plusCount === 1 && !phoneValue.startsWith('+'));

  const nameValue = name.value.trim();
  const nameError = nameValue && nameValue[0] !== nameValue[0].toUpperCase();

  if (phoneError) {
    phone.classList.add('error-border');
    alert('Telefono numeris turi prasidėti vienu „+“ simboliu ir be papildomų pliusų.');
    return;
  }

  if (nameError) {
    name.classList.add('error-border');
    alert('Vardas turi prasidėti didžiąja raide.');
    return;
  }

  if (hasEmpty) {
    alert('Nepavyko išsiųsti. Užpildykite visus laukus!');
  } else {
    alert('Sėkmingai išsiųsta! Ačiū :)');

    fields.forEach(field => {
      if(field === phone) {
        field.value = '+';
      } else {
        field.value = '';
      }
      field.classList.remove('error-border');
    });
  }
});

document.getElementById('originalSymptoms').addEventListener('input', function () {
  const value = this.value;
  this.value = value.charAt(0).toUpperCase() + value.slice(1);
});

// mico hospital

// testinimonial 

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".burlyki");
    const leftBtn = document.querySelector(".syro4ekr");
    const rightBtn = document.querySelector(".syro4ekl");

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

