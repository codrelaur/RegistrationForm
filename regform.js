//declare global html elements selection
const birthdayDay = document.querySelector(".date-of-birth-row #Birthday_Day");
const birthdayMonth = document.querySelector(
  ".date-of-birth-row #Birthday_Month"
);
const birthdayYear = document.querySelector(
  ".date-of-birth-row #Birthday_Year"
);
const firstName = document.querySelector(".first-name-row input");
const lastName = document.querySelector(".last-name-row input");
const dateOfBirth = document.querySelector(".date-of-birth-row select");
const email = document.querySelector(".email-row input");
const mobileNumber = document.querySelector(".mobile-number-row input");
const gender = document.querySelector(".gender-row input");
const adress = document.querySelector(".address-row textarea");
const city = document.querySelector(".city-row input");
const pinCode = document.querySelector(".pin-code-row input");
const state = document.querySelector(".state-row input");
const country = document.querySelector(".country-row input");
const hobbies = document.querySelector(".hobbies-row input");
const otherHobbiesCheckbox = document.querySelector(".otherHobbiesCheckbox");
const otherHobbiesInputText = document.querySelector(".otherHobbiesInputText");
const courses = document.querySelector(".courses-row input");
const submit = document.querySelector("input[type='button']");
const reset = document.querySelector("input[type = 'reset']");
const registrationSuccess = document.querySelector(".success-registration");
const failValidation = document.querySelector(".validation-text");
const success = document.querySelector(".fa-solid .fa-check-circle");
const error = document.querySelector(".fa-solid .fa-exclamation-circle");
const tr = document.querySelectorAll("tr input select textarea");
const letters = /^[A-Za-z]+$/;

//implement listener function for DOM loading and use your functions and methods
document.addEventListener("DOMContentLoaded", formSubmit);

function formSubmit() {
  submit.addEventListener("click", checkInputs);
  reset.addEventListener("click", resetButton);
  otherHobbiesCheckbox.addEventListener("click", handleOtherHobbiesInput);
}
//implement clearing listeners (onunload)
window.onunload = function () {
  document.removeEventListener("click");
  document.removeEventListener("submit");
  document.removeEventListener("DOMContentLoaded");
  return;
};
//implement your functions

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const birthdayDayValue = birthdayDay.value;
  const birthdayMonthValue = birthdayMonth.value;
  const birthdayYearValue = birthdayYear.value;
  const dateOfBirthValue =
    birthdayDayValue + birthdayMonthValue + birthdayYearValue;
  const emailValue = email.value.trim();
  const mobileNumberValue = mobileNumber.value;
  const genderValue = gender.value;
  const adressValue = adress.value;
  const cityValue = city.value.trim();
  const pinCodeValue = pinCode.value.trim();
  const stateValue = state.value.trim();
  const countryValue = country.value.trim();
  const hobbiesValue = hobbies.value;
  const coursesValue = courses.value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  letterLengthValidation(firstNameValue, firstName);
  letterLengthValidation(lastNameValue, lastName);
  if (!birthdayDayValue) {
    setErrorFor(birthdayDay);
  } else if (birthdayDayValue) setSuccesFor(birthdayDay);
  if (!birthdayMonthValue) {
    setErrorFor(birthdayMonth);
  } else if (birthdayMonthValue) setSuccesFor(birthdayMonth);
  if (!birthdayYearValue) {
    setErrorFor(birthdayYear);
  } else if (birthdayYearValue) setSuccesFor(birthdayYear);

  if (emailValue.match(pattern)) {
    setSuccesFor(email);
  } else setErrorFor(email);

  if (mobileNumberValue.length != 10 || isNaN(mobileNumberValue)) {
    setErrorFor(mobileNumber);
  } else setSuccesFor(mobileNumber);

  if (!gender.checked) {
    setErrorFor(gender);
  } else setSuccesFor(gender);

  if (adressValue === "") {
    setErrorFor(adress);
  } else setSuccesFor(adress);
  letterLengthValidation(cityValue, city);
  if (pinCodeValue.length != 6 || isNaN(pinCodeValue)) {
    setErrorFor(pinCode);
  } else setSuccesFor(pinCode);
  letterLengthValidation(stateValue, state);

  if (!countryValue) {
    setErrorFor(country);
  } else setSuccesFor(country);

  // if (
  //   (!hobbies.checked && otherHobbiesCheckbox.checked) ||
  //   letterLengthValidation(otherHobbiesInputText.value, otherHobbiesInputText)
  // ) {
  //   letterLengthValidation(otherHobbiesInputText.value, otherHobbiesInputText);
  //   setSuccesForHobbies(hobbies);
  // } else if (hobbies.checked && !otherHobbiesCheckbox.checked) {
  //   setSuccesFor(hobbies);
  // } else setErrorFor(hobbies);

  if (!courses.checked) {
    setErrorFor(courses);
  } else setSuccesFor(courses);

  if (
    setSuccesFor(firstName) &&
    setSuccesFor(lastName) &&
    birthdayDayValue &&
    birthdayMonth &&
    birthdayYear &&
    emailValue.match(pattern) &&
    setSuccesFor(mobileNumber) &&
    setSuccesFor(adress) &&
    setSuccesFor(pinCode) &&
    countryValue &&
    courses.checked
  ) {
    failValidation.classList.remove("show");
    registrationSuccess.classList.add("show");
  }
}
function setErrorFor(input) {
  failValidation.classList.add("show");
  const tableRow = input.closest("tr");
  const label = tableRow.querySelector("label");
  const errorIcon = tableRow.querySelector(".fa-solid.fa-exclamation-circle");
  const successIcon = tableRow.querySelector(".fa-solid.fa-check-circle");
  successIcon.style.visibility = "hidden";
  label.style.color = "red";
  errorIcon.style.visibility = "visible";
  input.style.border = "5px groove red";
  return false;
}

