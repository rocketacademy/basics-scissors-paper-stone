// Game variables
var scissors = "scissors";
var paper = "paper";
var stone = "stone";
var reversedScissors = "reversed scissors";
var reversedPaper = "reversed paper";
var reversedStone = "reversed stone";
var newGameInstruction =
  'Now you can type "scissors", "paper" or "stone" to play another round! or you can type "reversed scissors" , "reversed paper" or "reversed stone" to play the reversed version.';

// To randomzie the program ouputs
var randomObject = function () {
  var randomNumber = Math.ceil(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber == 1) return scissors;

  if (randomNumber == 2) return paper;

  if (randomNumber == 3) return stone;
};

// To check if player wins
var checkPlayerWins = function (userInput, programOutput) {
  if (userInput == paper && programOutput == stone) return true;
  if (userInput == stone && programOutput == scissors) return true;
  if (userInput == scissors && programOutput == paper) return true;
  if (userInput == reversedScissors && programOutput == stone) return true;
  if (userInput == reversedPaper && programOutput == scissors) return true;
  if (userInput == reversedStone && programOutput == paper) return true;
};

// To check if player draws
var checkPlayerDraw = function (userInput, programOutput) {
  if (programOutput == userInput) return true;
  if (programOutput == paper && userInput == reversedPaper) return true;
  if (programOutput == stone && userInput == reversedStone) return true;
  if (programOutput == scissors && userInput == reversedScissors) return true;
};

//To retrieve icon for print out message
var displayIcon = function (object) {
  if (object == scissors || object == reversedScissors) return " ✂️";
  if (object == paper || object == reversedPaper) return " 📄";
  if (object == stone || object == reversedStone) return " 🗿";
};

// To display print out message
var resultMessage = function (userInput, programOutput) {
  var userInputIcon = displayIcon(userInput);
  var programOutputIcon = displayIcon(programOutput);
  return (
    "The computer chose " +
    programOutput +
    programOutputIcon +
    "." +
    "<br>" +
    "You chose " +
    userInput +
    userInputIcon +
    "."
  );
};

var main = function (input) {
  var programOutput = randomObject();
  var userInput = input.toLowerCase();
  var displayMessage = resultMessage(userInput, programOutput);
  if (
    userInput != paper &&
    userInput != scissors &&
    userInput != stone &&
    userInput != reversedPaper &&
    userInput != reversedScissors &&
    userInput != reversedStone
  )
    return 'Input invalid. Please enter "scissors", "paper" or "stone" to start the game! or enter "reversed scissors" "reversed paper" "reversed stone" to play the reversed version.';

  // Check if player draws
  if (checkPlayerDraw(userInput, programOutput))
    return (
      displayMessage +
      "<br><br>" +
      "It's a draw! Try again next time." +
      "<br><br> " +
      newGameInstruction
    );

  // else check if player wins
  if (checkPlayerWins(userInput, programOutput))
    return (
      displayMessage +
      "<br><br>" +
      "You win! Congratulations." +
      "<br><br> " +
      newGameInstruction
    );

  // else player loses
  return (
    displayMessage +
    "<br><br>" +
    "You lose! Bummer." +
    "<br><br> " +
    newGameInstruction
  );
};
