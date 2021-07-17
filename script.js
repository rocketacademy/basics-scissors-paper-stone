var main = function (input) {
  // ensure that player types the correct input//
  if (input != "scissors" || input != "paper" || input != "stone") return;
  ('Please type in either "scissors" , "paper", or "stone" to begin playing.');

  // list the 9 different scenarious//
  if (input == "scissors" && spsthrow == 1) return;
  ("You threw scissors and the computer threw scissors. Nobody won.");

  if (input == "scissors" && spsthrow == 2) return;
  ("You threw scissors and the computer threw paper. You won.");

  if (input == "scissors" && spsthrow == 3) return;
  ("You threw scissors and the computer threw rock. You lost.");

  if (input == "paper" && spsthrow == 1) return;
  ("You threw paper and the computer threw scissors. You lost.");

  if (input == "paper" && spsthrow == 2) return;
  ("You threw paper and the computer threw paper. Nobody won.");

  if (input == "paper" && spsthrow == 3)
    return "You threw paper and the computer threw rock. You won.";

  if (input == "stone" && spsthrow == 1) return;
  ("You threw rock and the computer threw scissors. You won.");

  if (input == "stone" && spsthrow == 2) return;
  ("You threw rock and the computer threw paper. You lost.");

  if (input == "stone" && spsthrow == 3) return;
  ("You threw rock and the computer threw rock. Nobody won.");
  return myOutputValue;
};

//create a random number generator from 1 to 3
var spsthrow = function () {
  var decimal = Math.random() * 3;
  var integer = Math.floor(decimal);
  var rand = integer + 1;
  return rand;
};