function setSuccesFor(input) {
  const tableRow = input.closest("tr");
  const label = tableRow.querySelector("label");
  const successIcon = tableRow.querySelector(".fa-solid.fa-check-circle");
  const errorIcon = tableRow.querySelector(".fa-solid.fa-exclamation-circle");
  errorIcon.style.visibility = "hidden";
  label.style.color = "green";
  successIcon.style.visibility = "visible";
  input.style.border = "5px groove green";
  return true;
}
function setErrorForHobbies(input) {
  const tableRow = input["tr"];
  const label = tableRow.querySelector("label");
  const successIcon = tableRow.querySelector(".fa-solid.fa-check-circle");
  const errorIcon = tableRow.querySelector(".fa-solid.fa-exclamation-circle");
  errorIcon.style.visibility = "hidden";
  label.style.color = "green";
  successIcon.style.visibility = "visible";
  input.style.border = "5px groove green";
}
function setSuccesForHobbies(input) {
  const tableRow = input["tr"];
  const label = tableRow.querySelector("label");
  const successIcon = tableRow.querySelector(".fa-solid.fa-check-circle");
  const errorIcon = tableRow.querySelector(".fa-solid.fa-exclamation-circle");
  errorIcon.style.visibility = "hidden";
  label.style.color = "green";
  successIcon.style.visibility = "visible";
  input.style.border = "5px groove green";
}
function resetButton() {
  firstNameValue = "";
  lastNameValue = "";
  birthdayDayValue = "";
  birthdayMonthValue = "";
  birthdayYearValue = "";
  dateOfBirthValue = "";
  emailValue = "";
  mobileNumberValue = "";
  genderValue = "";
  adressValue = "";
  cityValue = "";
  pinCodeValue = "";
  stateValue = "";
  countryValue = "";
  //hobbiesValue.disabled = true;
  coursesValue = "";
  // errorIcon.style.visibility = "hidden";
  //successIcon.style.visibility = "hidden";
}
function letterLengthValidation(value, element) {
  if (!value.match(letters) || value.length <= 5 || value.length >= 30) {
    setErrorFor(element);
  } else setSuccesFor(element);
}
function handleOtherHobbiesInput() {
  if (otherHobbiesCheckbox.checked !== true) {
    otherHobbiesInputText.disabled = true;
  } else otherHobbiesInputText.disabled = false;
}
function showSuccessValidationText() {
  if (tr) {
    registrationSuccess.classList.add("show");
  }
}
