//Create a function to generate random words from a list
var getWords = function () {
  var listWords = ["scissors", "paper", "stone"];
  var randomWords = listWords[Math.floor(Math.random() * listWords.length)];
  return randomWords;
};

var main = function (input) {
  var randomSPS = getWords();

  console.log(randomSPS);

  //default message if user lose the game
  var myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> You lose! Bummer. <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;

  //user wins - scissors beats paper, paper beats stone, and stone beats scissors.
  if (
    (input == "scissors" && randomSPS == "paper") ||
    (input == "paper" && randomSPS == "stone") ||
    (input == "stone" && randomSPS == "scissors")
  ) {
    myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> Congrats, you win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //////////////Reverse Game////////////

  //Reserve game: user wins - scissors beat stone, stone beats paper, and paper beats scissors
  //if (
  //(input == "scissors" && randomSPS == "stone") ||
  //(input == "stone" && randomSPS == "paper") ||
  //(input == "paper" && randomSPS == "scissors")
  //) {
  //myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> Congrats, you win! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  //}

  //If both parties choose the same object, it's a draw.
  if (input == randomSPS) {
    myOutputValue = `The computer chose ${randomSPS}. <br> You chose ${input}. <br><br> It's a draw! <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  //if user enter other words, generate input validation and let them know there are only three options
  if (input !== "scissors" && input !== "paper" && input !== "stone") {
    myOutputValue = `This is an invalid option... Please type "scissors" "paper" or "stone" to play the game!`;
  }

  return myOutputValue;
};
