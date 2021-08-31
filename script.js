// overrides: reverse?
var gameMode = "waiting for username"; // can also be set to 'reverse' by user override
var username = "";
var playerScore = 0;
var computerScore = 0;
var drawScore = 0;

var moveSet = {
  1: "scissors",
  2: "paper",
  3: "stone", // every move beats the move below it.
};

var winSetNormal = {
  scissors: "paper",
  paper: "stone",
  stone: "scissors",
};

var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateComputerHandGesture = function () {
  var randomDigit = generateRandomInteger(3);
  console.log(randomDigit);
  var computerHandGesture = moveSet[randomDigit];
  console.log(moveSet[randomDigit]);
  return computerHandGesture;
};

// var formatReverseInput = function (reverseInput) {
//   // "reverse " contains 8 characters, ends at index 7
//   var newstr = reverseInput.slice(7);
//   console.log(`new string is: ${newstr}`);
//   return newstr;
// };

var playGame = function (input1, input2) {
  // input 1 and input 2 should be strings
  console.log("Starting game.");
  console.log(`Player: ${input1}`);
  console.log(`Computer: ${input2}`);
  var winner = "";

  if (gameMode == "normal") {
    if (input1 == winSetNormal[input2]) {
      computerScore += 1;
      winner = "Computer";
    } else if (input1 !== winSetNormal[input2]) {
      playerScore += 1;
      winner = "Player";
    } else if (input1 == input2) {
      drawScore += 1;
      winner = "Nobody";
    }
  }
  console.log(`Winner: ${winner}`);
  console.log("Ending Game.");
  return winner;
};

var inputValidate = function (inputText) {
  // initializes game mode too
  if (inputText == "scissors" || inputText == "paper" || inputText == "stone") {
    console.log("normal mode started");
    gameMode = "normal";
    return true;
  }
  if (
    inputText == "reverse scissors" ||
    inputText == "reverse paper" ||
    inputText == "reverse stone"
  ) {
    gameMode = "reverse";
    console.log("reverse mode activated.");
    return true;
  }
  return false;
};

var printOutput = function (gest1, gest2, winner) {
  var output =
    `You played: ${gest1}. The computer played: ${gest2}. ${winner} won!` +
    "<br><br>" +
    `You have won ${playerScore} games. The Computer has won ${computerScore} games.` +
    "<br><br>" +
    `There were ${drawScore} ties.`;
  return output;
};

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "waiting for username") {
    username = input;
    gameMode = "normal";
    myOutputValue = `Hello ${username}!`;
  } else if (gameMode == "normal" || gameMode == "reverse") {
    var validation = inputValidate(input);
    if (validation == false) {
      return "Invalid Input. Please type only scissors, paper, or stone, and try again.";
    }
    var gesture1 = input;
    var gesture2 = generateComputerHandGesture();
    var winner = playGame(gesture1, gesture2);
    myOutputValue = printOutput(gesture1, gesture2, winner);
  }
  return myOutputValue;
};
