var main = function (input) {
  //SPS PART 1, FAITH
  //assign user input to an integer between 1-3, representative of scissors paper stone
  // only 3 possible outcomes: win, lose, or draw

  if (input == "scissors" || input == "reverse scissors") {
    var inputNum = 1;
  }

  if (input == "stone" || input == "reverse stone") {
    inputNum = 2;
  }

  if (input == "paper" || input == "reverse paper") {
    inputNum = 3;
  }

  //if user input = stone:  3-2=1 (scissors,win), 2-3=-1 (paper,lose)
  // if user input = scissors: 1-3 = -2(paper,win), 1-2=-1(stone,lose)
  // if user input = paper: 3-2=1 (stone,win), 3-1=2 (scissors, lose)
  // draw outcome always ==
  // winning outcomes = 1,1,-2
  // losing outcomes = -1,-1,2

  // get random number that can be assigned to each scissors paper stone, that will represent program choice
  var randomFloat = Math.random() * 3;
  console.log(randomFloat);
  var resultInteger = Math.ceil(randomFloat);

  // output computer choice of SPS tagged from random generated integer
  if (resultInteger == 1) {
    computerChoice = "scissors";
  }
  if (resultInteger == 2) {
    computerChoice = "stone";
  }
  if (resultInteger == 3) {
    computerChoice = "paper";
  }

  // screening
  if (inputNum != 1 && inputNum != 2 && inputNum != 3) {
    var myOutputValue =
      "There are only 3 possible inputs: scissors, paper or stone. Please try again!";
  }

  // more comfortable: Reverse SPS

  if (inputNum - resultInteger == 1 || inputNum - resultInteger == -2) {
    myOutputValue = "You win!";
    var reverseOutput = "You lost!";
  }

  if (inputNum - resultInteger == 0) {
    myOutputValue = "It's a draw!";
    reverseOutput = "It's a draw!";
  }
  if (inputNum - resultInteger == -1 || inputNum - resultInteger == 2) {
    myOutputValue = "You lose!";
    reverseOutput = "You won!";
  }

  // setting up for reverse output based on input
  if (
    input == "reverse scissors" ||
    input == "reverse stone" ||
    input == "reverse paper"
  ) {
    myOutputValue = reverseOutput;
  }

  // more comfortable: Formatting
  var finalOutput = `The computer chose ${computerChoice}.<br>
  You chose ${input}.<br>
  ${myOutputValue}<br>`;

  return finalOutput;
};
