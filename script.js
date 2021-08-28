// Scissors = 1
// Paper = 2
// Stone = 3
// Paper > stone > Scissors > Paper
// 2 > 3 > 1 > 2
// input == diceroll, Draw
// testing git push
var generateRandomInteger = function (max) {
  var randomDecimal = Math.random() * max;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateRandomHand = function () {
  var handType = 3;
  var randomHandType = generateRandomInteger(handType);
  if (randomHandType == 1) {
    return "scissors";
  }
  // "else if" is implied in the following if statements because we return in each if statement.
  if (randomHandType == 2) {
    return "paper";
  }
  if (randomHandType == 3) {
    return "stone";
  }
  console.log();
};

var handRandomness = function (input) {
  var computerHand = generateRandomHand();
  console.log("Computer chooses:" + computerHand);
  var genericOutput = `Your hand: ${input}. Computer's Hand: ${computerHand}.`;
  if (input == computerHand) {
    return `${genericOutput} DRAWWW!!`;
  }
  if (input == "scissors" && computerHand == "paper") {
    return `${genericOutput} WIN!!`;
  }
  if (input == "scissors" && computerHand == "stone") {
    return `${genericOutput} LOSE!!`;
  }
  if (input == "paper" && computerHand == "stone") {
    return `${genericOutput} WIN!!`;
  }
  if (input == "paper" && computerHand == "scissors") {
    return `${genericOutput} LOSE!!`;
  }
  if (input == "stone" && computerHand == "scissors") {
    return `${genericOutput} WIN!!`;
  }
  if (input == "stone" && computerHand == "paper") {
    return `${genericOutput} LOSE!!`;
  }

  if (input == "rscissors" && computerHand == "paper") {
    return `${genericOutput} LOSE!!`;
  }
  if (input == "rscissors" && computerHand == "stone") {
    return `${genericOutput} WIN!!`;
  }
  if (input == "rpaper" && computerHand == "stone") {
    return `${genericOutput} LOSE!!`;
  }
  if (input == "rpaper" && computerHand == "scissors") {
    return `${genericOutput} WIN!!`;
  }
  if (input == "rstone" && computerHand == "scissors") {
    return `${genericOutput} LOSE!!`;
  }
  if (input == "rstone" && computerHand == "paper") {
    return `${genericOutput} WIN!!`;
  }
};
