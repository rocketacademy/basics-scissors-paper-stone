//As opposed to dice roll; my input should not match.
//Must generate random values with s,p,s. Math.random()*3, Math.floor
//Build on the known items first. So I should start the skeleton with building the random s,p,s.
//there must be an "INPUT" word in the main below as input is required to plat the game?
//Rubberduck REFER to my notes to understand the flow of the syntaxes.
var main = function (input) {
  ////MUST DEFINE the Variable 'myOutputValue' but can put "empty string" since there is no need for any outputvalue when the user doesn't play the game.
  var myOutputValue = "";
  ////Now IMMEDIATELY on the onset, when the MAIN starts running, we do not want the players to enter rubbish so we put the below if condition FIRST to run (also for input validation).
  if (input != "scissors" && input != "paper" && input != "stone") {
    myOutputValue =
      "Computer is crashing ;P  Please enter only scissors, paper or stone (in lowercase)!";
  }
  ////Jeremy: Assign scissors paper or stone objects to computer.
  ////Below equation is to DEFINE VAR variable of the items/objects that computer is to generate, i.e. the random numbers that converted to words representing the objects.
  var computerSpsObject = getSpsObject();

  ////Jeremy: Set a variable that holds the users' sps objects so that IS NOT UNDEFINED
  ////Below equation is to DEFINE VAR variable of the items/objects user is to generate. i,e, DEFINE THE USER INPUT. We need to DEFINE BOTH computer and user sides since it is an interactive game.
  var userSpsObject = input;

  ////Jeremy: compare the computer's objects vs players' and determine who wins.

  //we now put in validation condition “if” syntax below when player doesn’t play s ,p, s. To generate the message

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
//Build the diceroll for s ,p ,s. Named as ranNumRoll;
var getRandomNum = function () {
  var ranDecimal = Math.random() * 3;
  var ranInteger = Math.floor(ranDecimal);
  var ranSpsNum = ranInteger + 1;
  return ranSpsNum;
};
////Jeremy: Now next step to allocate these numbers, i.e. ranSpsNum , to represent scissors, paper, stone.
var getSpsObject = function () {
  ////Jeremy:  Var getSpsObject is to obtain sps objects from the function below. It is the container to contain the results of either 1,2,3, from fx of getRandomNum. the ranSpsWords var contains the numbers so we convert these numbers in randomNumber
  var randomNum = getRandomNum();
  if (randomNum == 1) return "scissors";
  if (randomNum == 2) return "paper";
  if (randomNum == 3) return "stone";
  ////the reason we come up with the equation name var randomNum = getRandomNum(); is because we want clarity that the ranSpsNum is now represented as randomNum since its the result of the equation of var getRandomNum(). Since we want the numbers to return its assigned objects, we should use what number is assigned to what objects clearly.
};
