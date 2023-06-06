// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to generate password
function generatePassword() {
  // Prompt for length
  let length = parseInt(prompt("Enter the length of your desired password (8 - 128 characters):"));
  
  // Check the length
  if (!length || length < 8 || length > 128) {
    alert(`   Invalid password length! 
    Please choose a length of your password between 8 and 128      characters.`);
    return "";
  }

  // Validating character type selection.
  let includeUpperCase = false;
  let includeLowerCase = false;
  let includeNumbers = false;
  let includeSpecialChars = false;
  let atLeastOneOptionSelected = false;

  while (!atLeastOneOptionSelected) {
    includeUpperCase = confirm("Include Uppercase Letters?");
    includeLowerCase = confirm("Include Lowercase Letters?");
    includeNumbers = confirm("Include Numbers?");
    includeSpecialChars = confirm("Include Special Characters?");

    if (includeUpperCase || includeLowerCase || includeNumbers || includeSpecialChars) {
      atLeastOneOptionSelected = true;
    } else {
      alert("At least one Character-type must be selected!");
    }
  }

  let characterSet = "";

  // Define character set based on password criteria
  if (includeUpperCase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowerCase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    characterSet += "0123456789";
  }
  if (includeSpecialChars) {
    characterSet += "!@#$%^&*()-_=+[]{}<>,.?/:;";
  }

  var password = "";
  for (let i = 0; i < length; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
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
