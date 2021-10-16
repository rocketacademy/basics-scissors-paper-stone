/*Basic Scissors Paper Stone

Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.

Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.

Input Validation

Sometimes the user types bad and types something other than "scissors", "paper", or "stone" during gameplay. Add input validation to kindly let the user know that there are only 3 input options, and ask them to try again.*/

/*pseudo code for scissors paper stone
1. get and verify user input
2. randomly generate input for computer
3. compare user and computer inputs
4. output score and result
*/

var randomInput = function (myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
};

var compareInputs = function (userInput, computerInput) {
  // draw condition
  if (userInput == computerInput) {
    return "Draw!";
  } // win condition
  if (
    (userInput == "scissors" && computerInput == "paper") ||
    (userInput == "paper" && computerInput == "stone") ||
    (userInput == "stone" && computerInput == "scissors")
  ) {
    return "You win!";
  }
  // if not draw or win, lose
  else {
    return "You lose!";
  }
};

var main = function (input) {
  // lower case only
  var choices = ["scissors", "paper", "stone"];

  // check if user input in list, if not, get user to try again
  if (choices.includes(input.toLowerCase())) {
    var userInput = input;
  } else {
    return "Invalid input. Try again.";
  }

  // randomly choose 1 choice from list
  var computerInput = randomInput(choices);

  // compare inputs, output result
  var result = compareInputs(userInput.toLowerCase(), computerInput);

  // format output
  var myOutputValue = `User: ${input}
  <br>
  Computer: ${computerInput}
  <br>
  Result: ${result}`;
  return myOutputValue;
};
