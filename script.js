var Code01 = "PROJECT PART 1: SCISSORS PAPER STONE: PART 1-STANDARD MODE";

// random number generator

/* var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var main = function (input) {
  var gameHandRandom = randomNumber();
  var gameHand = readGameHandNmbr(gameHandRandom);

  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'.`;

  var myOutputValue = errorMessage;

  var judgement = function (playerHand, computerHand) {
    if (playerHand == computerHand) {
      return "draw";
    }
    if (playerHand == "scissors" && computerHand == "stone") {
      return "lose";
    }
    if (playerHand == "scissors" && computerHand == "paper") {
      return "win";
    }
    if (playerHand == "paper" && computerHand == "scissors") {
      return "lose";
    }
    if (playerHand == "paper" && computerHand == "stone") {
      return "win";
    }
    if (playerHand == "stone" && computerHand == "paper") {
      return "lose";
    }
    if (playerHand == "stone" && computerHand == "scissors") {
      return "win";
    }
  };

  if (judgement(input, gameHand) == "draw") {
    myOutputValue = draw;
  }
  if (judgement(input, gameHand) == "lose") {
    myOutputValue = lose;
  }
  if (judgement(input, gameHand) == "win") {
    myOutputValue = win;
  }

  return myOutputValue + endingMessage;
}; */

//============================================================================================================================================================================

var Code02 = "PROJECT 1: SCISSORS PAPER STONE PART 1: REVERSED MODE";
/* 
var main = function (input) {
  var gameHand = readGameHandNmbr(randomNumber());
  var win = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;
  var lose = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;
  var draw = `The computer chose ${gameHand.toUpperCase()}.<br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> There are only 3 options: 'scissors', 'paper' or 'stone'.`;
  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or 'stone'. <br><br> '<i>If something doesn't look right, you could always look at its complement view.</i>`;

  var myOutputValue = errorMessage;

// Code Block for reversing
  if (input.toLowerCase() == "reversed scissors") {
    input = "paper";
  }
  if (input.toLowerCase() == "reversed paper") {
    input = "stone";
  }
  if (input.toLowerCase() == "reversed stone") {
    input = "scissors";
  }

//code Block for judging who wins
  if (
    (input.toLowerCase() == "scissors" && gameHand == "paper") ||
    (input.toLowerCase() == "paper" && gameHand == "stone") ||
    (input.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    myOutputValue = lose;
  }

  if (
    (input.toLowerCase() == "scissors" && gameHand == "stone") ||
    (input.toLowerCase() == "paper" && gameHand == "scissors") ||
    (input.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    myOutputValue = win;
  }

  if (input.toLowerCase() == gameHand) {
    myOutputValue = draw;
  }

  return myOutputValue + endingMessage;
};

// random number generator

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger + 1;
};

// read random Number to output  random GameHand
var readGameHandNmbr = function (gameHandNmbr) {
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
}; */

//============================================================================================================================================================================

var Code03 = "PROJECT 1: SCISSORS PAPER STONE;- PART 2 BASE- WIN-LOSE";
/* 
// read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;

var main = function (input) {
  var gameHand = genComputerHand();

  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                    Please only input from the following:<br>
                     'scissors', 'paper' or 'stone'.`;

  var draw = `The computer chose ${gameHand.toUpperCase()}.
              <br><br>You chose ${input.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `The computer chose ${gameHand.toUpperCase()}.
             <br><br>You chose ${input.toUpperCase()}.<br><br> ~You LOSE~`;

  var win = `The computer chose ${gameHand.toUpperCase()}.
             <br><br>You chose ${input.toUpperCase()}.<br><br> ***You WIN!***`;

  var myOutputValue = "";

  // code block for reversing
  /*   if (input.toLowerCase() == "reversed scissors") {
    input = "paper";
  }

  if (input.toLowerCase() == "reversed paper") {
    input = "stone";
  }

  if (input.toLowerCase() == "reversed stone") {
    input = "scissors";
  } */

//code Block for judging who wins
/* 
  if (Number.isNaN(Number(input)) == false) {
    myOutputValue = errorMessage;
  } 

  if (input.toLowerCase() == gameHand) {
    myOutputValue = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (input.toLowerCase() == "scissors" && gameHand == "stone") ||
    (input.toLowerCase() == "paper" && gameHand == "scissors") ||
    (input.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    myOutputValue = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (
    (input.toLowerCase() == "scissors" && gameHand == "paper") ||
    (input.toLowerCase() == "paper" && gameHand == "stone") ||
    (input.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    myOutputValue = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else {
    myOutputValue = errorMessage;
  }

  var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins-Losses <br>   ${nmbrOfWins} - ${nmbrOfLosses}<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  if (myOutputValue == errorMessage) {
    scoreDisplay = "<br>";
    endingMessage = "<br>";
  }

  return myOutputValue + scoreDisplay + endingMessage;
}; */

