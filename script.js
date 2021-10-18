//input "scissors", "paper", "stone"
//output "you chose" +input+ ". and the program chose" + randomchoice+ ". you win/lose."
//generate randomchoice using Math.random() and rounddown with Math.floor

var computerguess = function () {
  var randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  if (randomNum == 0) {
    return "scissors";
  }
  if (randomNum == 1) {
    return "paper";
  }
  return "stone";
};

var showplayercomputerSPS = function (playerSPS, computerSPS) {
  return "You picked " + playerSPS + ". The computer chose " + computerSPS;
};

var playerwins = function (playerSPS, computerSPS) {
  console.log("playerwins");
  return (
    (playerSPS == "scissors" && computerSPS == "paper") ||
    (playerSPS == "paper" && computerSPS == "stone") ||
    (playerSPS == "stone" && computerSPS == "scissors")
  );
};

var draw = function (playerSPS, computerSPS) {
  console.log("draw");
  return playerSPS == computerSPS;
};

var main = function (input) {
  var playerSPS = input;
  var computerSPS = computerguess();
  if (playerwins(playerSPS, computerSPS)) {
    return (
      showplayercomputerSPS +
      "you entered " +
      playerSPS +
      ", the computer has " +
      computerSPS +
      ". you win"
    );
  }

  if (draw(playerSPS, computerSPS)) {
    return (
      showplayercomputerSPS +
      "you entered " +
      playerSPS +
      ", the computer has " +
      computerSPS +
      ". it's a draw"
    );
  }
  return (
    showplayercomputerSPS +
    "you entered " +
    playerSPS +
    ", the computer has " +
    computerSPS +
    ". you lost"
  );
};
