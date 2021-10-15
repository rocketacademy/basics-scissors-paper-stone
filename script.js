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

var checkUserInput = function (userInput) {
  if (userInput == "scissors" || userInput == "paper" || userInput == "stone") {
    var flag = 1;
  } else {
    flag = 0;
  }
  return flag;
};

var main = function (userInput) {
  var userInputFlag = checkUserInput(userInput);
  console.log(userInput);
  var aiSelection = getAiOutput();
  console.log(aiSelection);

  if (userInputFlag == 1) {
    if (userInput == aiSelection) {
      var myOutputValue = "Draw";
    } else if (userInput == "scissors" && aiSelection == "paper") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Win! :D <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    } else if (userInput == "scissors" && aiSelection == "stone") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Lose! Bummer! <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    } else if (userInput == "paper" && aiSelection == "scissors") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Lose! Bummer! <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    } else if (userInput == "paper" && aiSelection == "stone") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Win! :D <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    } else if (userInput == "stone" && aiSelection == "scissors") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Win! :D <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    } else if (userInput == "stone" && aiSelection == "paper") {
      myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> You Lose! Bummer! <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
    }
  } else {
    myOutputValue = `The computer choose ${aiSelection}. <br> You choose ${userInput}. <br> <br> It's a Draw! <br><br> Now you can type "scissors "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