//============================================================================================================================================================================

var Code04 = "PROJECT 1: SCISSORS PAPER STONE;- PART 2 BASE- User Name Input";

/* // read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var currentMode = "waiting for username";
var userName = "";
var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;
var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;

var playJanKenPo = function (userName, userGuess) {
  var gameHand = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only input from the following:<br>
                  'scissors', 'paper' or 'stone'.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var messsageOutput = "";
  if (userGuess.toLowerCase() == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (userGuess.toLowerCase() == "scissors" && gameHand == "stone") ||
    (userGuess.toLowerCase() == "paper" && gameHand == "scissors") ||
    (userGuess.toLowerCase() == "stone" && gameHand == "paper")
  ) {
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (
    (userGuess.toLowerCase() == "scissors" && gameHand == "paper") ||
    (userGuess.toLowerCase() == "paper" && gameHand == "stone") ||
    (userGuess.toLowerCase() == "stone" && gameHand == "scissors")
  ) {
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else {
    messsageOutput = errorMessage;
  }

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br>___${nmbrOfWins} - ${nmbrOfLosses} ___<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  if (messsageOutput == errorMessage) {
    scoreDisplay = "<br>";
    endingMessage = "<br>";
  }

  return messsageOutput + scoreDisplay + endingMessage;
};

var main = function (input) {
  var myOutputValue = "";
  var welcomeMsg = `, welcome to the Normal Mode of Scissors, Paper, Stone. <br><br> Scissors > Paper > Stone and Stone > Scissors. <br><br> You get 1 point for every round won, no points are awarded for draws.`;
  if (currentMode == "waiting for username") {
    userName = input;
    currentMode = "JanKenPo";
    myOutputValue = "Hello " + userName + welcomeMsg + endingMessage;
  } else if (currentMode == "JanKenPo") {
    myOutputValue = playJanKenPo(userName, input);
  }

  return myOutputValue;
}; */

//============================================================================================================================================================================

var Code05 =
  "PROJECT 1: SCISSORS PAPER STONE;PART 2 - REVERSE MODE Selectable  More Comfortable -";

/* // read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var currentMode = "waiting for username";
var userName = "";
var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;
var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;
var gameMode = "normal";
var normalMode = `MODE: Normal Scissors Paper Stone<br><br>`;
var reverseMode = `MODE: ReVeRSed. etonS repaP srossicS <br><br>`;
var modeTitle = normalMode;

var playJanKenPo = function (userName, userGuess) {
  var gameHand = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only input from the following:<br>
                  'scissors', 'paper' or 'stone'.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var reverseModeWarning =
    ">>>>>>>>> REVERSE MODE ACTIVE<br><br> please type 'scissors', 'paper' or stone";

  var normalModeWarning =
    ">>>>>>>>> Revert to Normal Mode <br><br> please type 'scissors', 'paper' or stone";

  var messsageOutput = "";

  if (userGuess.toLowerCase() == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "scissors") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "paper")
  ) {
    modeTitle = normalMode;
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "paper") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "scissors")
  ) {
    modeTitle = normalMode;
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else if (userGuess.toLowerCase() == "reverse") {
    gameMode = "reverse";
    messsageOutput = reverseModeWarning;
  } else if (
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "stone") ||
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "scissors") ||
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "paper")
  ) {
    modeTitle = reverseMode;
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
  } else if (
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "paper") ||
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "stone") ||
    (gameMode == "reverse" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "scissors")
  ) {
    modeTitle = reverseMode;
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
  } else if (userGuess.toLowerCase() == "normal") {
    gameMode = "normal";
    messsageOutput = normalModeWarning;
  } else {
    messsageOutput = errorMessage;
  }

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br> *** ${nmbrOfWins} - ${nmbrOfLosses} ***<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  if (
    messsageOutput == errorMessage ||
    messsageOutput == reverseModeWarning ||
    messsageOutput == normalModeWarning
  ) {
    scoreDisplay = "<br>";
    endingMessage = "<br>";
  }

  return modeTitle + messsageOutput + scoreDisplay + endingMessage;
};

var main = function (input) {
  var myOutputValue = "";
  var welcomeMsg = `, welcome to the Normal Mode of Scissors, Paper, Stone. <br><br> Scissors > Paper > Stone and Stone > Scissors. <br><br> You get 1 point for every round won, no points are awarded for draws. <br><br> Type '<i>reverse</i>' to enable reverse mode and '<i>normal</i>' to go back to normal mode. `;
  if (currentMode == "waiting for username") {
    userName = input;
    currentMode = "JanKenPo";
    myOutputValue = "Hello " + userName + welcomeMsg + endingMessage;
  } else if (currentMode == "JanKenPo") {
    myOutputValue = playJanKenPo(userName, input);
  }
  return myOutputValue;
};
 */
