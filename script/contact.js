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