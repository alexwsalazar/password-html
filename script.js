// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount = 12;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowercaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"];
var numberChars = [1,2,3,4,5,6,7,8,9,0];
var specialChars= ["!","@","#","$","%","&"];
var allChars= (uppercaseChars) + (lowercaseChars) + (numberChars) + (specialChars);

function chooseRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

function askAboutLowercase(){
  allowLowerCase= confirm("Are lower case cahracters allowed?");
  console.log(allowLowerCase)
}

function askAboutNumber(){
  allowNumbers= confirm("Are number characters allowed?");
  console.log(allowNumbers)
}

function askAboutSpecials(){
  allowSpecials= confirm("Are special characters allowed");
  console.log(allowSpecials)
}

// Repeat for other criteria; for the number of characters, use a prompt statement. 
// Google it. NOTE: prompt statements think any value you provide is a string. 
// You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. 
// You can create other functions also if you need them.

function generatePassword(){
  var finalResult = [];
  for (var i = 0; i < 1; i++){
    var randomString = "";
     passwordCharacterCount;    // ex: 8 characters
    for( z=1; z< 12; z++ ){
      var randomIdx = chooseRandomNumber(0, allChars.length -1);
      var allChar = allChars[randomIdx];
      randomString += allChar;
    }
  
    finalResult.push(randomString);
  
    // HINT: Remember that a for-loop can iterate from a starting number to a ending number, 
    // such as the number of characters in a password.
  
    // HINT: You may want to look into merging arrays together
  
  
    
  
    // HINT: Remember that a for-loop can iterate from a starting number to a ending number, 
    // such as the number of characters in a password.
  
    // HINT: You may want to look into merging arrays together
  }
console.log(finalResult)
  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumber();
  askAboutSpecials();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


