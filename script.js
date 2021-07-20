var userScore = 0; 
var computerScore = 0;

var rockPaperScissors = function () {
  var randomInteger = Math.random() * 3;
  var computerInteger = Math.floor(randomInteger)
  var computerChoice = ""; 
    if (computerInteger == 0) {
      computerChoice = "rock";
    }
    if (computerInteger == 1) {
      computerChoice = "paper";
    }
    if (computerInteger == 2) {
      computerChoice = "scissors";
    }
    return computerChoice; 


};

var max = function(userName) {
  var userName = userName; 
  return userName; 
};

var main = function (input) {
  var myOutputValue = ""
  var computerInput = rockPaperScissors ();
  var userN = max();

  console.log("Computer choose...");
  console.log(computerInput);
  console.log(max());
  console.log(input);

  if ((input !== "rock") || (input !== "scissors") || (input !== "paper")
  || (input !== "reversed paper")|| (input !== "reversed rock")|| (input !== "reversed scissors"))  {
    myOutputValue = "You can only choose from rock, scissors, paper! <br><br> Try again!";
  }
  
// draw
if (input.includes(computerInput)){
    myOutputValue = userN + ", it's a draw! <br><br> You choose " + input + 
    " and computer chose " + computerInput + "<br><br> So far, your score is " + userScore + "/" + (userScore + computerScore) + " turns. Pretty good!";
  }
// player wins
  if ((input.includes("rock") && computerInput == "scissors") || 
     (input.includes("paper") && computerInput == "rock") || 
     (input.includes("scissors") && computerInput == "paper")) {
      userScore += 1;
      myOutputValue = userN + ", you won! <br><br> You choose " + input + 
        " and computer chose " + computerInput + "<br><br> So far, your score is " + userScore + "/" + (userScore + computerScore) + " turns. Pretty good!";
  }

// player loses
if ((input.includes("rock") && computerInput == "paper") || 
     (input.includes("paper") && computerInput == "scissors") || 
     (input.includes("scissors") && computerInput == "rock")) {
      computerScore += 1;
      myOutputValue =  userN + ", you lost! <br><br> You choose " + input + 
        " and computer chose " + computerInput + "<br><br> So far, your score is " + userScore + "/" + (userScore + computerScore) + " turns. Pretty good!";
  }

  return myOutputValue;
};
