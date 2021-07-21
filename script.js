var startingPoint = 0;
var losingPoint = 0;
var drawPoint = 0;
var userName = "";

var main = function (input) {
  var userName = input;
  var messageToUser = `Hello ${userName}, Please input 1 of "scissor", "paper", or "rock" to play the game.`;
  if (userName == input) {
    if (
      input != "scissor" &&
      input != "paper" &&
      input != "rock" &&
      input != "reversedscissor" &&
      input != "reversed paper" &&
      input != "reversed rock"
    ) {
      return messageToUser;
    }
  }

  var compResult = function generateNumber() {
    var randomResult = Math.floor(Math.random() * 3); // formula for getting random number

    // Labeling the result to the numbers e.g if random number = 1, then it is scissor
    if (randomResult === 0) {
      randomSelection = "scissor";
    }
    if (randomResult === 1) {
      randomSelection = "paper";
    }
    if (randomResult === 2) {
      randomSelection = "rock";
    }
    return randomSelection;
  };
  // Now I have the labels and now I should get the result logics

  var apple = compResult();
  console.log("apple", apple);

  // creating a function to filter results for draw, win and lose
  var gameResult = function (input) {
    if (randomSelection === `rock` && input === "paper") {
      startingPoint = startingPoint + 1;
      losingPoint = losingPoint + 1;

      result = `You win! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === `rock` && input === "scissor") {
      losingPoint = losingPoint + 1;
      result = `You lose! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === `paper` && input === "scissor") {
      startingPoint = startingPoint + 1;
      result = `You win! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === `paper` && input === "rock") {
      losingPoint = losingPoint + 1;
      result = `You lose! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === `scissor` && input === "rock") {
      startingPoint = startingPoint + 1;
      result = `You win! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === `scissor` && input === "paper") {
      losingPoint = losingPoint + 1;
      result = `You lose! your losing point was ${losingPoint} and your winning point was ${startingPoint}`;
    }
    if (randomSelection === input) {
      drawPoint = drawPoint + 1;
      result = `It was a draw!`;
    }
    return result;
  };

  var calculateTheLogicToWin = function () {
    var toWin = 5;
    var minimum = 0;
    var message = "keep trying, get more winning points!";
    if (startingPoint >= toWin) {
      if (startingPoint === `5`) {
        message = `You are doing fine`;
      }
    }
    if (startingPoint <= minimum) {
      message = "You are doing not so well";
    }
    return message;
  };

  // final display

  var robotresult = "The computer chose " + compResult(input);
  var humanResult = gameResult(input);
  var currentPoint = calculateTheLogicToWin();
  return humanResult + `<br><br>` + currentPoint + `<br><br>` + robotresult;
};
