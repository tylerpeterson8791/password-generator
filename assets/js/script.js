// Assign Charachter Buckets, button selector, set beenGenerated to false and the allCharachter array to nothing
var generateBtn = document.querySelector("#generate");
var beenGenerated = false;
var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var allChar = []

//random number formula
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Write password to the #password input
function writePassword() {
  allChar = [];
  var password;
  var characterArray = [];
  var passwordText = document.querySelector("#password");
  //checking if length is too long, short or Not a Number
  var pwordLength = prompt(
    "How long do you want your password to be? (8-128 charachters)");
  pwordLength=Number(pwordLength)
//change pwordLength to a number.  THe prompt will see numbers as string.
  if (pwordLength < 8) {
    alert("That is too short.  Please choose a number between 8-128");
    return;
  }

  if (pwordLength > 128) {
    alert("That is too long.  Please choose a number between 8-128");
    return;
  }
//this is for if the user inputs something that's not a number.  Had to look this one up, super useful
  if (isNaN(pwordLength) === true) {
    alert("That is not a number.  Please try again.");
    return;
  }

  //Below checks which charachter types to include
  var includeLowerCase = confirm(
    "Do you want lowercase characters in your password?"
  );

  var includeUpperCase = confirm(
    "Do you want uppercase characters in your password?"
  );

  var includeNumerical = confirm("Do you want numeric characters in your password?");

  var includeSpecialChar = confirm("Do you want special characters in your password?");

if (includeLowerCase===false && includeUpperCase===false && includeNumerical===false && includeSpecialChar===false){
  alert("You need to select at LEAST ONE charachter type.  Try again");
    return;
}

///Need to spread arrays.  Was running into full Arrays.  Had to look this one up, super useful.
if (includeLowerCase) {
  allChar = [...allChar, ...lowerCaseArray]
}

if (includeUpperCase) {
  allChar = [...allChar, ...upperCaseArray]
}

if (includeNumerical) {
  allChar = [...allChar, ...numericalArray]
}

if (includeSpecialChar) {
  allChar = [...allChar, ...specialArray]
}
  var password = generatePassword(pwordLength);


  passwordText.value = password;

}


//generate the actual password
function generatePassword(pwordLength) {
  var actualPassword = ""

for (var i = 0; i < (pwordLength + 1); i++){
  var randomChar = allChar[random(0, allChar.length -1)]
actualPassword += randomChar;
}
return actualPassword
}


//Event
generateBtn.addEventListener("click", writePassword);
