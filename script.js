"use strict";

const messageFormElement = document.querySelector("form");
const { elements } = messageFormElement;

messageFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = elements.nameInput.value;
  if (!isValidName(name)) {
    alert("Field 'Name' is invalid");
    return;
  } else {
    name = name.trim();
  }

  let message = elements.messageInput.value;
  if (!isValidMessage(message)) {
    alert("Field 'Message' is invalid");
    return;
  } else {
    message = message.trim();
  }

  const phone = elements.phoneInput.value;
  if (!isValidPhone(phone)) {
    alert("Field 'Phone' is invalid");
    return;
  }

  const email = elements.emailInput.value;
  if (!isValidEmail(email)) {
    alert("Field 'Email' is invalid");
    return;
  }

  const messageObj = {
    name,
    message,
    phone,
    email,
  };

  console.log(messageObj);                                                       
});

const userNameHintElement = elements.nameInput.nextElementSibling;
elements.nameInput.addEventListener("input", (event) => {
  const userName = elements.nameInput.value;

  if (isValidName(userName)) {
    userNameHintElement.style.display = 'none';
  } else {
    userNameHintElement.textContent = "Field 'Name' is required";
    userNameHintElement.style.display = '';
  }
});

function isValidName(name) {
  const regExp = /\S/;
  return regExp.test(name);
}

const messageHintElement = elements.messageInput.nextElementSibling;
elements.messageInput.addEventListener("input", (event) => {
  const userMessage = elements.messageInput.value;

  if (isValidMessage(userMessage)) {
    messageHintElement.style.display = 'none';
  } else {
    messageHintElement.textContent = "The 'Message' field must contain at least 5 characters";
    messageHintElement.style.display = '';
  }
});

function isValidMessage(message) {
  const trimmedMessage = message.replace(/\s/g, '');
  return trimmedMessage.length >= 5;
}

const phoneHintElement = elements.phoneInput.nextElementSibling;
elements.phoneInput.addEventListener("input", (event) => {
  const userPhone = elements.phoneInput.value;
  
  if (isValidPhone(userPhone)) {
    phoneHintElement.style.display = 'none';
  } else {
    phoneHintElement.textContent = "The 'Phone' field must start with +380 and be filled in as +380(**)*******";
    phoneHintElement.style.display = '';
  }
});

function isValidPhone(phone) {
  const regExp = /^\+380\([0-9]{2}\)[0-9]{7}$/;
  return regExp.test(phone);
}

const emailHintElement = elements.emailInput.nextElementSibling;
elements.emailInput.addEventListener("input", (event) => {
  const userEmail = elements.emailInput.value;
  if (isValidEmail(userEmail)) {
    emailHintElement.style.display = 'none';
  } else {
    emailHintElement.textContent = "The 'Email' field must contain chars@chars.chars";
    emailHintElement.style.display = '';
  }
});

function isValidEmail(email) {
  const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regExp.test(email);
}
