// overrides: reverse?
var gameMode = "normal"; // can also be set to 'reverse' by user override

var moveSet = {
  1: "scissors",
  2: "paper",
  3: "stone", // every move beats the move below it. if key1-key2 = -1 or +2, player wins in normal mode
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
  var winner = "Computer";

  if (gameMode == "normal") {
    if (input1 == input2) {
      winner = "Nobody";
    }
    if (input1 == winSetNormal[input2]) {
      winner = "Player";
    }
    return winner;
  }
};

//   var score1 = moveSet[input1];
//   var score2 = moveSet[input2];
//   score = score1 - score2;
//   console.log(`Player MK: ${score1}. Computer MK: ${score2}.`);
//   console.log(`score: ${score}`);

//   if (gameMode == "normal") {
//     if (score == -1 || score == 2) {
//       winner = "Player";
//     }
//   }
//   if (gameMode == "reversed") {
//     //i.e. reversed mode
//     if (score == 1 || score == -2) {
//       winner = "Player";
//     }
//   } else {
//     winner = "Computer";
//   }
//   console.log(gameMode);
//   console.log(`Winner is ${winner}. Ending game.`);
//   return winner;
// };

// var winDecider = function (handGesture1, handGesture2) {
//   // handgesture1 is user input
//   console.log(`player's choice is: ${handGesture1}`);
//   if (gameMode == "normal") {
//     if (
//       (handGesture1 == "scissors" && handGesture2 == "paper") ||
//       (handGesture1 == "paper" && handGesture2 == "stone") ||
//       (handGesture1 == "stone" && handGesture2 == "scissors")
//     ) {
//       console.log("player wins");
//       return "Player";
//     }
//   }
//   // new ruleset for reverse mode
//   if (gameMode == "reverse") {
//     if (
//       (handGesture1 == "reverse scissors" && handGesture2 == "stone") ||
//       (handGesture1 == "reverse paper" && handGesture2 == "scissors") ||
//       (handGesture1 == "reverse stone" && handGesture2 == "paper")
//     ) {
//       console.log("player wins");
//       return "Player";
//     }
//     if (
//       (handGesture1 == "reverse scissors" && handGesture2 == "scissors") ||
//       (handGesture1 == "reverse paper" && handGesture2 == "paper") ||
//       (handGesture1 == "reverse stone" && handGesture2 == "stone")
//     ) {
//       console.log("draw");
//       return "Draw";
//     }
//   }

//   if (handGesture1 == handGesture2) {
//     console.log("draw");
//     return "Draw";
//   } else {
//     console.log("computer wins");
//     return "Computer";
//   }
// };

var inputValidate = function (inputText) {
  if (inputText == "scissors" || inputText == "paper" || inputText == "stone") {
    console.log("normal mode started");
    return true;
  }
  if (
    inputText == "reverse scissors" ||
    inputText == "reverse paper" ||
    inputText == "reverse stone"
  ) {
    reverseOverride = true;
    console.log("reverse mode activated.");
    return true;
  } else console.log("input invalid!");
  return false;
};

var printOutput = function (gest1, gest2, winner) {
  var output = `You played: ${gest1}. The computer played: ${gest2}. ${winner} won!`;
  return output;
};

var main = function (input) {
  var validation = inputValidate(input);
  if (validation == false) {
    return "Invalid Input. Please type only scissors, paper, or stone, and try again.";
  }
  var gesture1 = input;
  var gesture2 = generateComputerHandGesture();
  var winner = playGame(gesture1, gesture2);
  // var winner = winDecider(gesture1, gesture2);
  var myOutputValue = printOutput(gesture1, gesture2, winner);
  return myOutputValue;
};
