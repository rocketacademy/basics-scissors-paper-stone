var playerWinCount = 0;
var computerWinCount = 0;
var numberOfDraws = 0;

var main = function (input) {
  var opponentSelection = scissorsPaperStone();
  var lowerCaseOpponentSelection = opponentSelection.toLowerCase();
  var lowerCaseInput = input.toLowerCase();
  var myOutputValue =
    "Sorry, you lost! You selected " +
    input +
    " but the opponent selected " +
    opponentSelection +
    ". Please try again!";
  // You lose under the following conditions:
  // 1. You select Scissors, and opponent select Stone,
  // 2. OR you select Paper, and opponent select Scissors,
  // 3. OR you select Stone, and opponent select Paper.
  // If player loses, add 1 to number of times computer has won.
  if (
    (lowerCaseInput == "scissors" && lowerCaseOpponentSelection == "stone") ||
    (lowerCaseInput == "paper" && lowerCaseOpponentSelection == "scissors") ||
    (lowerCaseInput == "stone" && lowerCaseOpponentSelection == "paper")
  ) {
    computerWinCount = computerWinCount + 1;
  }
  // You win under the following conditions:
  // 1. You select Scissors, and opponent select Paper,
  // 2. OR you select Paper, and opponent select Stone,
  // 3. OR you select Stone, and opponent select Scissors.
  if (
    (lowerCaseInput == "scissors" && lowerCaseOpponentSelection == "paper") ||
    (lowerCaseInput == "paper" && lowerCaseOpponentSelection == "stone") ||
    (lowerCaseInput == "stone" && lowerCaseOpponentSelection == "scissors")
  ) {
    // If player wins, add 1 to the number of times player has won.
    playerWinCount = playerWinCount + 1;
    myOutputValue =
      "Congratulations, you win! You selected " +
      input +
      " while the opponent selected " +
      opponentSelection +
      ".";
  }
  // It will be a draw under the following conditions:
  // 1. You select Scissors, and opponent select Scissors,
  // 2. OR you select Paper, and opponent select Paper,
  // 3. OR you select Stone, and opponent select Stone.
  if (
    (lowerCaseInput == "scissors" &&
      lowerCaseOpponentSelection == "scissors") ||
    (lowerCaseInput == "paper" && lowerCaseOpponentSelection == "paper") ||
    (lowerCaseInput == "stone" && lowerCaseOpponentSelection == "stone")
  ) {
    // If it's a draw, add 1 to the number of times a draw has occurred.
    numberOfDraws = numberOfDraws + 1;
    myOutputValue = "It's a draw!";
  }
  // If user types anything other than a valid choice, he/she will be asked to try again.
  if (
    !(
      lowerCaseInput == "scissors" ||
      lowerCaseInput == "paper" ||
      lowerCaseInput == "stone"
    )
  ) {
    myOutputValue =
      "Sorry, " +
      input +
      " is not a valid choice. Please input only scissors, paper or stone.";
  }
  return (
    myOutputValue +
    "<br> Player win count: " +
    playerWinCount +
    " | Computer win count: " +
    computerWinCount +
    " | Number of draws: " +
    numberOfDraws
  );
};

var opponentRNG = function () {
  // This function will randomly generate numbers 1 to 3.
  // Generate a random number from 0 to 2.9999 recurring.
  var randomNumber = Math.random() * 3;

  // Generate a random integer from 0 to 2, by removing the decimals.
  var randomInteger = Math.floor(randomNumber);

  // Add 1 to generate a random integer from 1 to 3.
  var oneToThree = randomInteger + 1;

  return oneToThree;
};

var scissorsPaperStone = function () {
  // The default result is Stone, if RNG is 3 (i.e. 3 = Stone).
  var opponentRandomNumber = opponentRNG();
  var opponentSPS = "Stone";
  // If RNG = 2, result is Paper (i.e. 2 = Paper).
  if (opponentRandomNumber == 2) {
    opponentSPS = "Paper";
  }
  // If RNG = 1, result is Scissors (i.e. 1 = Scissors)
  if (opponentRandomNumber == 1) {
    opponentSPS = "Scissors";
  }
  return opponentSPS;
};
