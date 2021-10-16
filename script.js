//part 1

/*var genRandHand = function () {
  var randomInt = Math.floor(Math.random() * 4);
  //var scissors = 1
  //var paper = 2
  //var stone = 3
  if (randomInt == 1) {
    var outPutHand = "scissors";
    return outPutHand;
  }
  if (randomInt == 2) {
    var outPutHand = "paper";
    return outPutHand;
  }
  if (randomInt == 3) {
    var outPutHand = "stone";
    return outPutHand;
  }
};

var main = function (input) {
  var randHand = genRandHand();
  var myOutPutValue = `Something wrong, try again.`;
  if (input == randHand) {
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>we DRAW.`;
  }
  if (
    (input == "scissors" && randHand == "paper") ||
    (input == "paper" && randHand == "stone") ||
    (input == "stone" && randHand == "scissors")
  ) {
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>you WIN`;
  }
  if (
    (input == "scissors" && randHand == "stone") ||
    (input == "paper" && randHand == "scissors") ||
    (input == "stone" && randHand == "paper")
  ) {
    myOutPutValue = `You played ${input} <br>I played ${randHand}<br>you LOSE`;
  }
  return myOutPutValue;
};*/

//part 2
var userName = "";
var numOfWins = 0;
var numOfGame = 0;
var genRandHand = function () {
  var randomInt = Math.floor(Math.random() * 4);
  //var scissors = 1
  //var paper = 2
  //var stone = 3
  if (randomInt == 1) {
    var outPutHand = "scissors";
    return outPutHand;
  }
  if (randomInt == 2) {
    var outPutHand = "paper";
    return outPutHand;
  }
  if (randomInt == 3) {
    var outPutHand = "stone";
    return outPutHand;
  }
};

var main = function (input) {
  var randHand = genRandHand();

  var myOutPutValue = `Play "scissors", "paper", or "stone".`;

  if (!userName) {
    if (!input) {
      return `Eh, input user name`;
    }
    userName = input;
  }
  if (input == randHand) {
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>We DRAW.`;
    numOfGame += 1;
  }
  if (
    (input == "scissors" && randHand == "paper") ||
    (input == "paper" && randHand == "stone") ||
    (input == "stone" && randHand == "scissors")
  ) {
    numOfWins += 1;
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>You WIN`;
    numOfGame += 1;
  }
  if (
    (input == "scissors" && randHand == "stone") ||
    (input == "paper" && randHand == "scissors") ||
    (input == "stone" && randHand == "paper")
  ) {
    myOutPutValue = `You played ${input} <br>I played ${randHand}<br>You LOSE`;
    numOfGame += 1;
  }

  return `Dear ${userName}<br>${myOutPutValue}<br> You have won ${numOfWins}/${numOfGame} games.`;
};
