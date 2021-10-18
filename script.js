// -- SPS Part 1 -- //
// Users input "scissors","paper", or "stone"
// Program outputs whether the user won, the program won or draw

// Questions to be solved
// Q1. How to add emojis behind users input
// Q2. Need to set up for reversed game (more comfortable)

// scissors > paper; paper > stone; stone > scissors;
// Draw if both choose the same subject

// -- SPS Part 2 -- //
// Keep track of users win and computer wins
// keep track of users loss and computer loss
// keep track of draws for both

var currentGameMode = "waiting for user name";
var totalNumOfRounds = 0;
var numOfUserWins = 0;
var numOfUsersWinRate = numOfUserWins / totalNumOfRounds;
var numOfComWins = 0;
var numOfDraws = 0;
var numOfUserLosses = 0;
var numOfComLosses = 0;
var userName = "";

var main = function (input) {
  if (currentGameMode == "waiting for user name") {
    // waiting for user input
    userName = input;

    // Switch to SPS game after userName input
    currentGameMode = "Scissors Paper Stone Game";
    myOutputvalue = `Hello ${userName}! Let's start the Scissors Paper Stone Game!`;
  } else if (currentGameMode == "Scissors Paper Stone Game") {
    myOutputvalue = playSPSGame(userName, input);
  }
  return myOutputvalue;
};

var playSPSGame = function (userName, input) {
  var message = "";

  // Computer Choice
  var computerChoice = getComputerchoice();
  console.log(computerChoice);

  if (computerChoice == 1) {
    computer = "scissors✌";
    console.log("scissors");
  }

  if (computerChoice == 2) {
    computer = "paper🖐";
    console.log("paper");
  }

  if (computerChoice == 3) {
    computer = "stone👊";
    console.log("stone");
  }

  message = `The computer chose ${computer}<br>`;

  // Input Validation// Input validation to let users know there are only 3 input options, and ask them to try again
  if (!(input == "scissors" || input == "paper" || input == "stone")) {
    console.log("enter again");
    return `Pls choose again! <br><br> You can only choose 'scissors✌', 'paper🖐' or 'stone👊'!`;
  }

  // User input win conditions
  if (
    (input == "scissors" && computerChoice == 2) ||
    (input == "paper" && computerChoice == 3) ||
    (input == "stone" && computerChoice == 1)
  ) {
    console.log(input);
    console.log(computerChoice);
    console.log("win!");
    numOfUserWins += 1;
    numOfComLosses += 1;
    message += `<br> ${userName}, You chose ${input}. <br><br> You win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round! <br><br> Number of User wins is ${numOfUserWins}. <br><br> Number of computer losses is ${numOfComLosses}`;
    return message;
  }

  // Draw conditions
  if (
    (input == "scissors" && computerChoice == 1) ||
    (input == "paper" && computerChoice == 2) ||
    (input == "stone" && computerChoice == 3)
  ) {
    console.log(input);
    console.log(computerChoice);
    console.log("draw!");
    numOfDraws += 1;
    message += `<br>${userName}, You chose ${input}. <br><br> It's a draw! <br><br> Try again!<br><br> Number of Draws is ${numOfDraws}.`;
    return message;
  }

  // User input lose conditions
  if (
    (input == "scissors" && computerChoice == 3) ||
    (input == "paper" && computerChoice == 1) ||
    (input == "stone" && computerChoice == 2)
  ) {
    console.log(input);
    console.log(computerChoice);
    console.log("lost!");
    numOfUserLosses += 1;
    numOfComWins += 1;
    message += `<br>${userName}, You chose ${input}. <br><br> You lose! Bummer. <br><br> Now you can type "scissors" "paper" or "stone" to play another round!<br><br> Number of Computer wins is ${numOfComWins}. <br><br> Number of UsersLosses is ${numOfUserLosses}`;
    return message;
  }
};

var getComputerchoice = function () {
  // Generate a decimal from 0 to 3, inclusive of 0 and exclusive of 3
  var randomDecimal = Math.random() * 3;

  // Remove the decimal
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid number from 1 to 3
  var actualNum = randomInteger + 1;

  return actualNum;
};
