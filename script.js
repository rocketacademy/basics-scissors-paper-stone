//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var main = function (input) {
  console.log(input)
  var SPSChoice = SPSChoiceGenerator()
  var outcome = ShowHands (input, SPSChoice)
  
  // default response if input is not recognised.
  var myOutputValue = "Please enter either 'rock', 'paper', or 'scissors' then click Submit to play";
 
  // the program outputs whether the user won, the program won, or it's a draw.
  if (outcome == "draw") {
    myOutputValue = 
    "You entered " + 
    input + 
    " and the program selected " +
    SPSChoice +
    " so it's a draw. Try again."
  }

  if (outcome == "lose"){
    myOutputValue =
    "You entered " + 
    input + 
    " and the program selected " +
    SPSChoice +
    ", so you lose. Try again."
  }
  
  return myOutputValue;
 
};

// input 1-3
var randomNumGenerator = function () {
  var randomDecimal = Math.random () * 3;
  var randomNumber = Math.ceil(randomDecimal) ;
  return randomNumber
} 

// output choice: rock (default), paper, scissors 
var SPSChoiceGenerator = function () {
  var randomNum = randomNumGenerator()
  console.log ("computer chose " + randomNum) 
  
  // default SPS choice is rock
  var SPSChoice = "rock"

  // if random number is 2, SPS choice (reasigned) is paper
  if (randomNum == 2) {
    SPSChoice =  "paper"
  }
  
  // if random number is 3, SPS choice (reasigned) is scissors
  if (randomNum == 3) {
    SPSChoice = "scissors"
  }
    
  console.log ("which matches to " + SPSChoice)
  return SPSChoice 
}

// HELPER FUNCTION

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var ShowHands = function (input, SPSChoice){
if (input == "rock" && SPSChoice == "rock") {
  myOutputValue = "it's a draw!"
}

if (input == "rock" && SPSChoice == "paper") {
  myOutputValue = "you lose!"
}

if (input == "rock" && SPSChoice == "scissors") {
  myOutputValue = "you win!"
}

if (input == "paper" && SPSChoice == "rock") {
  myOutputValue = "you win!"
}

if (input == "paper" && SPSChoice == "paper") {
  myOutputValue = "it's a draw!"
}

if (input == "paper" && SPSChoice == "scissors") {
  myOutputValue = "you lose!"
}

if (input == "scissors" && SPSChoice == "rock") {
  myOutputValue = "you lose!"
}

if (input == "scissors" && SPSChoice == "paper" ) {
  myOutputValue = "you win!"
}

if (input == "scissors" && SPSChoice == "scissors" ) {
  myOutputValue = "it's a draw!"
}


// Determines if player won or not
//var winorLose = function (input, SPSChoice) {
  // Default outcome is "lose"
  //var outcome = "lose"  
  // If input is same as SPS choice then it's a draw
  //if (input == SPSChoice) {
  //  var outcome = "draw"
  //}
  //console.log (outcome)
 // return outcome
}