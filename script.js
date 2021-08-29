var main = function (input) {
  var myOutputValue =
    "There are only three options, scissors, paper or rock. <br><br> Please rewrite.";
  var secretWord = generatedComputer();
  //user inputs equals to computer
  if (input == secretWord) {
    myOutputValue = `You chose ${input}. <br><br>
    The computer chose ${secretWord}. <br><br>
    This is a draw`;
  }
  //user inputs rock and computer choses paper
  if (input == "rock" && secretWord == "paper") {
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}.<br><br> Computer wins. Walao.`;
  }
  //user inputs rock and computer choses scissors
  if (input == "rock" && secretWord == "scissors") {
    myOutputValue = `You chose ${input}. <br><br> The computer choose ${secretWord} ✂️. <br><br> You win!!!`;
  }

  //user inputs paper and computer choses rock
  if (input == "paper" && secretWord == "rock") {
    myOutputValue = `You chose ${input} 🗒. <br><br> The computer choose ${secretWord}<br><br> You win!!!`;
  }

  //user inputs scissors and computer choses paper
  if (input == "scissors" && secretWord == "paper") {
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}. <br><br> You win!!! YAY!`;
  }

  //user inputs paper and computer choses scissors
  if (input == "paper" && secretWord == "scissors") {
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}.<br><br> Computer wins`;
  }

  //user inputs scissors and computer choses rock
  if (input == "scissors" && secretWord == "rock") {
    myOutputValue = `You chose ${input} ✂️. <br><br> The computer chose ${secretWord}. <br><br> Computer wins!!! Walao`;
  }
  return myOutputValue;
};

var generatedComputer = function () {
  //define a function to choose one of the three words
  var choosingItemRandomly = Math.floor(Math.random() * 3);
  console.log("computer randomly choses one of the three words");
  console.log(choosingItemRandomly);
  if (choosingItemRandomly == 1) {
    return "scissors";
  }
  if (choosingItemRandomly == 2) {
    return "paper";
  }
  return "rock";
};
