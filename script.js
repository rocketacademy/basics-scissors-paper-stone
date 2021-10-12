var genRandHand = function (randomInt) {
  return "paper";
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
};
