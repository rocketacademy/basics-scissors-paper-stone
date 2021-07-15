var diceRoll = function () {
  //Generate a number between 0 to 3
  var randomDecimal = Math.random() * 3;

  //Remove decimal
  var randomNumber = Math.floor(randomDecimal);

  console.log("Opponent Rolled");
  console.log(randomNumber);

  //Assigning an elements to values 0 to 3
  if (randomNumber == 0) {
    return "Scissors";
  }
  if (randomNumber == 1) {
    return "Paper";
  }
  if (randomNumber == 2) {
    return "Stone";
  }
};

//Define Input
var main = function (input) {
  //Define computer opponent's roll
  var opponentRoll = diceRoll();

  //Comparing player input vs opponent - DRAW
  if (
    (input == "Scissors" && opponentRoll == "Scissors") ||
    (input == "Paper" && opponentRoll == "Paper") ||
    (input == "Stone" && opponentRoll == "Stone")
  ) {
    return `You chose ${input} and your opponent chose ${opponentRoll}. The result is a draw!!`;

    //Comparing player input vs opponent - WIN
  } else if (
    (input == "Scissors" && opponentRoll == "Paper") ||
    (input == "Paper" && opponentRoll == "Stone") ||
    (input == "Stone" && opponentRoll == "Scissors")
  ) {
    return `You chose ${input} and your opponent chose ${opponentRoll}. Good Job! You've Won!!`;

    //Comparing player input vs opponent - LOSE
  } else if (
    (input == "Scissors" && opponentRoll == "Stone") ||
    (input == "Paper" && opponentRoll == "Scissors") ||
    (input == "Stone" && opponentRoll == "Paper")
  ) {
    return `You chose ${input} and your opponent chose ${opponentRoll}. You lose! Better luck next time!`;

    //Invalid Input Conditioning
  } else if (input !== "Scissors" && input !== "Paper" && input !== "Stone") {
    return `Your input ${input} is not allowed. You may only choose Scissors, Paper, or Stone. Kindly try again.`;
  }
};
