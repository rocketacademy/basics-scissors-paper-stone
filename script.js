var main = function (input) {
  var myOutputValue = "";
  ////Now IMMEDIATELY on the onset, when the MAIN starts running, we do not want the players to enter rubbish so we put the below if condition FIRST to run (also for input validation).
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
    myOutputValue =
      "It’s a draw. No fighting! You played " +
      userSpsObject +
      " I played " +
      computerSpsObject +
      " !";
  }
  if (
    (userSpsObject == "scissors" && computerSpsObject == "stone") ||
    (userSpsObject == "paper" && computerSpsObject == "scissors") ||
    (userSpsObject == "stone" && computerSpsObject == "paper")
  ) {
    myOutputValue =
      "I win! You played " +
      userSpsObject +
      " I played " +
      computerSpsObject +
      " !";
  }
  if (
    (userSpsObject == "scissors" && computerSpsObject == "paper") ||
    (userSpsObject == "paper" && computerSpsObject == "stone") ||
    (userSpsObject == "stone" && computerSpsObject == "scissors")
  ) {
    myOutputValue =
      "You win! You played " +
      userSpsObject +
      " I played " +
      computerSpsObject +
      " !";
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
