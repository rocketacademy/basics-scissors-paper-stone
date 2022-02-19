// global variables
var winCount = 0;
var playCount = 0;
var gameMode = "Username Input";
var userName = "";
var modeChangeFlag = 0;
var lastWinner = "";
var lastKoreanWinner = "";

var main = function (input) {
  console.log(gameMode);
  var myOutputValue = "";
  if (gameMode == "Username Input") {
    userName = input;
    gameMode = "SPS mode";
    return (
      " Hello " +
      userName +
      "! Please type Scissors, Paper or Stone to play the game"
    );
  }

  modeChangeChecker(input);
  if (modeChangeFlag == 1) {
    modeChangeFlag = 0;
    return `Current mode is ${gameMode}`;
  }

  // plays game based on mode
  if (gameMode == "SPS mode") {
    myOutputValue = playGame(input.toLowerCase().trim(), SPS());
  }
  if (gameMode == "Reverse mode") {
    myOutputValue = playReversedGame(input, SPS());
  }
  if (gameMode == "Computer mode") {
    myOutputValue = playGame(SPS(), SPS());
  }
  if (gameMode == "Korean mode") {
    if (lastKoreanWinner == "") {
      myOutputValue = playKoreanGame(input, SPS());
    } else if (lastKoreanWinner == userName) {
      myOutputValue = playKoreanGame(input, SPS());
      if (lastKoreanWinner == "Draw") {
        winCount++;
        playCount++;
        myOutputValue +=
          " You won the Korean game <br>" +
          winRateMessage(winCount, playCount, userName);
        lastKoreanWinner = "";
      }
    } else if (lastKoreanWinner == "Computer") {
      myOutputValue = playKoreanGame(input, SPS());
      if (lastKoreanWinner == "Draw") {
        playCount++;
        myOutputValue +=
          " You lost the Korean game <br>" +
          winRateMessage(winCount, playCount, userName);
        lastKoreanWinner = "";
      }
    } else if (lastKoreanWinner == "Draw") {
      myOutputValue = playKoreanGame(input, SPS());
    }
    console.log(lastKoreanWinner);
  }

  return myOutputValue;
};

//function to generate random choice
function SPS() {
  const hands = ["scissors", "paper", "stone"];
  return hands[Math.floor(Math.random() * 3)];
}

// to decide on who won the game
function playGame(player, computer) {
  if (player == computer) {
    return draw(player, computer);
  } else if (player == "scissors") {
    if (computer == "stone") {
      return lose(player, computer);
    } else if (computer == "paper") {
      return win(player, computer);
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      return lose(player, computer);
    } else if (computer == "stone") {
      return win(player, computer);
    }
  } else if (player == "stone") {
    if (computer == "paper") {
      return lose(player, computer);
    } else if (computer == "scissors") {
      return win(player, computer);
    }
  } else {
    return "Please enter only scissors,paper or stone";
  }
}

// adds some cute emoji to messages
function cuteSelector(input) {
  if (input == "paper") {
    return "🖐";
  } else if (input == "scissors") {
    return "✌";
  } else if (input == "stone") {
    return "✊";
  }
}

//winning message
function win(player, computer) {
  winCount++;
  playCount++;
  lastWinner = userName;
  return `You won! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(
    computer
  )}. <br>${winRateMessage(winCount, playCount, userName)}`;
}

//losing message
function lose(player, computer) {
  playCount++;
  lastWinner = "Computer";
  return `You lost! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(computer)}.
  <br>${winRateMessage(winCount, playCount, userName)}`;
}

//draw message
function draw(player, computer) {
  playCount++;
  lastWinner = "Draw";
  return `Draw! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(
    computer
  )}.<br>${winRateMessage(winCount, playCount, userName)} `;
}

//function to determine who wins the reversed game
function playReversedGame(player, computer) {
  if (player == computer) {
    return draw(player, computer);
  } else if (player == "scissors") {
    if (computer == "stone") {
      return win(player, computer);
    } else if (computer == "paper") {
      return lose(player, computer);
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      return win(player, computer);
    } else if (computer == "stone") {
      return lose(player, computer);
    }
  } else if (player == "stone") {
    if (computer == "paper") {
      return win(player, computer);
    } else if (computer == "scissors") {
      return lose(player, computer);
    }
  } else {
    return "Please enter only scissors,paper or stone";
  }
}
// function to vary the output message based on win rate
function winRateMessage(wins, plays, name) {
  let winrate = wins / plays;
  let outputMessage = "";

  if (winrate >= 0.75) {
    outputMessage = `Good job ${name}, you have won ${wins} out of ${plays} times`;
  } else if (winrate <= 0.25) {
    outputMessage = `Try harder ${name}, you have won ${wins} out of ${plays} times`;
  } else {
    outputMessage = `You have won ${wins} out of ${plays} times`;
  }
  return outputMessage;
}

// checks whether mode change is requested and initiates the change via modeChangeFlag
function modeChangeChecker(mode) {
  if (mode.toLowerCase().includes("normal")) {
    gameMode = "SPS mode";
    modeChangeFlag = 1;
    return "Normal mode. Enter Scissors,Paper or Stone to play";
  } else if (mode.toLowerCase().includes("reverse")) {
    gameMode = "Reverse mode";
    modeChangeFlag = 1;
    return "Reverse mode. Enter Scissors,Paper or Stone to play";
  } else if (mode.toLowerCase().includes("computer")) {
    gameMode = "Computer mode";
    modeChangeFlag = 1;
    return "Computer mode. Press submit button to play";
  } else if (mode.toLowerCase().includes("korean")) {
    gameMode = "Korean mode";
    modeChangeFlag = 1;
    return "Korean mode. ";
  }
}
// to settle the korean game
function playKoreanGame(player, computer) {
  if (player == computer) {
    lastKoreanWinner = "Draw";
    return `Draw! You chose ${player}${cuteSelector(
      player
    )} and the computer chose ${computer}${cuteSelector(computer)}`;
  } else if (player == "scissors") {
    if (computer == "stone") {
      lastKoreanWinner = "Computer";
      return `Lose! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    } else if (computer == "paper") {
      lastKoreanWinner = userName;
      return `Win! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      lastKoreanWinner = "Computer";
      return `Lose! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    } else if (computer == "stone") {
      lastKoreanWinner = userName;
      return `Win! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    }
  } else if (player == "stone") {
    if (computer == "paper") {
      lastKoreanWinner = "Computer";
      return `Lose! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    } else if (computer == "scissors") {
      lastKoreanWinner = userName;
      return `Win! You chose ${player}${cuteSelector(
        player
      )} and the computer chose ${computer}${cuteSelector(computer)}`;
    }
  } else {
    return "Please enter only scissors,paper or stone";
  }
}
