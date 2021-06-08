// Create Scissors Paper Stone Game with User Name Inclusion

// Create global variable to track user and computer win as well as no of draws
var userWin = 0;
var compWin = 0;
var draws = 0;

// Create game mode variable to 1. take in user name as input 2. switch to SPS hame
var gameMode = "waiting for user to enter name";
// Create username variable to take in user's input
var userName = "";

// Create function which generates random number
var generateRandomNum = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// Create function where randomly generated number is assigned to one of the 3 options
var assignNumToOptions = function () {
  // Call random number function into assigment function
  var randomNum = generateRandomNum();
  if (randomNum == 1) {
    var programOutput = "scissors";
  }
  if (randomNum == 2) {
    programOutput = "paper";
  }
  if (randomNum == 3) {
    programOutput = "stone";
  }
  return programOutput;
};

var main = function (input) {
  // Call function which generates computer's choice into main function
  var computerChoice = assignNumToOptions();
  // Create default statement
  var myOutputValue = "";
  // Create condition where user loses
  // Take in username
  if (gameMode == "waiting for user to enter name") {
    userName = input;
    myOutputValue = `Hello ${userName}! <br> Are you ready to play? <br> You can play by entering either: <br> <br> ✂️ scissors  <br><br>🧻 paper  <br><br> 🗿 stone `;
    // Switch to SPS game
    gameMode = "SPS";
  } else if (gameMode == "SPS") {
    if (
      (input == "scissors" && computerChoice == "stone") ||
      (input == "paper" && computerChoice == "scissors") ||
      (input == "stone" && computerChoice == "paper")
    ) {
      // Update value of global variable for computer win count
      compWin = compWin + 1;
      // Create variable which outputs user win percentage
      var winPercentage = (userWin / (userWin + compWin + draws)) * 100;
      myOutputValue = `Sorry ${userName}, you lost! 😿 <br> You chose ${input} <br>  The computer chose ${computerChoice} <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br> <br>Please try again! ✂️🧻🗿`;
    }

    // Create condition where scissors beats paper and user wins
    // Create condition where paper beats stone and user wins
    // Create condition where stone beats scissors and user wins
    if (
      (input == "scissors" && computerChoice == "paper") ||
      (input == "paper" && computerChoice == "stone") ||
      (input == "stone" && computerChoice == "scissors")
    ) {
      // Update value of global variable for user win count
      userWin = userWin + 1;
      // ?Call win percentage variable into winning conditional
      winPercentage = (userWin / (userWin + compWin + draws)) * 100;
      myOutputValue = `Congratulations ${userName}, you won! 😁 <br> You chose ${input} <br> The computer chose ${computerChoice}. <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%.  <br> <br>Wanna try again? ✂️🧻🗿`;
    }
    // Create condition where input = program output and result is a draw
    if (input == computerChoice) {
      // Update value of global variable for draws count
      draws = draws + 1;
      // ?Call win percentage variable into winning conditional
      winPercentage = (userWin / (userWin + compWin + draws)) * 100;
      myOutputValue = `Darn ${userName}, it's a draw! 😡 <br> You chose ${input} <br> The computer chose the same! <br> You've won: ${userWin} times. <br> The computer has won ${compWin} times. <br> You have drawn: ${draws} times. <br> Your win percentage is ${winPercentage}%. <br><br> Please try again! ✂️🧻🗿`;
    }
    // If user types anything other than "scissors", "paper" or "stone", inform them that only these 3 words are vaild options
    if (input != "scissors" && input != "paper" && input != "stone") {
      myOutputValue = `Sorry ${userName}, you entered an invalid option! 😅 <br> Please enter one of the following options: <br> <br> ✂️ scissors  <br><br>🧻 paper  <br><br> 🗿 stone `;
    }
  }
  return myOutputValue;
};
