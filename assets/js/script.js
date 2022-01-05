// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//criteria
var numbers = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "~!@#$%^&*()_+{}:?><;.,";
var password = "";
var emptyPassword = "";

function generatePassword() {
  // length prompt
  var promptLength = window.prompt(
    "Please choose a password length of at least 8 characters but no more than 128 characters."
  );

  if (promptLength >= 8 && promptLength <= 128) {
    console.log(promptLength);
  } else {
    alert(
      "You must provide a password length of at least 8 characters but no more than 128 characters."
    );
  }
  // lowercase prompt
  var promptLowercase = window.confirm(
    "Do you want to use lowercase letters in your password?"
  );
  // uppercase prompt
  var promptUppercase = window.confirm(
    "Do you want to use uppercase letters in your password?"
  );
  // numerals prompt
  var promptNumerals = window.confirm(
    "Do you want to use numerals in your password?"
  );
  // special characters prompt
  var promptCharacters = window.confirm(
    "Do you want to use special characters in your password?"
  );

  if (promptLowercase) {
    emptyPassword += lowerCase;
  }

  if (promptUppercase) {
    emptyPassword += upperCase;
  }

  if (promptNumerals) {
    emptyPassword += numbers;
  }

  if (promptCharacters) {
    emptyPassword += specialCharacters;
  }
  // if none of the above criteria are chosen, alert user and start function over
  if (
    !promptLowercase &&
    !promptUppercase &&
    !promptNumerals &&
    !promptCharacters
  ) {
    alert(
      "Please select at least one criteria (lowercase, uppercase, numerals, or special characters)."
    );
    return generatePassword();
  }
  for (var i = 0; i < promptLength; i++) {
    password += emptyPassword[Math.floor(Math.random() * emptyPassword.length)];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