//============================================================================================================================================================================

var Code06 =
  "PROJECT 1: SCISSORS PAPER STONE;PART 2 - KOREAN Mode /Normal Mode selectable -";
/*
// read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

var runInstance = 0;
var currentMode = "waiting for username";
var userName = "";
var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;
var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;
var gameMode = "normal";
var normalMode = `MODE: Normal Scissors Paper Stone<br><br>`;
var koreanMode = `MODE: KOREAN / MUK-JJU-PPA <br><br>`;
var modeTitle = normalMode;
var winner = "";
var prevWinner = "";

var playJanKenPo = function (userName, userGuess) {
  var runInstance = runInstance + 1;
  var gameHand = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only input from the following:<br>
                  'scissors', 'paper' or 'stone'.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var tryAgain = `<br><br>Please Try Again`;

  var koreanModeWarning =
    ">>>>>>>>> KOREAN / MUK-JJU-PPA <br><br> please type 'scissors', 'paper' or stone";

  var normalModeWarning =
    ">>>>>>>>> Revert to Normal Mode <br><br> please type 'scissors', 'paper' or stone";

  var koreanTryAgain = `Attacker = ${prevWinner}. <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ATTACK FAILED, please Try Again`;

  var koreanWin = `Attacker = ${prevWinner}.  <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var messsageOutput = "";

  if (gameMode == "normal" && userGuess.toLowerCase() == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "scissors") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "paper")
  ) {
    modeTitle = normalMode;
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
    prevWinner = "Computer";
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "paper") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "scissors")
  ) {
    modeTitle = normalMode;
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
    prevWinner = userName;
  } else if (userGuess.toLowerCase() == "korean") {
    gameMode = "korean";
    messsageOutput = koreanModeWarning;
  } else if (gameMode == "korean" && userGuess.toLowerCase() != gameHand) {
    modeTitle = koreanMode;
    messsageOutput = koreanTryAgain;
  } else if (
    gameMode == "korean" &&
    userGuess.toLowerCase() == gameHand &&
    prevWinner == "Computer"
  ) {
    modeTitle = koreanMode;
    messsageOutput = lose;
    prevWinner = "Computer";
    nmbrOfWins = nmbrOfWins + 1;
  } else if (
    gameMode == "korean" &&
    userGuess.toLowerCase() == gameHand &&
    prevWinner == userName
  ) {
    modeTitle = koreanMode;
    messsageOutput = koreanWin;
    prevWinner = userName;
    nmbrOfWins = nmbrOfWins + 1;
  } else if (gameMode == "korean" && userGuess.toLowerCase() == "normal") {
    gameMode = "normal";
    messsageOutput = normalModeWarning;
  } else if (gameMode == "normal" && userGuess.toLowerCase() == "normal") {
    gameMode = "normal";
    messsageOutput = errorMessage;
  }

  console.log("prevWinner=");
  console.log(prevWinner);

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br> *** ${nmbrOfWins} - ${nmbrOfLosses} ***<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  var prevWinnerDisplay = `<br>Winner of Most Recent Round = ${prevWinner}<br>`;

  if (messsageOutput == errorMessage) {
    scoreDisplay = "";
    prevWinnerDisplay = "";
    endingMessage = "";
  } else if (
    messsageOutput == koreanModeWarning ||
    messsageOutput == normalModeWarning ||
    messsageOutput == tryAgain
  ) {
    scoreDisplay = "";
    endingMessage = "";
  } else if (messsageOutput == koreanTryAgain) {
    scoreDisplay = "";
    endingMessage = "";
  }

  return (
    modeTitle +
    messsageOutput +
    scoreDisplay +
    prevWinnerDisplay +
    endingMessage
  );
  // add line for most recent winner/previous winner and adjust the korean mode winning display?
};

var main = function (input) {
  var myOutputValue = "";
  var welcomeMsg = `, welcome to the Normal Mode of Scissors, Paper, Stone. <br><br> Scissors > Paper > Stone and Stone > Scissors. <br><br> You get 1 point for every round won, no points are awarded for draws. <br><br> Type '<i>korean</i>' to enable MUK-JJI-PPA mode and '<i>normal</i>' to go back to normal mode. `;
  if (currentMode == "waiting for username") {
    userName = input;
    currentMode = "JanKenPo";
    myOutputValue = "Hello " + userName + welcomeMsg + endingMessage;
  } else if (currentMode == "JanKenPo") {
    myOutputValue = playJanKenPo(userName, input);
  }
  return myOutputValue;
}; */

