var userCount = 0;
var computerCount = 0;
var bothDraw = 0;
var main = function (input) {
  // randomly chooses scissors, peper, or stone
  var userOption = input;
  console.log("userOption", userOption);
  var computerOption = computerChoice();
  console.log("computerOption", computerOption);

  var myOutputValue = `Hello ${input}, you can start by playing the game by inputting stone, paper, or scissors. Enjoy!`;

  // scissor beats paper, paper beats stone, stone beats scissors, draw
  // myOutputValue = user won, program won, or its a draw
  if (
    (userOption == "scissors" && computerOption == "paper") ||
    (userOption == "paper" && computerOption == "stone") ||
    (userOption == "stone" && computerOption == "scissors")
  ) {
    userCount = userCount + 1;
    myOutputValue =
      `The computer chose ` +
      computerOption +
      `. <br> Isabella picked ` +
      userOption +
      `. </br> <br> </br> Isabella wins! Congrats. <br> </br> So for Isabella, you've been winning ` +
      userCount +
      ` times. `;
  }
  if (
    (computerOption == "scissors" && userOption == "paper") ||
    (computerOption == "paper" && userOption == "stone") ||
    (computerOption == "stone" && userOption == "scissors")
  ) {
    computerCount = computerCount + 1;
    myOutputValue =
      `Computer won! Isabella's score is ` +
      userCount +
      `. Computer score is ` +
      computerCount +
      `. Draw count is ` +
      bothDraw +
      `.`;
  }

  if (userOption == computerOption) {
    bothDraw = bothDraw + 1;
    myOutputValue =
      `That was a tie! Isabella's score is ` +
      userCount +
      `. Computer score is ` +
      computerCount +
      `. Draw count is ` +
      bothDraw +
      `.`;
  }
  return myOutputValue;
};
// user inputs == scissors, paper or stone
// computer inputs == scissors, paper or stone
var computerChoice = function () {
  var randomNumber = Math.random() * 4;
  var randomInteger = Math.floor(randomNumber);
  var computerNumber = randomInteger;
  if (computerNumber == 1) {
    computerOption = "scissors";
  }
  if (computerNumber == 2) {
    computerOption = "paper";
  }
  if (computerNumber == 3) {
    computerOption = "stone";
  }
  return computerOption;
};
