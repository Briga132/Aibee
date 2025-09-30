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
document.getElementById('sendBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const inputName = document.getElementById('name');
  const inputEmail = document.getElementById('email');
  const inputPhone = document.getElementById('phone');
  const inputMessage = document.getElementById('message');

  const errorName = document.getElementById('error-name');
  const errorEmail = document.getElementById('error-email');
  const errorPhone = document.getElementById('error-phone');
  const errorMessage = document.getElementById('error-message');

  [inputName, inputEmail, inputPhone, inputMessage].forEach(field => field.classList.remove('error'));
  [errorName, errorEmail, errorPhone, errorMessage].forEach(errorField => errorField.textContent = '');

  let formHasErrors = false;

  const nameValue = inputName.value.trim();
  const namePattern = /^[A-ZА-Я][a-zа-яA-ZА-Я]*$/;
  if (nameValue === '') {
    inputName.classList.add('error');
    errorName.textContent = 'Please enter your name';
    formHasErrors = true;
  } else if (!namePattern.test(nameValue)) {
    inputName.classList.add('error');
    errorName.textContent = 'Name should start with a capital letter and contain only letters';
    formHasErrors = true;
  }

  const emailValue = inputEmail.value.trim();
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (emailValue === '') {
    inputEmail.classList.add('error');
    errorEmail.textContent = 'Please enter your email';
    formHasErrors = true;
  } else if (!emailPattern.test(emailValue)) {
    inputEmail.classList.add('error');
    errorEmail.textContent = 'Email must be valid and contain a domain (e.g. gmail.com)';
    formHasErrors = true;
  }

  const phoneValue = inputPhone.value.trim();
  const phonePattern = /^\+?\d+$/;
  if (phoneValue === '') {
    inputPhone.classList.add('error');
    errorPhone.textContent = 'Please enter your phone number';
    formHasErrors = true;
  } else if (!phonePattern.test(phoneValue)) {
    inputPhone.classList.add('error');
    errorPhone.textContent = 'Phone number should start with "+"';
    formHasErrors = true;
  }

  const messageValue = inputMessage.value.trim();
  if (messageValue === '') {
    inputMessage.classList.add('error');
    errorMessage.textContent = 'Please enter your message';
    formHasErrors = true;
  }

  if (!formHasErrors) {
    alert('Form submitted successfully!');
  }
});
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
