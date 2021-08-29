var numOfTimesUserWon = 0;
var numOfTimesPcWon = 0;
var numOfDraws = 0;
var numOfGamesPlayed = 0;
var userName = "John Smith";
var nameCount = 0;

var main = function (userInput) {
  var myOutputValue = `Please enter your name to start the game`;
  // Store user's name into a variable after user has submitted name before the game starts
  if (nameCount == 0) {
    userName = userInput;
    nameCount = nameCount + 1;
  }

  // Inform user to start playing by entering either one of the 6 options
  if (nameCount == 1) {
    myOutputValue = `Welcome ${userName}! 👋<br ><br >Submit "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to start playing!`;
    nameCount = nameCount + 1;
    return myOutputValue;
  }

  // Run the game after user has input the name
  if (nameCount >= 1) {
    // Input validation - Prompt users if required input is not found.
    if (
      !(
        userInput == "scissors" ||
        userInput == "paper" ||
        userInput == "stone" ||
        userInput == "reversed scissors" ||
        userInput == "reversed paper" ||
        userInput == "reversed stone"
      )
    ) {
      myOutputValue = `Hey ${userName}! Please type only "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone". Try again!`;
      return myOutputValue;
    }

    myOutputValue = generateWinner(userInput);
  }
  return myOutputValue;
};

// ===== Function to pick an option of either scissors, paper or stone
var pickOption = function () {
  var randomOptionNum = Math.floor(Math.random() * 3); // Generate random integer between 0 to 3, exlucing 3
  // Alternative way to random pick an option
  // var optionsArray = ["scissors", "paper", "stone"]; // Set the output options in an array
  // var selectedOption = optionsArray[randomOptionNum]; // Use the random integer to select the random item in the array
  if (randomOptionNum == 0) {
    selectedOption = "scissors";
  }

  if (randomOptionNum == 1) {
    selectedOption = "paper";
  }

  if (randomOptionNum == 2) {
    selectedOption = "stone";
  }

  return selectedOption;
};

// ===== Function to check user input against program output to determine winner (game rules) based on original rules =====

var generateWinner = function (userInput) {
  var outputByProgram = pickOption(); // Generate random option of either scissors, paper or stone
  var myOutputValue = `You lose!`;
  numOfGamesPlayed = numOfGamesPlayed + 1;
  // console.log(outputByProgram);

  if (
    userInput == outputByProgram ||
    (userInput == "reversed scissors" && outputByProgram == "scissors") ||
    (userInput == "reversed paper" && outputByProgram == "paper") ||
    (userInput == "reversed stone" && outputByProgram == "stone")
  ) {
    numOfDraws = numOfDraws + 1;
    var myOutputValue = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}. <br ><br > It's a draw! 🤷<br ><br > Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)`;
  }

  if (
    (userInput == "scissors" && outputByProgram == "paper") ||
    (userInput == "paper" && outputByProgram == "stone") ||
    (userInput == "stone" && outputByProgram == "scissors") ||
    (userInput == "reversed scissors" && outputByProgram == "stone") ||
    (userInput == "reversed paper" && outputByProgram == "scissors") ||
    (userInput == "reversed stone" && outputByProgram == "paper")
  ) {
    numOfTimesUserWon = numOfTimesUserWon + 1;
    var userWinningPercent = calUserWinningPercent().toFixed(0);
    var myOutputValue = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}. <br ><br > You won! 🙆 <br ><br > Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >You are winning ${userWinningPercent}% of the game! Keep it up!!`;
  }

  if (
    (userInput == "scissors" && outputByProgram == "stone") ||
    (userInput == "paper" && outputByProgram == "scissors") ||
    (userInput == "stone" && outputByProgram == "paper") ||
    (userInput == "reversed scissors" && outputByProgram == "paper") ||
    (userInput == "reversed paper" && outputByProgram == "stone") ||
    (userInput == "reversed stone" && outputByProgram == "scissors")
  ) {
    numOfTimesPcWon = numOfTimesPcWon + 1;
    var pcWinningPercent = calPcWinningPercent().toFixed(0);
    var myOutputValue = `Hey ${userName}, you chose ${userInput} and the computer chose ${outputByProgram}. <br ><br > You lose! 🙅<br ><br > Submit "scissors" "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!<br ><br ><u>Game Record:</u><br>You won: ${numOfTimesUserWon} round(s)<br >Computer won: ${numOfTimesPcWon} round(s)<br >Number of draws: ${numOfDraws} round(s)<br ><br >The computer is winning ${pcWinningPercent}% of the game. Try harder!`;
  }
  return myOutputValue;
};

// ===== Functions to calculate winning percentage =====

var calUserWinningPercent = function () {
  var userWinPercent = (numOfTimesUserWon / numOfGamesPlayed) * 100;
  return userWinPercent;
};

var calPcWinningPercent = function () {
  var pcWinPercent = (numOfTimesPcWon / numOfGamesPlayed) * 100;
  return pcWinPercent;
};
