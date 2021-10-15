// What is the input going to be? Stone or Paper or Scissors
// What should the output be? You played {input} and the computer played {stone/paper/scissors} so you {won/lost/drew}
// How will the computer's option be randomly generated? Using math.random to generate a number between 0-2
// How many different cases are there? 3 (win, lose, draw)

var main = function (input) {
  // Generate a random dice number
  var randomDiceNumber = rollDice();
  // Assign a play to each dice number
  if (randomDiceNumber == 0) {
    var computerTurn = "stone";
    console.log("computer played 0 - stone");
    console.log(randomDiceNumber == 0);
  }

  if (randomDiceNumber == 1) {
    console.log("computer played 1 - paper");
    console.log(randomDiceNumber == 1);
    var computerTurn = "paper";
  }

  if (randomDiceNumber == 2) {
    console.log("computer played 2 - scissors");
    console.log(randomDiceNumber == 2);
    var computerTurn = "scissors";
  }

  // Assign an outcome based on each input
  // Input Validation
  if (input != "stone" && input != "paper" && input != "scissors") {
    myOutputValue =
      "You played " +
      input +
      " which is invalid, please only play stone, paper or scissors.";
    // Return output.
    console.log("input validation");
    return myOutputValue;
  }

  // stone
  // stone vs Scissors (win)
  if (input == "stone" && computerTurn == "scissors") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win";
    // Return output.
    console.log("you played stone - you win");
    return myOutputValue;
  }

  // stone vs stone (draw)
  if (input == "stone" && computerTurn == "stone") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you drew";
    // Return output.
    console.log("you played stone - you drew");
    return myOutputValue;
  }

  // stone vs Paper (lose)
  if (input == "stone" && computerTurn == "paper") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you lose";
    // Return output.
    console.log("you played stone - you lose");
    return myOutputValue;
  }

  // Paper
  // Paper vs Scissors (lose)
  if (input == "paper" && computerTurn == "scissors") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you lose";
    // Return output.
    console.log("you played paper - you lose");
    return myOutputValue;
  }

  // Paper vs stone (win)
  if (input == "paper" && computerTurn == "stone") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win";
    // Return output.
    console.log("you played paper - you win");
    return myOutputValue;
  }

  // Paper vs paper (draw)
  if (input == "paper" && computerTurn == "paper") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you drew";
    // Return output.
    console.log("you played paper - you drew");
    return myOutputValue;
  }

  // Scissors
  // Scissors vs Scissors (draw)
  if (input == "scissors" && computerTurn == "scissors") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you drew";
    // Return output.
    console.log("you played scissors - you drew");
    return myOutputValue;
  }

  // Scissors vs stone (lose)
  if (input == "scissors" && computerTurn == "stone") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you lose";
    // Return output.
    console.log("you played scissors - you lose");
    return myOutputValue;
  }

  // Scissors vs paper (win)
  if (input == "scissors" && computerTurn == "paper") {
    myOutputValue =
      "You played " +
      input +
      " and the computer played " +
      computerTurn +
      " so you win";
    // Return output.
    console.log("you played scissors - you win");
    return myOutputValue;
  }
};

var rollDice = function () {
  // Generate a decimal from 0 through 3, inclusive of 0
  var randomDecimal = Math.random() * 3;
  // Remove the decimal with the floor operation.
  // This will be an integer from 1 to 3 inclusive.
  var randomInteger = Math.floor(randomDecimal);
  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  console.log("dice rolls: ", randomInteger);
  return randomInteger;
};
