// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//function to generate password
function generatePassword() {
  //promt for password criteria
  let length = parseInt(prompt(` Enter the length of your desired password:
  Password Length betweeen 8 - 128 characters.` ));
  let includeUpperCase = confirm('Include Uppercase Letters?');
  let includeLowerCase = confirm('Include Lowercase letters?');
  let includeNumbers = confirm('Include Numbers?');
  let includeSpecialChars = confirm('Include Special Characters?');

  var password = "";
  var characterSet = "";

  //define characters set based on password criteria
  if (includeUpperCase) {
    characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowerCase) {
    characterSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers){
    characterSet += "0123456789";
  }
  if (includeSpecialChars){
    characterSet += "!@#$%^&*()-_=+[]{}<>,.?/:;";
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


//pseudo coding
/*
1. when we click on generate button
2. a series of prompt will be presented for password criteria.
3. when prompt for the length of password, than we must choose the the lenght of passord between 8 - 128         characters.
4.than confirm wether or not to include lowercase, uppercase, numeric , and /or special characters.
5. at one character type should be selected.
6. than a password is generted that match the criteria.
than the password is either displayed in alert or written the page.




*/