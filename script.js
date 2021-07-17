//create a random number generator from 1 to 3
var cthrow = function () {
  var randomdecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomdecimal);
  var scissorpaperstonevalue = randomInteger + 1;
  return scissorpaperstonevalue;
};
//player phase
var main = function (input) {
  var cputhrow = cthrow();
  // ensure that player types the correct input
  if (input != "scissors" && input != "paper" && input != "stone")
    var myOutputValue =
      'Please type in either "scissors" , "paper", or "stone" to begin playing.';
  // list the 9 different scenarious
  if (input == "scissors" && cputhrow == 1)
    var myOutputValue =
      "You threw scissors and the computer threw scissors. Nobody won.";
  if (input == "scissors" && cputhrow == 2)
    var myOutputValue =
      "You threw scissors and the computer threw paper. You won.";
  if (input == "scissors" && cputhrow == 3)
    var myOutputValue =
      "You threw scissors and the computer threw rock. You lost.";
  if (input == "paper" && cputhrow == 1)
    var myOutputValue =
      "You threw paper and the computer threw scissors. You lost.";
  if (input == "paper" && cputhrowno == 2)
    var myOutputValue =
      "You threw paper and the computer threw paper. Nobody won.";
  if (input == "paper" && cputhrow == 3)
    var myOutputValue = "You threw paper and the computer threw rock. You won.";
  if (input == "stone" && cputhrow == 1)
    var myOutputValue =
      "You threw rock and the computer threw scissors. You won.";
  if (input == "stone" && cputhrow == 2)
    var myOutputValue =
      "You threw rock and the computer threw paper. You lost.";
  if (input == "stone" && cputhrow == 3)
    var myOutputValue =
      "You threw rock and the computer threw rock. Nobody won.";
  return myOutputValue;
};
