//DiceRoll Function
//Declare constant
var scissors = `scissors`;
var paper = `paper`;
var stone = `stone`;
var reversedScissors = `reversed scissors`;
var reversedPaper = `reversed paper`;
var reversedStone = `reversed stone`;

var currentMode = `pending inputs`;
var userName = "";

//how do i update this in real time?
var userWins = 0;
var compWins = 0;
var trackwinloss = function (userWins, compWins) {
  // if (userWins == 0 || compWins == 0) {
  //   return `no one won`;
  // } else 
  if (userWins > compWins) {
    return `You win ${userWins - compWins} more than the computer`;
  } else if (userWins < compWins) {
    return `The computer wins ${compWins - userWins} more than you`;
  } else if (userWins == compWins) {
    console.log(`user and comp wins : ${(userWins, compWins)}`);
    return `you and the computer draw!`;
  }
};

var rollDice = function () {
  //determine max number here
  return Math.floor(Math.random() * 3) + 1;
};

// Define computer result.
var generateComputerResult = function () {
  var randomDiceNumber = rollDice();
  var computerPlays = "";
  if (randomDiceNumber == 1) {
    computerPlays = scissors;
    return computerPlays;
  }
  if (randomDiceNumber == 2) {
    computerPlays = paper;
    return computerPlays;
  }
  if (randomDiceNumber == 3) {
    computerPlays = stone;
    return computerPlays;
  }
  return computerPlays;
};


var generateStdMsg = function (userName, computerPlays, input, winloss){
 return `hi ${userName}, Computer: ${computerPlays}. <br> Your input: ${input}. <br> Win-loss tracker : ${winloss}<br>`;
};
var playNormalGame = function (input,computerPlays, standardMessage){
if (
  (input == scissors && computerPlays == paper) ||
  (input == paper && computerPlays == stone) ||
  (input == stone && computerPlays == scissors)
) {
  myOutputValue = `you win! <br>${standardMessage} Now you can type "scissors", "paper" or "stone" to play another round!`;
  userWins = userWins + 1;
  console.log("if statement", myOutputValue);
} else if (input == scissors || input == paper || input == stone) {
  myOutputValue = `you lose! <br> ${standardMessage} <br> Now you can type "scissors", "paper" or "stone" to play another round!`;
  compWins = compWins + 1;
  console.log("else if statement", computerPlays, input);
}
};
var playReversedGame = function (input,computerPlays)
{if ((input == reversedScissors && computerPlays ==  stone) ||
    (input == reversedPaper && computerPlays == scissors) ||
    (input == reversedStone && computerPlays == paper)
  ) {
    myOutputValue = `reversal! you won!`;
    userWins = userWins + 1;
  } else if (
    input == reversedScissors ||
    input == reversedPaper ||
    input == reversedStone
  ) {
    myOutputValue = `reversal! you lost!!`;
    compWins = compWins + 1;
  } else {
    myOutputValue = `Please input "scissors", "paper" or "stone".`;
    console.log("else statement", computerPlays, input);
  }
};


//main function
var main = function (input) {
  //Prevent caps errors
  input = input.toLowerCase();
  var myOutputValue = ``;

  var computerPlays = generateComputerResult();
  console.log("generateComputerResult function");
  console.log(computerPlays);
  var winloss = trackwinloss(userWins, compWins);

  var standardMessage = generateStdMsg (userName, computerPlays, input, winloss)
  //determine the game mode
  if (currentMode == `pending inputs`) {
    userName = input;
    // now that we have the name, switch the mode
    currentMode = "normal game mode";
    myOutputValue = "Hello " + userName;
    console.log (`current normal mode: ${currentMode}`)

  } else if (input =='reverse'){
    currentMode = 'reversed';
    console.log (`current mode: ${currentMode}`)
    myOutputValue = playReversedGame (input,computerPlays, standardMessage)
  } else if (currentMode == 'normal game mode'){
    myOutputValue = playNormalGame (input,computerPlays,standardMessage)
  }
  console.log("std msg" + computerPlays, input);

  return myOutputValue;
};
