//the game will save the users name and user will input one of three variabes, scissors, paper or stone
//the computer will randomly generate a number and return whether the user wins, draws or loses
// where scissors beats paper, paper beats stone, stone beats scissors
//the game will store both user and computer win information
//with each input, app will return user input, com answer, user and com wins

//define global variables
var currentGameMode = `waiting for user name`;
var userName = "";
var comScore = 0;
var userScore = 0;
var comAns;

//random number generator for three outcomes
console.log(1);
var comRoll = function () {
  var randDec = Math.random() * 3;
  var randNum = Math.floor(randDec);
  console.log(`computer rolled number:`, randNum);
  return randNum;
};

//link random roll to scissors, paper, stone
console.log(2);
var rollToWords = function () {
  comAns = comRoll();
  if (comAns == 0) {
    return "scissors";
  }
  if (comAns == 1) {
    return "paper";
  } else if (comAns == 2) {
    return "stone";
  }
};

console.log(3);
var outcome = function (userName, input) {
  var outputAns = rollToWords();
  if (
    (input == "scissors" && outputAns == "scissors") ||
    (input == "paper" && outputAns == "paper") ||
    (input == "stone" && outputAns == "stone")
  ) {
    return `you have drawn. you input:${input}, computer input:${outputAns}. your score is ${userScore}, computer score is ${comScore}.`;
  }

  if (
    (input == "scissors" && outputAns == "stone") ||
    (input == "paper" && outputAns == "scissors") ||
    (input == "stone" && outputAns == "paper")
  ) {
    comScore += 1;
    return `you have lost! you input: ${input}, computer input:${outputAns}. you score is ${userScore}, computer score is ${comScore}`;
  }

  if (
    (input == "scissors" && outputAns == "paper") ||
    (input == "paper" && outputAns == "stone") ||
    (input == "stone" && outputAns == "scissors")
  ) {
    userScore += 1;
    return `you have won! you input: ${input}, computer input:${outputAns}. you score is ${userScore}, computer score is ${comScore}`;
  }
};
console.log(4);
var main = function (input) {
  var myOutputValue = "";
  if (currentGameMode == `waiting for user name`) {
    userName = input;
    currentGameMode = `dice game`;
    myOutputValue = `Hello ${userName}`;
  } else if (currentGameMode == `dice game`) {
    console.log(input);
    if (input != "scissors" || input != "paper" || input != "stone") {
      console.log(input);
      return `please enter only scissors, paper or stone`;
    }

    myOutputValue = outcome(userName, input);
    return myOutputValue;
  }
  return myOutputValue;
};
