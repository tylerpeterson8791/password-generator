// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Below the button.  Need a series of prompts (use confirm? Y/n style?)

//when looping through have option for "That is invalid input" and return

//Choose a length from 8-128 Long (needs to be prompt)

//Ask for charachter types to include {Uppercase, lowercase, number, special charachters}  Do this individually?  Can I have a radio prompt?  Could get messy as prompt.

//Integrate into output.  At least one charachter represented

//Password generated in alert and written on page (either/or but I'd like to have on page regardless) 

//Use randomizer "mathfloor" to generate password.  Figure out how to work in answers from prompts to set paramaters.  Have them pull from Arrays.
//
generateBtn.addEventListener("click", writePassword);