//============================================================================================================================================================================

var Code06 =
  "PROJECT 1: SCISSORS PAPER STONE;PART 2 - Korean / Normal Mode Computer Auto Mode Toggleable ";

// read random Number and OutputString for Computer's Hand.
var genComputerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var genPlayerHand = function (gameHandNmbr) {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var gameHandNmbr = randomInteger + 1;
  var gameHandPlayed = "";
  if (gameHandNmbr == 1) {
    gameHandPlayed = "scissors";
  }
  if (gameHandNmbr == 2) {
    gameHandPlayed = "paper";
  }
  if (gameHandNmbr == 3) {
    gameHandPlayed = "stone";
  }
  return gameHandPlayed;
};

var percentage = function (a, b) {
  var result = (a / b) * 100;
  return result;
};

//List of variables that need to be defined outside of all functions.
var runInstance = 0;
var currentMode = "waiting for username";
var userName = "";
var totalGamesPlayed = 0;
var nmbrOfWins = 0;
var nmbrOfLosses = 0;
var nmbrOfDraws = 0;
var endingMessage = `<br><br> To play the next game, please type 'scissors', 'paper' or stone'`;
var gameMode = "normal";
var normalMode = `MANUAL: Normal Scissors Paper Stone<br><br>`; // these two titles have to be here.
var koreanMode = `MANUAL: KOREAN / MUK-JJU-PPA <br><br>`; // these two titles have to be here.
var normalModeAuto = `AUTO:Normal Scissors Paper Stone<br><br>`; // these two titles have to be here.
var koreanModeAuto = `AUTO: KOREAN / MUK-JJU-PPA <br><br>`; //
var modeTitle = normalMode;
var winner = "";
var prevWinner = "";
var playerModeAutoMsg = `AUTOMATIC WORD SELECTION MODE ENGAGE >>> <br>
   ${userName}, you will not have to type in the name of your hand- it will be automatically generated once you click submit. (Any Words, Numbers type while in AUTO mode will not be read by the app. ) - <i>Good Luck.</i> <br><br> if you wish to disengage auto word selection mode, please type 'normal' any time.`;
var playerModeManualMsg = `REVERTING TO MANUAL INPUT  >>> <br>
   ${userName}, please type in 'scissors', 'paper' or 'stone' for your next hand.`;

