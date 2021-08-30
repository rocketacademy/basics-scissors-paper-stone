var winCounterUSer = 0;
var winCounterComp = 0;
var totalTurns = 0;

var userName = prompt("What is your name?");
if (confirm(`hello ${userName}! Let the games begin`))
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

var main = function (input) {
  var myOutputValue =
    "There are only three options, scissors, paper or rock. <br><br> Please rewrite.";
  var secretWord = generatedComputer();
  totalTurns += 1;
  //user inputs equals to computer
  if (input == secretWord) {
    myOutputValue = `You chose ${input}. <br><br>
    The computer chose ${secretWord}. <br><br>
    This is a draw out of ${totalTurns} turns. Nice try ${userName}`;
  }

  //user inputs rock and computer choses paper
  if (input == "rock" && secretWord == "paper") {
    winCounterComp += 1;
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}.<br><br> Computer wins. It has won ${winCounterComp} out of ${totalTurns} times. <br><br> Better luck next time ${userName}!`;
  }
  //user inputs rock and computer choses scissors
  if (input == "rock" && secretWord == "scissors") {
    winCounterUSer += 1;
    myOutputValue = `You chose ${input}. <br><br> The computer choose ${secretWord} ✂️. <br><br> You win! You won ${winCounterUSer} out of ${totalTurns} times. Good stuff ${userName}.`;
  }

  //user inputs paper and computer choses rock
  if (input == "paper" && secretWord == "rock") {
    winCounterUSer += 1;
    myOutputValue = `You chose ${input} 🗒. <br><br> The computer choose ${secretWord}<br><br> You win!!! you win ${winCounterUSer} out of ${totalTurns} times.Good job ${userName}.`;
  }

  //user inputs scissors and computer choses paper
  if (input == "scissors" && secretWord == "paper") {
    winCounterUSer += 1;
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}. <br><br> You win!!! YAY! 😁 You win ${winCounterUSer} out of ${totalTurns} times. Great ${userName}!`;
  }

  //user inputs paper and computer choses scissors
  if (input == "paper" && secretWord == "scissors") {
    winCounterComp += 1;
    myOutputValue = `You chose ${input}. <br><br> The computer chose ${secretWord}.<br><br> Computer wins. It has won ${winCounterComp} out of ${totalTurns} times. <br><br> Try again ${userName}.`;
  }

  //user inputs scissors and computer choses rock
  if (input == "scissors" && secretWord == "rock") {
    winCounterComp += 1;
    myOutputValue = `You chose ${input} ✂️. <br><br> The computer chose ${secretWord}. <br><br> Computer wins 😐 It was won ${winCounterComp} out of ${totalTurns} times. <br><br> Try again ${userName}`;
  }
  return myOutputValue;
};
