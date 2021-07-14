var main = function (input) {
  var myOutputValue = ""
  var computerInput = rockPaperScissors ();
  
  console.log("Computer choose...");
  console.log(computerInput);
  console.log("You choose...");
  console.log(input);

  if ((input !== "rock") || (input !== "scissors") || (input !== "paper")
  || (input !== "reversed paper")|| (input !== "reversed rock")|| (input !== "reversed scissors"))

  {
    myOutputValue = "You can only choose from rock, scissors, paper! <br><br> Try again!";
  }
  
if (input.includes("reversed")) {  
// draw
  if (input.includes(computerInput)){
    myOutputValue = "It's a draw! <br><br> You choose " + input + 
    " and computer chose " + computerInput;
  }
// player wins
  if ((input.includes("rock") && computerInput == "paper") || 
     (input.includes("paper") && computerInput == "scissors") || 
     (input.includes("scissors") && computerInput == "rock")) {
    myOutputValue = "You won! <br><br> You choose " + input + 
        " and computer chose " + computerInput;
  }

// player loses
if ((input.includes("rock") && computerInput == "scissors") || 
     (input.includes("paper") && computerInput == "rock") || 
     (input.includes("scissors") && computerInput == "paper")) {
    myOutputValue = "You lost! <br><br> You choose " + input + 
        " and computer chose " + computerInput;
  }
}
  return myOutputValue;
};

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