var playJanKenPo = function (userName, userGuess) {
  var runInstance = runInstance + 1;
  var gameHand = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only input from the following:<br>
                  'scissors', 'paper' or 'stone'.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${userGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var tryAgain = `<br><br>Please Try Again`;

  var koreanModeWarning =
    ">>>>>>>>> KOREAN / MUK-JJU-PPA <br><br> please type 'scissors', 'paper' or stone";

  var normalModeWarning =
    ">>>>>>>>> Revert to Normal Mode <br><br> please type 'scissors', 'paper' or stone";

  var koreanTryAgain = `Attacker = ${prevWinner}. <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ATTACK FAILED, please Try Again`;

  var koreanWin = `Attacker = ${prevWinner}.  <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${userGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var messsageOutput = "";

  if (gameMode == "normal" && userGuess.toLowerCase() == "korean") {
    gameMode = "korean";
    messsageOutput = koreanModeWarning;
  } else if (gameMode == "korean" && userGuess.toLowerCase() == "normal") {
    gameMode = "normal";
    messsageOutput = normalModeWarning;
  } else if (gameMode == "normal" && userGuess.toLowerCase() == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "scissors") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "paper")
  ) {
    modeTitle = normalMode;
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
    prevWinner = "Computer";
  } else if (
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "scissors" &&
      gameHand == "paper") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "paper" &&
      gameHand == "stone") ||
    (gameMode == "normal" &&
      userGuess.toLowerCase() == "stone" &&
      gameHand == "scissors")
  ) {
    modeTitle = normalMode;
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
    prevWinner = userName;
  } else if (gameMode == "korean" && userGuess.toLowerCase() != gameHand) {
    modeTitle = koreanMode;
    messsageOutput = koreanTryAgain;
  } else if (
    gameMode == "korean" &&
    userGuess.toLowerCase() == gameHand &&
    prevWinner == "Computer"
  ) {
    modeTitle = koreanMode;
    messsageOutput = lose;
    prevWinner = "Computer";
    nmbrOfWins = nmbrOfWins + 1;
  } else if (
    gameMode == "korean" &&
    userGuess.toLowerCase() == gameHand &&
    prevWinner == userName
  ) {
    modeTitle = koreanMode;
    messsageOutput = koreanWin;
    prevWinner = userName;
    nmbrOfWins = nmbrOfWins + 1;
  } else {
    messsageOutput = errorMessage;
  }
  console.log("Current Game Mode = ");
  console.log(gameMode);
  console.log("prevWinner=");
  console.log(prevWinner);

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br> *** ${nmbrOfWins} - ${nmbrOfLosses} ***<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  var prevWinnerDisplay = `<br>Winner of Most Recent Round = ${prevWinner}<br>`;

  if (messsageOutput == errorMessage) {
    scoreDisplay = "";
    prevWinnerDisplay = "";
    endingMessage = "";
  } else if (
    messsageOutput == koreanModeWarning ||
    messsageOutput == normalModeWarning ||
    messsageOutput == tryAgain
  ) {
    scoreDisplay = "";
    endingMessage = "";
  } else if (messsageOutput == koreanTryAgain) {
    scoreDisplay = "";
    endingMessage = "";
  }

  return (
    modeTitle +
    messsageOutput +
    scoreDisplay +
    prevWinnerDisplay +
    endingMessage
  );
  // add line for most recent winner/previous winner and adjust the korean mode winning display?
};

var playAutoJKP = function (userName, userGuess) {
  modeTitle = normalModeAuto;
  var runInstance = runInstance + 1;
  var gameHand = genComputerHand();
  autoGuess = genComputerHand();
  var errorMessage = `xxxxxxxxx INPUT ERROR xxxxxxxxxx. <br><br> 
                ${userName} please only click the Submit button.`;

  var draw = `Computer chose ${gameHand.toUpperCase()}.
          <br><br>${userName} chose ${autoGuess.toUpperCase()}.<br><br> =It's a DRAW!=`;

  var lose = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${autoGuess.toUpperCase()}.<br><br> ~${userName} LOSES~`;

  var win = `Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${autoGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var tryAgain = `<br><br>Please Try Again`;

  var koreanModeWarning =
    ">>>>>>>>> KOREAN / MUK-JJU-PPA <br><br> please hit 'Submit' button to automatically select 'scissors', 'paper' or stone";

  var normalModeWarning =
    ">>>>>>>>> Revert to Normal Mode <br><br> please hit 'Submit' button to automatically select 'scissors', 'paper' or stone";

  var koreanTryAgain = `Attacker = ${prevWinner}. <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${autoGuess.toUpperCase()}.<br><br> ATTACK FAILED, please Try Again`;

  var koreanWin = `Attacker = ${prevWinner}.  <br><br>Computer chose ${gameHand.toUpperCase()}.
          <br>${userName} chose ${autoGuess.toUpperCase()}.<br><br> ***${userName} WINS!***`;

  var messsageOutput = "";

  if (userGuess.toLowerCase() == "manual") {
    currentMode = "JanKenPo";
    messsageOutput = playerModeManualMsg;
  } else if (userGuess.toLowerCase() == "auto") {
    messsageOutput = playerModeAutolMsg;
  } else if (userGuess.toLowerCase() == "korean") {
    gameMode = "korean";
    messsageOutput = koreanModeWarning;
  } else if (gameMode == "korean" && userGuess.toLowerCase() == "normal") {
    gameMode = "normal";
    messsageOutput = normalModeWarning;
  } else if (gameMode == "korean" && autoGuess != gameHand) {
    modeTitle = koreanModeAuto;
    messsageOutput = koreanTryAgain;
  } else if (
    gameMode == "korean" &&
    autoGuess == gameHand &&
    prevWinner == "Computer"
  ) {
    modeTitle = koreanModeAuto;
    messsageOutput = lose;
    prevWinner = "Computer";
    nmbrOfWins = nmbrOfWins + 1;
  } else if (
    gameMode == "korean" &&
    autoGuess == gameHand &&
    prevWinner == userName
  ) {
    modeTitle = koreanModeAuto;
    messsageOutput = koreanWin;
    prevWinner = userName;
    nmbrOfWins = nmbrOfWins + 1;
  } else if (gameMode == "normal" && autoGuess == gameHand) {
    messsageOutput = draw;
    nmbrOfDraws = nmbrOfDraws + 1;
  } else if (
    (gameMode == "normal" && autoGuess == "scissors" && gameHand == "stone") ||
    (gameMode == "normal" && autoGuess == "paper" && gameHand == "scissors") ||
    (gameMode == "normal" && autoGuess == "stone" && gameHand == "paper")
  ) {
    modeTitle = normalModeAuto;
    messsageOutput = lose;
    nmbrOfLosses = nmbrOfLosses + 1;
    prevWinner = "Computer";
  } else if (
    (gameMode == "normal" && autoGuess == "scissors" && gameHand == "paper") ||
    (gameMode == "normal" && autoGuess == "paper" && gameHand == "stone") ||
    (gameMode == "normal" && autoGuess == "stone" && gameHand == "scissors")
  ) {
    modeTitle = normalModeAuto;
    messsageOutput = win;
    nmbrOfWins = nmbrOfWins + 1;
    prevWinner = userName;
  } else {
    messsageOutput = errorMessage;
  }

  console.log("Current Game Mode = ");
  console.log(gameMode);
  console.log("prevWinner=");
  console.log(prevWinner);

  var totalGamesPlayed = nmbrOfDraws + nmbrOfLosses + nmbrOfWins;

  var scoreDisplay = `<br><br> Wins - Losses <br> *** ${nmbrOfWins} - ${nmbrOfLosses} ***<br>Number of ties(draw) = ${nmbrOfDraws}<br>Number of Games Played = ${totalGamesPlayed}<br> Win Percentage =${percentage(
    nmbrOfWins,
    totalGamesPlayed
  ).toFixed(1)}% . `;

  var prevWinnerDisplay = `<br>Winner of Most Recent Round = ${prevWinner}<br>`;

  if (messsageOutput == playerModeManualMsg) {
    modeTitle = "";
    scoreDisplay = "";
    prevWinnerDisplay = "";
    endingMessage = "";
  } else if (messsageOutput == errorMessage) {
    scoreDisplay = "";
    prevWinnerDisplay = "";
    endingMessage = "";
  } else if (
    messsageOutput == koreanModeWarning ||
    messsageOutput == normalModeWarning ||
    messsageOutput == tryAgain
  ) {
    scoreDisplay = "";
    endingMessage = "";
  } else if (messsageOutput == koreanTryAgain) {
    scoreDisplay = "";
    endingMessage = "";
  }

  return (
    modeTitle +
    messsageOutput +
    scoreDisplay +
    prevWinnerDisplay +
    endingMessage
  );
  // add line for most recent winner/previous winner and adjust the korean mode winning display?
};

var main = function (input) {
  var myOutputValue = "";
  var welcomeMsg = `, welcome to the Normal Mode of Scissors, Paper, Stone. <br><br> Scissors > Paper > Stone and Stone > Scissors. <br><br> You get 1 point for every round won, no points are awarded for draws. <br><br> Type '<i>korean</i>' to enable MUK-JJI-PPA mode and '<i>normal</i>' to go back to normal mode. <br><br> Type '<i>auto</i>' to enable automatic input for your choice and '<i>normal</i>' to revert to manual input mode at any stage. `;
  if (currentMode == "waiting for username") {
    userName = input;
    currentMode = "JanKenPo";
    myOutputValue = "Hello " + userName + welcomeMsg + endingMessage;
  } else if (currentMode == "JanKenPo" && input.toLowerCase() == "auto") {
    currentMode = "AutoJKP";
    myOutputValue = playerModeAutoMsg;
  } else if (currentMode == "AutoJKP") {
    myOutputValue = playAutoJKP(userName, input);
  } else if (input.toLowerCase() == "manual") {
    currentMode = "JanKenPo";
    myOutputValue = playerModeManualMsg;
  } else if (currentMode == "JanKenPo") {
    myOutputValue = playJanKenPo(userName, input);
  }
  console.log("Currrent Mode=");
  console.log(currentMode);
  return myOutputValue;
};

//============================================================================================================================================================================
