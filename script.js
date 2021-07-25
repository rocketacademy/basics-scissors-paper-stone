var currentGameMode = "pending user's name input";

var userName = "";

var computerSpsWinCounter = 0;
var userSpsWinCounter = 0;

var finalWinner = function () {
  if (computerSpsWinCounter > userSpsWinCounter) {
    return "I won!! You still want to continue? Heehee...";
  }
  if (computerSpsWinCounter < userSpsWinCounter) {
    return "Okay, you win for now! Let's continue the game";
  } else {
    return "We are tie!";
  }
};

var main = function (input) {
  var myOutputValue = "";
  ////Now IMMEDIATELY on the onset, when the MAIN starts running, we do not want the players to enter rubbish so we put the below if condition FIRST to run (also for input validation).
  if (currentGameMode == "pending user's name input") {
    username = input;
    currentGameMode = "The sPs Game begins!";
    myOutputValue =
      "Hello " +
      userName +
      "!" +
      "Let's start playing! Enter scissors, paper or stone (in lowercase) to begin!" +
      "<br>" +
      "RULES:" +
      "<br>" +
      "It's a draw/tie when we play the same objects," +
      "<br>" +
      "Scissors wins as it cuts paper," +
      "<br>" +
      "Paper wins as it wraps the stone," +
      "<br>" +
      "Stone wins as it hits the scissors!" +
      "<br>" +
      "<br>" +
      "1 point is added to each win, let's see who wins in the end!!";
  } else if (currentGameMode == "The sPs Game begins!") {
    if (input != "scissors" && input != "paper" && input != "stone") {
      myOutputValue =
        "Computer is crashing ;P  Please enter only scissors, paper or stone (in lowercase)!";
    }
    //Assign scissors paper or stone objects to computer.
    var computerSpsObject = getSpsObject();

    //Set a variable that holds the users' sps objects so that IS NOT UNDEFINED
    var userSpsObject = input;

    //compare the computer's objects vs players' and determine who wins.
    //we now put in the rest of the  conditions for a draw and losing/winning the s ,p ,s game below,
    if (userSpsObject == computerSpsObject) {
      computerSpsWinCounter = computerSpsWinCounter + 1;
      userSpsWinCounter = userSpsWinCounter + 1;
      myOutputValue =
        "It’s a draw " +
        userName +
        "! No fighting!" +
        "<br>" +
        "You played " +
        userSpsObject +
        " ," +
        "<br>" +
        "I played " +
        computerSpsObject +
        " !" +
        "<br>" +
        "You have " +
        userSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "And, I have " +
        computerSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "<br>" +
        finalWinner;
    }
    if (
      (userSpsObject == "scissors" && computerSpsObject == "stone") ||
      (userSpsObject == "paper" && computerSpsObject == "scissors") ||
      (userSpsObject == "stone" && computerSpsObject == "paper")
    ) {
      computerSpsWinCounter = computerSpsWinCounter + 1;
      userSpsWinCounter = userSpsWinCounter + 1;
      myOutputValue =
        "I win " +
        userName +
        " !" +
        "<br>" +
        "You played " +
        userSpsObject +
        " ," +
        "<br>" +
        "I played " +
        computerSpsObject +
        " !" +
        "<br>" +
        "You have " +
        userSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "And, I have " +
        computerSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "<br>" +
        finalWinner;
    }
    if (
      (userSpsObject == "scissors" && computerSpsObject == "paper") ||
      (userSpsObject == "paper" && computerSpsObject == "stone") ||
      (userSpsObject == "stone" && computerSpsObject == "scissors")
    ) {
      computerSpsWinCounter = computerSpsWinCounter + 1;
      userSpsWinCounter = userSpsWinCounter + 1;
      myOutputValue =
        "You win " +
        userName +
        " !" +
        "<br>" +
        "You played " +
        userSpsObject +
        " ," +
        "<br>" +
        "I played " +
        computerSpsObject +
        " !" +
        "<br>" +
        "You have " +
        userSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "And, I have " +
        computerSpsWinCounter +
        "winnings so far!" +
        "<br>" +
        "<br>" +
        finalWinner;
    }
  }
  return myOutputValue;
};
//Build the diceroll for s ,p ,s. Named as getRandomNum;
var getRandomNum = function () {
  var ranDecimal = Math.random() * 3;
  var ranInteger = Math.floor(ranDecimal);
  var ranSpsNum = ranInteger + 1;
  return ranSpsNum;
};
//Now next step to allocate these numbers, i.e. ranSpsNum , to represent scissors, paper, stone.
var getSpsObject = function () {
  //Var getSpsObject is to obtain sps objects from the function below. It is the container to contain the results of either 1,2,3, from fx of getRandomNum. the ranSpsWords var contains the numbers so we convert these numbers in randomNum.
  var randomNum = getRandomNum();
  if (randomNum == 1) return "scissors";
  if (randomNum == 2) return "paper";
  if (randomNum == 3) return "stone";
};
