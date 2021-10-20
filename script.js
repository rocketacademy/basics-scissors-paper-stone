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
var gamesCount = 0;
var userWonCount = 0;
var CompWonCount = 0;
var drawCount = 0;

var main = function (input) {
  var randomSign = rollScissorPaperStone();
  console.log(`computer generated ${randomSign}`);
  var myOutputValue = `Uh oh, I cannot read your message. <br>
  Please type one of the 3 options: scissors, paper or stone`;

  // Outcome 1: Player and Computer draw
  if (input == randomSign) {
    gamesCount += 1;
    drawCount += 1;
    myOutputValue = `You chose ${input}. <br> The computer chose ${randomSign}. <br> You drawed ${drawCount} times. <br> Type "scissors" "paper" or "stone" to play another round!`;
  }

  // Outcome 2: Player lost, Computer wins
  if (
    (input == signs[0] && randomSign == signs[2]) ||
    (input == signs[1] && randomSign == signs[0]) ||
    (input == signs[2] && randomSign == signs[1])
  ) {
    gamesCount += 1;
    CompWonCount += 1;
    myOutputValue = `You chose ${input}. <br> Computer chose ${randomSign}. <br> You lost ${CompWonCount} out of ${gamesCount} games, and drawed ${drawCount} times. Keep trying! <br> Type "scissors" "paper" or "stone" to play another round!`;
  }

  // Outcome 3: Player wins, Computer lost
  if (
    (input == signs[0] && randomSign == signs[1]) ||
    (input == signs[1] && randomSign == signs[2]) ||
    (input == signs[2] && randomSign == signs[0])
  ) {
    gamesCount += 1;
    userWonCount += 1;
    myOutputValue = `You chose ${input}. Computer chose ${randomSign}. <br> You won ${userWonCount} out of ${gamesCount} games, and drawed ${drawCount} times. Feeling lucky? <br> Type "scissors" "paper" or "stone" to play another round!`;
  }
  return myOutputValue;
};
