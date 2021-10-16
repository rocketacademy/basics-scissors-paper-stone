var sciSSorsPaperStone = function () {
  var randomNumber = Math.floor(Math.random() * 3 + 1);
  //console.log(sciSSorsPaperStone);
  if (randomNumber == 1) {
    return "scissor";
  }
  if (randomNumber == 2) {
    return "paper";
  }
  if (randomNumber == 3) {
    return "stone";
  }
};

var sciSSor = "scissor";
var stoNe = "stone";
var paPer = "paper";
var revsciSSor = "reversed scissor";
var revstoNe = "reversed stone";
var revpaPer = "reversed paper";

var emotiCon = function (object) {
  if (object == sciSSor || object == revsciSSor) return " ✂️";
  if (object == paPer || object == revpaPer) return " 🗒";
  if (object == stoNe || object == revstoNe) return " 🪨";
};

var main = function (input) {
  var comSPS = sciSSorsPaperStone();
  var playerObject = emotiCon(input);
  var computerObject = emotiCon(comSPS);
  var myOutputValue = 'Please type "scissor" , "paper" or "stone" to play';
  if (
    input == comSPS ||
    (input == revstoNe && comSPS == "stone") ||
    (input == revsciSSor && comSPS == "scissor") ||
    (input == revpaPer && comSPS == "paper")
  ) {
    myOutputValue = `you chose ${input} <br> ${playerObject} <br>Computer chose ${comSPS} <br> ${computerObject} <br>Its a draw`;
  }
  if (
    (input == sciSSor && comSPS == "paper") ||
    (input == stoNe && comSPS == "scissor") ||
    (input == paPer && comSPS == "stone") ||
    (input == revsciSSor && comSPS == "stone") ||
    (input == revstoNe && comSPS == "paper") ||
    (input == revpaPer && comSPS == "scissor")
  ) {
    myOutputValue = `you chose ${input} <br> ${playerObject} <br>Computer chose ${comSPS} <br> ${computerObject} <br> You Win`;
  }
  if (
    (input == sciSSor && comSPS == "stone") ||
    (input == stoNe && comSPS == "paper") ||
    (input == paPer && comSPS == "scissor") ||
    (input == revsciSSor && comSPS == "paper") ||
    (input == revstoNe && comSPS == "scissor") ||
    (input == revpaPer && comSPS == "stone")
  ) {
    myOutputValue = `you chose ${input} <br> ${playerObject} <br> Computer chose ${comSPS} <br> ${computerObject} <br> You Lose`;
  }
  return myOutputValue;
};
