// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount = 12;

var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnoqrstuvwxyz";
var numberChars = "1234567890";
var specialChars= "!@#$%&";
var allChars= uppercaseChars + lowercaseChars + numberChars + specialChars;
// console.log(allChars);



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
var allChars= uppercaseChars + lowercaseChars + numberChars + specialChars;
var randPasswordArray = Array()
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = uppercaseChars;
  randPasswordArray[2] = lowercaseChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
};
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  return array;
};

console.log(randPasswordArray);
     
  
  
    // HINT: Remember that a for-loop can iterate from a starting number to a ending number, 
    // such as the number of characters in a password.
  
    // HINT: You may want to look into merging arrays together
  
  
    
  
    // HINT: Remember that a for-loop can iterate from a starting number to a ending number, 
    // such as the number of characters in a password.
  
    // HINT: You may want to look into merging arrays together
//   }
// console.log(finalResult)
//   return finalResult;
// }

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();
  askAboutLowercase();
  askAboutNumber();
  askAboutSpecials();




  var password = generatePassword();
  // var passwordText = document.getElementById("#password");
  // passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);{

}


