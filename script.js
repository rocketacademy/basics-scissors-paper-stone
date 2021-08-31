//Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw. Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var numWin = 0
var numLoss = 0
var main = function (input) {

  console.log(input)
  var randomNumvariable = randomNumGenerator ()
  var SPSChoice = SPSChoiceGenerator(randomNumvariable)
  var outcome = ShowHands (input, SPSChoice)
  console.log (numWin)
  console.log (numLoss)

  // default response if input is not recognised.
  var myOutputValue = "Please enter either 'rock', 'paper', or 'scissors' then click Submit to play";
 
  // the program outputs whether the user won, the program won, or it's a draw.

  //optional: remove if blocks from line 16 out of main body. 
  if (outcome == "draw") {
    myOutputValue = 
    "You entered " + 
    input + 
    " and the program selected " +
    SPSChoice +
    " so it's a draw. Try again. Your win-lose record is " +
    numWin +
    "-" +
    numLoss;
  }

  if (outcome == "lose"){
    myOutputValue =
    "You entered " + 
    input + 
    " and the program selected " +
    SPSChoice +
    ", so you lose. Try again. Your win-lose record is " +
    numWin +
    "-" +
    numLoss;
  }

    if (outcome == "win"){
    myOutputValue =
    "You entered " + 
    input + 
    " and the program selected " +
    SPSChoice +
    ", so you win! Your win-lose record is " +
    numWin +
    "-" +
    numLoss;
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
var SPSChoiceGenerator = function (randomNum) {
  var randomNum = randomNumGenerator()
  console.log ("computer chose " + randomNum) 
  
  // default SPS choice is rock
 if (randomNum == 1) {
   SPSChoice = "rock"
   return "rock"
 }

  // if random number is 2, SPS choice (reasigned) is paper
  if (randomNum == 2) {
    SPSChoice =  "paper"
    return "paper"
  }
  
  // if random number is 3, SPS choice (reasigned) is scissors
  if (randomNum == 3) {
    SPSChoice = "scissors"
    return "scissors"
  }
    
  console.log ("which matches to " + SPSChoice)

}

// HELPER FUNCTION

// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

var ShowHands = function (input, SPSChoice){
  var input
  var SPSChoice
if (input == SPSChoice) {
  return "draw"
}

if (input == "rock" && SPSChoice == "paper") {
  numLoss = numLoss + 1
  return "lose"
}

if (input == "rock" && SPSChoice == "scissors") {
  numWin = numWin +1
  return "win"
}

if (input == "paper" && SPSChoice == "rock") {
   numWin = numWin +1
  return "win"
}

if (input == "paper" && SPSChoice == "scissors") {
  numLoss = numLoss + 1
  return "lose"
}

if (input == "scissors" && SPSChoice == "rock") {
  numLoss = numLoss + 1
  return "lose"
}

if (input == "scissors" && SPSChoice == "paper" ) {
   numWin = numWin +1
  return "win"
}

}