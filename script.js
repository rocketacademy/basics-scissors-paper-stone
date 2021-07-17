var main = function (input) {
  if (
    input != "scissor" &&
    input != "paper" &&
    input != "rock" &&
    input != "reversedscissor" &&
    input != "reversed paper" &&
    input != "reversedrock"
  ) {
    return 'Please input 1 of "scissors", "paper", or "stone" to play the game.';
    // Side enote: recall what "return" statements do? <--ans: it exits the current function and returns the values that are included in the return statement.
    // This implies that if the return statement in line 107 is triggered, the rest of the code (from line 109 onwards) won't be executed becos we would've exited from the function.
  }
  // when this labelofresult is removed, it will fail not unless i place a randomSelection = generateNumber() on row 18

  var compResult = function generateNumber() {
    var randomResult = Math.floor(Math.random() * 3); // formula for getting random number

    // Labeling the result to the numbers e.g if random number = 1, then it is scissor
    if (randomResult === 0) {
      randomSelection = "scissor";
    }
    if (randomResult === 1) {
      randomSelection = "paper";
    }
    if (randomResult === 2) {
      randomSelection = "rock";
    }
  };
  // Now I have the labels and now I should get the result logics
  var randomSelection = compResult();
  // creating a function to filter results for draw, win and lose

  var gameResult = function finalResult() {
    var result = `You lose! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;

    if (randomSelection === input) {
      result = `It is a draw. Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `Rock ` && input === `paper`) {
      result = `You win and chose ${input}, Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `Rock ` && input === `scissors`) {
      result = `You lose! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `paper ` && input === `scissors`) {
      result = `You win and chose ${input}, Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `paper ` && input === `rock`) {
      result = `You lose! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `scissor` && input === `rock`) {
      result = `You win! Bummer. Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    if (randomSelection === `scissor` && input === `paper`) {
      result = `You lose and chose ${input}, Now you can type "scissors" "paper" or "stone" to play another round!`;
    }
    return result;
  };
  // final display
  var robotResult = compResult(input);
  var humanResult = gameResult(input); //works fine
  return `The computer chose ${randomSelection} ! </br> </br> ${humanResult}`;
};
