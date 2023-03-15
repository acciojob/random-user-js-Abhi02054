const userImg = document.querySelector('.user img');
const userName = document.querySelector('.user .name');
const ageButton = document.querySelector('#getAge');
const emailButton = document.querySelector('#getEmail');
const phoneButton = document.querySelector('#getPhone');
const additionalInfo = document.querySelector('.additional-info');
const ageParagraph = document.querySelector('.additional-info .age');
const emailParagraph = document.querySelector('.additional-info .email');
const phoneParagraph = document.querySelector('.additional-info .phone');
const getUserButton = document.querySelector('#getUser');

function displayUserInfo(user) {
  userImg.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

function displayAge(user) {
  ageParagraph.textContent = `Age: ${user.dob.age}`;
}

function displayEmail(user) {
  emailParagraph.textContent = `Email: ${user.email}`;
}

function displayPhone(user) {
  phoneParagraph.textContent = `Phone: ${user.phone}`;
}

function getUser() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      displayUserInfo(user);
      displayAge(user);
      displayEmail(user);
      displayPhone(user);
    });
}

getUserButton.addEventListener('click', getUser);

ageButton.addEventListener('click', () => {
  ageParagraph.style.display = 'block';
  emailParagraph.style.display = 'none';
  phoneParagraph.style.display = 'none';
  additionalInfo.style.display = 'block';
});

emailButton.addEventListener('click', () => {
  ageParagraph.style.display = 'none';
  emailParagraph.style.display = 'block';
  phoneParagraph.style.display = 'none';
  additionalInfo.style.display = 'block';
});

phoneButton.addEventListener('click', () => {
  ageParagraph.style.display = 'none';
  emailParagraph.style.display = 'none';
  phoneParagraph.style.display = 'block';
  additionalInfo.style.display = 'block';
});
