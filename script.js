/* 
User input = Scissors/Paper/Stone
Output = Win/Lose
    1        2       3        1
Scissors > Paper > Stone > Scissors

0-0 = 0
0-1 = -1
0-2 = -2

1-0 = 1
1-1 = 0
1-2 = -1

2-0 = 2
2-1= 1
2-2 = 0

 */
const selection = ["scissors", "paper", "stone"];

var getRandomArray = function (lenOfArray) {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of
  var randomDecimal = Math.random() * lenOfArray;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  return randomInteger;
};

var getAiOutput = function () {
  var aiOutput = selection[getRandomArray(selection.length)];
  return aiOutput;
};

var checkUserInput = function (userSelection) {
  if (
    userSelection == "scissors" ||
    userSelection == "paper" ||
    userSelection == "stone" ||
    userSelection == "reversed scissors" ||
    userSelection == "reversed paper" ||
    userSelection == "reversed stone"
  ) {
    var flag = 1;
  } else {
    flag = 0;
  }
  return flag;
};

var checkPlayerWin = function (userWinInput, aiLoseInput) {
  return (
    (userWinInput == "scissors" && aiLoseInput == "paper") ||
    (userWinInput == "paper" && aiLoseInput == "stone") ||
    (userWinInput == "stone" && aiLoseInput == "scissors") ||
    (userWinInput == "reversed scissors" && aiLoseInput == "stone") ||
    (userWinInput == "reversed paper" && aiLoseInput == "scissors") ||
    (userWinInput == "reversed stone" && aiLoseInput == "paper")
  );
};

var checkPlayerDraw = function (userDrawInput, aiDrawInput) {
  return (
    userDrawInput == aiDrawInput ||
    (userDrawInput == "reversed scissors" && aiDrawInput == "scissors") ||
    (userDrawInput == "reversed paper" && aiDrawInput == "paper") ||
    (userDrawInput == "reversed stone" && aiDrawInput == "stone")
  );
};

var main = function (userInput) {
  var userInputFlag = checkUserInput(userInput);
  // console.log(userInput);
  var aiInput = getAiOutput();
  // console.log(aiInput);

  if (userInputFlag == 1) {
    if (checkPlayerWin(userInput, aiInput)) {
      var myOutputValue = `The computer choose ${aiInput}. <br> You choose ${userInput}. <br> <br> You Win! :D <br><br> Now you can type "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!`;
    } else if (checkPlayerDraw(userInput, aiInput)) {
      myOutputValue = `The computer choose ${aiInput}. <br> You choose ${userInput}. <br> <br> It's a Draw! :D <br><br> Now you can type "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!`;
    } else {
      myOutputValue = `The computer choose ${aiInput}. <br> You choose ${userInput}. <br> <br> You Lose! :D <br><br> Now you can type "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone" to play another round!`;
    }
  } else {
    myOutputValue = `Wrong selection. Please select "scissors", "paper", "stone", "reversed scissors", "reversed paper" or "reversed stone".`;
  }
  return myOutputValue;
};
