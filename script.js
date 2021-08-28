
var main = function (input) {
  var randomDice = diceroll();
  var gameoption = diceoutput(randomDice);
  console.log (gameoption)
  if (input == gameoption) {
   
  var myOutputValue =
    "You chose  " +
    input +
    ", the computer chose was " +
    gameoption +
    " it's a draw.";
}
  if (gameoption == "scissors" && input == "stone" || gameoption == "paper" && input == "scissors" || gameoption == "stone" && input == "paper")
  
  {
    myOutputValue =
      "You chose  " +
       input +
      ", the computer chose was " +
    gameoption +
      ". You win";
  }
    if (gameoption == "stone" && input == "scissors" || gameoption == "scissors" && input == "paper" || gameoption == "paper" && input == "stone")  {
    myOutputValue =
      "You chose  " +
       input +
      ", the computer chose was " +
    gameoption +
      ". Computer win";
  }


if (input !== "stone")
if (input !== "scissors")
if (input !== "paper")
 {
    myOutputValue =
      "You chose  " +
       input +
      " there are only 3 input options avalibale, please try again.";
  }
  return myOutputValue;
};
var diceoutput = function (randomDice) {
  if (randomDice == 1) {
    return "scissors";
  }
  if (randomDice == 2) {
    return "paper";
  }
  if (randomDice == 3) {
    return "stone";
  }
};
var diceroll = function () {
  var randomNum = Math.random() * 3 + 1;
  var randomInteger = Math.floor(randomNum);
  return randomInteger;
};