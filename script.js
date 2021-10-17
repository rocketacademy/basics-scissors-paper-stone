var numberPlayerWins = 0;
var numberComputerWins = 0;
var currentGameMode = "waiting for player name";

//generate a random integer from 1 to 3
var generateRandomInteger = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

// assign word values to the numbers
var generateRandomSPS = function () {
  var randomSPS = generateRandomInteger();
  if (randomSPS == 1) {
    return "scissors";
  }
  if (randomSPS == 2) {
    return "paper";
  }
  if (randomSPS == 3) {
    return "stone";
  }
};

// set conditions
var scissorsPaperStone = function (userName, userChoice) {
  console.log(userChoice);
  var scissorsPaperStoneResponse = generateRandomSPS();
  console.log(scissorsPaperStoneResponse);
  if (userChoice == scissorsPaperStoneResponse) {
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - its a draw! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "scissors" && scissorsPaperStoneResponse == "paper") {
    numberPlayerWins = numberPlayerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you win! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "scissors" && scissorsPaperStoneResponse == "stone") {
    numberComputerWins = numberComputerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you lose! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "paper" && scissorsPaperStoneResponse == "stone") {
    numberPlayerWins = numberPlayerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you win!You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "paper" && scissorsPaperStoneResponse == "scissors") {
    numberComputerWins = numberComputerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you lose! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "stone" && scissorsPaperStoneResponse == "scissors") {
    numberPlayerWins = numberPlayerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you win! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (userChoice == "stone" && scissorsPaperStoneResponse == "paper") {
    numberComputerWins = numberComputerWins + 1;
    return `${userName}, you chose ${userChoice} and the computer chose ${scissorsPaperStoneResponse} - you lose! You have won ${numberPlayerWins} times and the computer has won ${numberComputerWins} times.`;
  }
  if (
    userChoice != "scissors" &&
    userChoice != "paper" &&
    userChoice != "stone"
  ) {
    return "Don't you know how to play scissors paper stone??";
  }
};

// run main function
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == "waiting for player name") {
    userName = input;
    currentGameMode = "Scissors Paper Stone";
    myOutputValue = `Hello ${userName}`;
    return myOutputValue;
  } else if (currentGameMode == "Scissors Paper Stone") {
    myOutputValue = scissorsPaperStone(userName, input);
    return myOutputValue;
  }
};
