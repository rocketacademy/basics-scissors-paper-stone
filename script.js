var aiWins = 0;
var userWins = 0;
var totalGames = 0;
var gameType = "Username";
console.log(gameType);
var userName = "";

var main = function (input) {
  var myOutputValue = "";

  if (gameType == "Username") {
    gameType = "Basic";
    userName = input;
    return `' Hi ${userName} , welcome to BasicSPS Mode!'`;
  }
  // reversed game trial
  //  if (input == "reversed") {
  //  gameType = "Reversed";
  //return `'Hi ${userName} welcome to Reversed SPS Mode! Try to win with reversed rules!`;
  //}

  //if (gameType == "Reversed") {
  //var spsReversed = calspsReversed();
  //return spsReversed;
  //}

  if (gameType == "Basic") {
    var spsBasic = calspsBasic(input);
    return spsBasic;
  }

  return myOutputValue;
};

var calRandomNum = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};

var calRandomHand = function () {
  var totalNumVariables = 3;
  var randomVariable = calRandomNum(totalNumVariables);
  if (randomVariable == 1) {
    return "Scissors";
  }
  if (randomVariable == 2) {
    return "Stone";
  }
  if (randomVariable == 3) {
    return "Paper";
  }
  return "Please try again.";
};

var calspsBasic = function (input) {
  var compHand = calRandomHand();
  console.log(compHand);

  if (input == compHand) {
    return `${userName} You choose ${input} <br></br> Computer got ${compHand} <br></br> It was a DRAW!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
  } else if (
    (input == "Scissors" && compHand == "Paper") ||
    (input == "Paper" && compHand == "Stone") ||
    (input == "Stone" && compHand == "Scissors")
  ) {
    userWins = userWins + 1;
    return `${userName} You choose ${input} <br></br> Computer got ${compHand} <br></br> It was a Win!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
  } else if (input !== "Scissors" && input !== "Paper" && input !== "Stone") {
    return "Please key in appropriate response. <br></br> Scissors , Paper or Stone";
  } else {
    aiWins = aiWins + 1;
    return `${userName} You choose ${input} <br></br> Computer got ${compHand} <br></br> It was a LOSS!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
  }
};

//var calspsReversed = function (input) {
//var reversedCompHand = calRandomHand();
//console.log(reversedCompHand);

//if (input == reversedCompHand) {
//return `Reversed <br></br> ${userName} You choose ${input} <br></br> Computer got ${reversedCompHand} <br></br> It was a DRAW!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
//} else if (
//(input == "Scissors" && reversedCompHand == "Stone") ||
//(input == "Paper" && reversedCompHand == "Scissors") ||
//(input == "Stone" && reversedCompHand == "Paper")
//) {
//userWins = userWins + 1;
//return `Reversed <br></br> ${userName} You choose ${input} <br></br> Computer got ${reversedCompHand} <br></br> It was a Win!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
//} else if (input !== "Scissors" && input !== "Paper" && input !== "Stone") {
//return "Please key in appropriate response. <br></br> Scissors , Paper or Stone";
//} else {
//aiWins = aiWins + 1;
//return `Reversed <br></br> ${userName} You choose ${input} <br></br> Computer got ${reversedCompHand} <br></br> It was a LOSS!  <br></br> UserWins: ${userWins} <br></br> AiWins: ${aiWins} <br></br> Please try again!`;
//}
//};
