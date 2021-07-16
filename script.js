// Project 01 - scissors paper Stone
// Create User input of scissors, paper, Stone
// Create a function to counter Users' input VS Computer Input
// Computer randomly select 1 of the 3
// Showing Result of either "Win" ,"Draw", "Lose"
// Show Error and retype to Users who type other than the 3 words.

// Create a function for Users to type within the 3 words

// Create User Input and Function <-- This is redundant
// var userOption = function (input) {
//   var userInput = toLowerCase(input);
//   if (userInput == "scissors") {
//     var myOutputValue = "scissors";
//   } else if (userInput == "paper") {
//     var myOutputValue = "paper";
//   } else if (userInput == "rock") {
//     var myOutputValue = "rock";
//   }
//   return myOutputValue;
// };

// Function AI VS User Input
// Draw Functions <-- have become Redundent :(
// var outcomeDrawResult = function (){
//   if (input == (comOptions == 0)) {
//     var myOutputValue = "Draw";
//   } else if (input == (comOptions == 1)) {
//     var myOutputValue = "Draw"
//   } else if (input == (comOptions == 2)) {
//     var myOutputValue = "Draw";
//   }
//   return myOutputValue;
// };

// Condition:
// User pick scissors, Computer picks paper, User WIN
// User pick scissors, Computer picks rock, Computer WIN
// User pick paper, Computer picks rock, User WIN
// User pick paper, Computer picks scissors, Computer WIN
// User pick Stone, Computer picks scissors, User WIN
// User pick Stone, Computer picks paper, Computer WIN

// User pick scissors VS Computer picks paper, scissors, rock
// var userPickS = function (input) {
//   if (input == "scissors" && comOptions == 1) {
//     var myOutputValue = "User WINS!";
//   } else if (input == "scissors" && comOptions == 2) {
//     var myOutputValue = "Computer WINS!";
//   } else if (input == "scissors" && comOptions == 0) {
//     var myOutputValue = "DRAW!";
//   }
//   return myOutputValue;
// };

// User pick paper VS Computer picks paper, scissors, rock
// var userPickP = function (input) {
//   if (input == "paper" && comOptions == 1) {
//     var myOutputValue = "DRAW!";
//   } else if (input == "paper" && comOptions == 2) {
//     var myOutputValue = "User WINS!";
//   } else if (input == "paper" && comOptions == 0) {
//     var myOutputValue = "Computer WINS!";
//   }
//   return myOutputValue;
// };

// User pick rock VS Computer picks paper, scissors, rock
// var userPickR = function (input) {
//   if (input == "rock" && comOptions == 1) {
//     var myOutputValue = "Computer WINS!";
//   } else if (input == "rock" && comOptions == 2) {
//     var myOutputValue = "DRAW";
//   } else if (input == "rock" && comOptions == 0) {
//     var myOutputValue = "User WINS!";
//   }
//   return myOutputValue;
// };

// Function for AI to have a random Math to select the word
var aiOptions = function () {
  var comOptions = Math.floor(Math.random() * 3);
  console.log(comOptions);
  if (comOptions == 0) {
    var myOutputValue = "scissors";
  } else if (comOptions == 1) {
    var myOutputValue = "paper";
  } else if (comOptions == 2) {
    var myOutputValue = "rock";
  }
  return myOutputValue; // Return a value
};

// User pick VS Computer Pick
var userPick = function (input) {
  var comOptions = aiOptions();
  var userOption = input.toLowerCase();
  console.log(input, comOptions);
  if (userOption == "rock" && comOptions == "paper") {
    var myOutputValue = "Computer WINS!";
  } else if (userOption == "rock" && comOptions == "scissors") {
    var myOutputValue = "User WINS!";
  } else if (userOption == "scissors" && comOptions == "paper") {
    var myOutputValue = "User WINS!";
  } else if (userOption == "scissors" && comOptions == "rock") {
    var myOutputValue = "Computer WINS!";
  } else if (userOption == "paper" && comOptions == "rock") {
    var myOutputValue = "User WINS!";
  } else if (userOption == "paper" && comOptions == "scissors") {
    var myOutputValue = "Computer WINS!";
  } else if (userOption == comOptions) {
    var myOutputValue = "DRAW!";
  } else {
    return (myOutputValue = "Please type again, only scissors, paper or rock.");
  }
  return myOutputValue;
};

// Showing them together

var main = function (input) {
  var myOutputValue = userPick(input);
  return myOutputValue;
};
