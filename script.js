// Initialise and format item variables (text with emoji).
var scissors = 'scissors ✂️';
var paper = 'paper 📃';
var stone = 'stone 💎';

// Initialise an object that converts the user's input to formatted text.
var itemMap = {
  scissors,
  paper,
  stone
};

// Initialise an object that defines game rules (key beats value).
var winMap = {
  [scissors]: paper,
  [paper]: stone,
  [stone]: scissors
};

// Define a function that randomly chooses scissors, paper or stone.
var chooseRandomItem = function () {
  var itemNum = Math.floor(Math.random() * 3);

  if (itemNum == 1) {
    return scissors;
  }
  if (itemNum == 2) {
    return paper;
  }
  return stone;
};

// Define a function that determines the user's game result (win, lose or draw).
var determineResult = function (userChoice, programChoice, reversed) {
  if (userChoice == programChoice) {
    return "It's a draw! No one wins!";
  }
  if ((!reversed && winMap[userChoice] == programChoice) ||
    (reversed && winMap[userChoice] != programChoice)) {
    return "You won! Congrats!";
  }
  return "You lost! Bummer.";
};

// Define the main function.
var main = function (input) {
  /* Remove all 'reversed' and whitespace symbols from the user's input, then retrieve its value 
  (formatted text if valid) from itemMap. If invalid, undefined will be assigned to userChoice. */
  var userChoice = itemMap[input.replace(/reversed|\s/g, '')];

  // If the user's input is invalid (userChoice equals undefined), prompt the user.
  if (!userChoice) {
    return "There are only 3 input options: scissors, paper or stone. Please try again.";
  }

  // Initialise programChoice variable as a random item by invoking the chooseRandomItem() function.
  var programChoice = chooseRandomItem();

  // Initialise output variable as the start of game prompt, both computer's and user's choices.
  var output = `The computer chose ${programChoice}.<br>You chose ${userChoice}.<br><br>`;

  // Check if the user's input contains 'reversed'. If so, add a notice to the output variable.
  var reversed = input.includes('reversed');
  if (reversed) {
    output += "Game rules are reversed! 😜<br><br>";
  }

  // Return output combined with the user's game result and the end of game prompt.
  return output + determineResult(userChoice, programChoice, reversed) +
    "<br><br>Now you can type scissors, paper or stone to play another round!";
};
