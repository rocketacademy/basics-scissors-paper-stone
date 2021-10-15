var main = function (input) {
  var computerOption = generateComputerOption();
  // setting variables to avoid typo
  var PAPER_OPTION = "paper";
  var SCISSOR_OPTION = "scissor";
  var STONE_OPTION = "stone";
  var REV_STONE = "reversed stone";
  var REV_PAPER = "reversed paper";
  var REV_SCISSOR = "reversed scissor";

  /// Reverse game
  // reversed winning conditions
  // paper beats scissor
  // stone beats paper
  // scissor beats stone

  if (
    (input == REV_SCISSOR && computerOption == STONE_OPTION) ||
    (input == REV_PAPER && computerOption == SCISSOR_OPTION) ||
    (input == REV_STONE && computerOption == PAPER_OPTION)
  ) {
    return (
      " The computer chose '" +
      computerOption +
      "' " +
      "<br>" +
      "You chose '" +
      input +
      "' " +
      "<br>" +
      " you won the reverse SPS game !"
    );
  }

  if (input == REV_PAPER || input == REV_SCISSOR || input == REV_STONE) {
    return (
      " The computer chose '" +
      computerOption +
      "'" +
      "<br>" +
      "You chose '" +
      input +
      "'" +
      "<br>" +
      " you lost the reverse SPS game! Bummer"
    );
  }

  // input validation
  if (
    input !== PAPER_OPTION &&
    input !== SCISSOR_OPTION &&
    input !== STONE_OPTION
  ) {
    return (
      " You chose '" +
      input +
      "', which is not a valid input option." +
      "<br>" +
      'There are only three valid input options "paper", "scissor" and "stone". Please try again! '
    );
  }
  var myOutputValue = "you lost! Bummer";

  console.log("you " + input);
  console.log("computer " + computerOption);

  // draw condition

  if (input == computerOption) {
    myOutputValue = "draw";
    console.log("draw condition " + myOutputValue);
  }

  // winning conditions
  // scissor beats paper
  // paper beats stone
  // stone beats scissor

  if (
    (input == PAPER_OPTION && computerOption == STONE_OPTION) ||
    (input == STONE_OPTION && computerOption == SCISSOR_OPTION) ||
    (input == SCISSOR_OPTION && computerOption == PAPER_OPTION)
  ) {
    myOutputValue = "You Won! Great";
    console.log("winning condition " + myOutputValue);
  }

  // display output in desired format
  var showOutput =
    " The computer chose " +
    computerOption +
    "<br>" +
    "You chose " +
    input +
    "<br>" +
    myOutputValue +
    "<br>" +
    'Now you can type "paper" 🧾, "scissor" ✂ or "stone" 🪨to play another round!';

  return showOutput;
};
// random generate : scissor paper stone

var generateComputerOption = function () {
  var RandomNo = Math.random() * 3;
  var randomSelection = Math.ceil(RandomNo);
  console.log(randomSelection);
  var PAPER_OPTION = "paper";
  var SCISSOR_OPTION = "scissor";
  var STONE_OPTION = "stone";
  if (randomSelection == 1) {
    return SCISSOR_OPTION;
  }
  if (randomSelection == 2) {
    return PAPER_OPTION;
  }

  return STONE_OPTION;
};
