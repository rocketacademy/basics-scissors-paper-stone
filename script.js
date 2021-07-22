var aiWins = 0;
var userWins = 0;
var totalGames = 0;
var gameType = "Username";
console.log(gameType);
var userName = "";

var main = function (input) {
  var myOutputValue = "";

  // adding mode to input username
  if (gameType == "Username") {
    gameType = "Basic";
    userName = input;
    return `' Hi ${userName} , welcome to BasicSPS Mode! Key'`;
  }
  // basic sps game mode
  if (gameType == "Basic") {
    var spsBasic = calspsBasic(input);
    return spsBasic;
  }

  return myOutputValue;
};

//calculate a random number
var calRandomNum = function () {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
};
// uses random number to assign Scissors,papers or stone and generate a random hand
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
// houses the whole function of SPS basic game including return statements
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
