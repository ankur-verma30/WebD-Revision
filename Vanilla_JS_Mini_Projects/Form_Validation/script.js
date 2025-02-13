const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitButton = document.getElementById("submit-error");

// Name Validation
const validateName = () => {
  const name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Please enter a name.";
    return false;
  }

  if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)) {
    nameError.innerHTML = "Enter a valid full name.";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

// Phone Number Validation
const validatePhone = () => {
  const phone = document.getElementById("contact-phone").value.trim();

  if (phone.length === 0) {
    phoneError.innerHTML = "Please enter a phone number.";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Please enter a valid 10-digit phone number.";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

// Email Validation
const validateEmail = () => {
  const email = document.getElementById("contact-email").value.trim();

  if (email.length === 0) {
    emailError.innerHTML = "Please enter an email address.";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Invalid email format.";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

// Message Validation
const validateMessage = () => {
  const message = document.getElementById("contact-message").value.trim();

  if (message.length === 0) {
    messageError.innerHTML = "Please enter a message.";
    return false;
  }

  if (message.length < 30) {
    let remainingCharacters = 30 - message.length;
    messageError.innerHTML = `Message must be at least 30 characters. ${remainingCharacters} more needed.`;
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
};

// Form Validation on Submit
const validateForm = (e) => {
  e.preventDefault(); // Prevent default form submission

  const nameFlag = validateName();
  const phoneFlag = validatePhone();
  const emailFlag = validateEmail();
  const messageFlag = validateMessage();

  if (!nameFlag || !phoneFlag || !emailFlag || !messageFlag) {
    submitButton.innerHTML = "Please fix errors before submitting.";
    setTimeout(() => {
      submitButton.innerHTML = "";
    }, 3000);
    return false;
  }

  submitButton.innerHTML = "Form Submitted Successfully!";
  return true;
};
