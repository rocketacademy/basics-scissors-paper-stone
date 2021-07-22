//git add (script.js)
//git commit -m (comment of what changes you added)
//add the new changes to github, git push origin master
//$ git push https://github.com/quahzhengjie/basics-scissors-paper-stone.git

//Base
// Basic Scissors Paper Stone
// Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
//Number of outcomes:
//var input = output return draw
// Scissors Paper Stone Generator (for the computer's ouput):
// Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
// Input Validation
// Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.
// This means that if the player inputs anything other than SPS, prompt wrong input.
//extra : GLOBAL FUNCTION
// var papayaCount = 0;
// var main = function (input) {
//   papayaCount = papayaCount + 1;
//   var myOutputValue = 'You have ' + papayaCount + ' papayas';
//   return myOutputValue;
//};

//FLOW OF CODE

//1. Default Output = YOU LOSE
//2. Create helper function of SPS
// How?
// directing the com to understand what is the input, and how the computer is getting the number

//MAIN.

//a. Number Generator, assign a number to a (SPS)var

//HELPER FUNCTION TO MAKE COMPUTER OUTPUT GENERATOR
var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

var ComputerOutput = function () {
  var randomNum = Math.floor(Math.random() * 3);
  //IF 0, ASSIGNED 0 = SCISSORS
  if (randomNum == 0) {
    return SCISSORS;
  }
  //IF 1
  if (randomNum == 1) {
    return PAPER;
  }
  //ELSE IF
  return STONE;
};

//b. List possible outcomes (wins/loss)
//CREATE A HELPER FUNCTION FOR EACH OUTCOMES. A. WIN/B. LOSE/ Draw

var COM = ComputerOutput();
console.log("Computer Object is " + COM);

//WIN Function (COMPUTATIONS)
var PlayerWINS = function (input, COM) {
  return (
    (input == SCISSORS && COM == PAPER) ||
    (input == PAPER && COM == STONE) ||
    (input == STONE && COM == SCISSORS)
  );
};

//Lose FN
var PlayerLOSES = function (input, COM) {
  return (
    (input == PAPER && COM == SCISSORS) ||
    (input == STONE && COM == PAPER) ||
    (input == SCISSORS && COM == STONE)
  );
};
// draw function

var PlayerDRAWS = function (input, COM) {
  return (input = COM);
};
//Main (Determines OUTPUT - with Helper Fn)
var main = function (input) {
  //Input Validation
  if (input != SCISSORS && input != PAPER && input != STONE) {
    return "you failed";
  }

  // if (input != "scissors" && input != "paper" && input != "stone");
  // {
  //   return "Your input is invalid, kindly enter scissors paper or stone.";
  // }
  // if (PlayerWINS(PlayerInput, COM)) {
  //   return "yay";
  // }
  // PlayerLOSES(PlayerInput, COM);
  // return "you lose";
};
//git add (script.js)
//git commit -m (comment of changes added)
//add the new changes to github, git push origin master
//$ git push https://github.com/quahzhengjie/basics-scissors-paper-stone.git
