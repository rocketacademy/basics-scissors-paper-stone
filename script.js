// add feature to collect user name
var currentGameMode = "waiting for user name";
var userName = "";
var numOfTries = 0;
var winCount = 0;
var lossCount = 0;
var drawCount = 0;

// Function to generate random number from 1 to 3 because there are 3 options - scissors, paper, stone
var generateRandomInteger = function () {
  // Generate a decimal from 0 to 3, inclusive of 0 and 3
  var randomDecimal = Math.random() * 3;
  // Floor that decimal to the nearest integer and + 1 so we get 1 to 3
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Function to define each option
var generateRandomOption = function () {
  var randomInteger = generateRandomInteger();

  // define each option in the game
  var OPTION_SCISSORS = "scissors";
  var OPTION_PAPER = "paper";
  var OPTION_STONE = "stone";

  if (randomInteger == 1) {
    return OPTION_SCISSORS;
  }

  if (randomInteger == 2) {
    return OPTION_PAPER;
  }

  if (randomInteger == 3) {
    return OPTION_STONE;
  }
  // if we reach this line, randomOption was invalid, but should be okay because the range of integers is fixed from 1 to 3
  return "Oops, there was a bug!";
};

// Lay out all the different scenarios in the main function
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for user name") {
    userName = input;

    // switch modes after we got the user name
    currentGameMode = "game begins";
    myOutputValue = `Thank you, ${userName}, you may now input 'scissors', 'paper' or 'stone' to play the game.`;
  } else if (currentGameMode == "game begins") {
    var computerOption = generateRandomOption();
    numOfTries = numOfTries + 1;

    if (input == "scissors" && computerOption == "scissors") {
      drawCount = drawCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✌ <br>
    ${userName} chose ${input} ✌ <br>
    It's a draw! 😐 <br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "scissors" && computerOption == "paper") {
      winCount = winCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✋<br>
    ${userName} chose ${input} ✌ <br>
    ${userName} wins! 😀<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "scissors" && computerOption == "stone") {
      lossCount - lossCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✊<br>
    ${userName} chose ${input} ✌ <br>
    ${userName} loses! 😓<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "paper" && computerOption == "scissors") {
      lossCount = lossCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✌<br>
    ${userName} chose ${input} ✋ <br>
    ${userName} loses! 😓<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "paper" && computerOption == "paper") {
      drawCount = drawCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✋<br>
    ${userName} chose ${input} ✋ <br>
    It's a draw! 😐<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "paper" && computerOption == "stone") {
      winCount = winCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✊<br>
    ${userName} chose ${input} ✋ <br>
    ${userName} wins! 😀<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "stone" && computerOption == "scissors") {
      winCount = winCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✌<br>
    ${userName} chose ${input} ✊ <br>
    ${userName} wins! 😀<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "stone" && computerOption == "paper") {
      lossCount = lossCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✋<br>
    ${userName} chose ${input} ✊ <br>
    ${userName} loses! 😓<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input == "stone" && computerOption == "stone") {
      drawCount = drawCount + 1;
      myOutputValue = `The computer chose ${computerOption} ✊<br>
    ${userName} chose ${input} ✊ <br>
    It's a draw! 😐<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
      return myOutputValue;
    }

    if (input != "stone" && input != "scissors" && input != "paper") {
      numofTries = numOfTries - 1;
      myOutputValue = `Sorry, there are only 3 input options:<br>
    'scissors' ✌ <br>
    'paper' ✋<br> 
    'stone' ✊ <br> 
    Please try again, ${userName}! 😉<br><br>
    So far, ${userName}, you have played ${numOfTries} times. <br>
    You have won ${winCount} times, <br>
    lost ${lossCount} times, <br>
    and have drawn ${drawCount} times.`;
    }
  }
  return myOutputValue;
};
