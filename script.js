// 1. Generate random object: Scissors, Paper or Stone
var rollScissorPaperStone = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var signRolled = 0;
  if (randomInteger == 0) {
    signRolled = `scissors`;
  }
  if (randomInteger == 1) {
    signRolled = `paper`;
  }
  if (randomInteger == 2) {
    signRolled = `stone`;
  }
  return signRolled;
};

const signs = [`scissors`, `paper`, `stone`];

var main = function (input) {
  var randomSign = rollScissorPaperStone();
  console.log(`computer generated ${randomSign}`);
  var myOutputValue = `Uh oh, I cannot read your message. <br>
  Please type one of the 3 options: scissors, paper or stone`;

  // Outcome 1: Player and Computer draw
  if (input == randomSign) {
    myOutputValue = `You chose ${input}. <br> The computer chose ${randomSign}. <br> It is a draw. <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // Outcome 2: Player lost, Computer wins
  if (
    (input == signs[0] && randomSign == signs[2]) ||
    (input == signs[1] && randomSign == signs[0]) ||
    (input == signs[2] && randomSign == signs[1])
  ) {
    myOutputValue = `You chose ${input}. <br> Computer chose ${randomSign}. <br> Too bad. <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }

  // Outcome 3: Player wins, Computer lost
  if (
    (input == signs[0] && randomSign == signs[1]) ||
    (input == signs[1] && randomSign == signs[2]) ||
    (input == signs[2] && randomSign == signs[0])
  ) {
    myOutputValue = `You chose ${input}. Computer chose ${randomSign}. <br> You won. <br> Now you can type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
