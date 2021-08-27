var rock = "stone";
var paper = "paper";
var scissors = "scissors";
var reversed_rock = "reversed stone";
var reversed_paper = "reversed paper";
var reversed_scissors = "reversed scissors";

var randomOutput = function () {
  var randomInteger = Math.floor(Math.random() * 3);
  console.log(randomInteger);
  if (randomInteger == 0) return rock;
  if (randomInteger == 1) return paper;
  if (randomInteger == 2) return scissors;
};

var programStatus = function (input, computer) {
  if (input == paper && computer == rock) return true;
  if (input == scissors && computer == paper) return true;
  if (input == rock && computer == scissors) return true;
  if (input == reversed_rock && computer == paper) return true;
  if (input == reversed_paper && computer == scissors) return true;
  if (input == reversed_scissors && computer == rock) return true;
  return false;
};

var programDraw = function (input, computer) {
  if (input == computer) return true;
  if (input == reversed_rock && computer == rock) return true;
  if (input == reversed_paper && computer == paper) return true;
  if (input == reversed_scissors && computer == scissors) return true;
};

var icon = function (string) {
  if (string == rock || string == reversed_rock) return "💎";
  if (string == paper || string == reversed_paper) return "📃";
  if (string == scissors || string == reversed_scissors) return "✂️";
};

var message1 = function (player, computer, specialMessage) {
  var iconComputer = icon(computer);
  var iconPlayer = icon(player);
  return `The computer chose ${computer} ${iconComputer}. <br> You chose ${player} ${iconPlayer}. <br><br> ${specialMessage}. <br><br> Now you can type "scissors" "paper" or "stone" to play another round!`;
};

var main = function (input) {
  var player = input;
  var computer = randomOutput();
  var message = function (player, computer) {
    var status = programStatus(player, computer);
    var drawStatus = programDraw(player, computer);
    if (drawStatus == true) return "It's a draw";
    if (status == true) return "You win!";
    return " You lose! Bummer.";
  };
  var specialMessage = message(player, computer);
  return message1(player, computer, specialMessage);
};
