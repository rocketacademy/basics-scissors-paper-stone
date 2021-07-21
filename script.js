// SPS game = Scissors Paper Stone

var currentGameMode = "waiting for user name";
var userName = "";
var playCount = 0;
var userWinCount = 0;
var userLossCount = 0;
var drawCount = 0;
var recentWinner = "";

// assigning each number to an object
var randomItem = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randomNumber = randomInteger + 1;
  var randomItem = "";

  console.log("random item:");
  if (randomNumber == 1) {
    randomItem = "scissors";
  }
  if (randomNumber == 2) {
    randomItem = "paper";
  }
  if (randomNumber == 3) {
    randomItem = "stone";
  }
  console.log(randomItem);
  return randomItem;
};

// NORMAL mode
var playNormalMode = function (userName, input) {
  currentGameMode = "scissor paper stone game";
  myOutputValue = `Welcome, Player ${userName}! <br> You are now in NORMAL mode of scissor paper stone. <br> Please enter 'scissors', 'paper', or 'stone' to play the game.`;
  var computerChoose = randomItem();

  // assigning emojis to the icon
  var inputEmoji;
  if (input == "scissors") {
    inputEmoji = "✌";
  } else if (input == "paper") {
    inputEmoji = "✋";
  } else if (input == "stone") {
    inputEmoji = "✊";
  }
  var compEmoji;
  if (computerChoose == "scissors") {
    compEmoji = "✌";
  } else if (computerChoose == "paper") {
    compEmoji = "✋";
  } else if (computerChoose == "stone") {
    compEmoji = "✊";
  }

  // normal game mode logic
  // (In normal mode) if both parties choose the same object, it's a draw
  if (input == computerChoose) {
    userWinCount = userWinCount;
    userLossCount = userLossCount;
    drawCount = drawCount + 1;
    playCount = playCount + 1;
    myOutputValue = `It is a DRAW. <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer.`;
  } // (In normal mode) user beats computer when: scissors beats paper, paper beats stone, and stone beats scissors.
  else if (
    (input == "scissors" && computerChoose == "paper") ||
    (input == "paper" && computerChoose == "stone") ||
    (input == "stone" && computerChoose == "scissors")
  ) {
    userWinCount = userWinCount + 1;
    userLossCount = userLossCount;
    drawCount = drawCount;
    playCount = playCount + 1;
    myOutputValue = `You WIN! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer.`;
  } // (In normal mode) computer beats user when: scissors loses to stone, paper loses to scissors, and stone loses to paper.
  else if (
    (input == "scissors" && computerChoose == "stone") ||
    (input == "paper" && computerChoose == "scissors") ||
    (input == "stone" && computerChoose == "paper")
  ) {
    userWinCount = userWinCount;
    userLossCount = userLossCount + 1;
    drawCount = drawCount;
    playCount = playCount + 1;
    myOutputValue = `You LOSE! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer.`;
  }

  return myOutputValue;
};

// REVERSE mode
var playReverseMode = function (userName, input) {
  currentGameMode = "REVERSE scissor paper stone game";
  myOutputValue = `Welcome, Player ${userName}! <br> You are now in REVERSE mode of scissor paper stone. <br> Please enter 'scissors', 'paper', or 'stone' to play the game.`;
  var computerChoose = randomItem();

  // assigning emojis to the icon
  var inputEmoji;
  if (input == "scissors") {
    inputEmoji = "✌";
  } else if (input == "paper") {
    inputEmoji = "✋";
  } else if (input == "stone") {
    inputEmoji = "✊";
  }
  var compEmoji;
  if (computerChoose == "scissors") {
    compEmoji = "✌";
  } else if (computerChoose == "paper") {
    compEmoji = "✋";
  } else if (computerChoose == "stone") {
    compEmoji = "✊";
  }

  // reverse game mode logic
  // (In reverse mode) if both parties choose the same object, it's a draw
  if (input == computerChoose) {
    userWinCount = userWinCount;
    userLossCount = userLossCount;
    drawCount = drawCount + 1;
    playCount = playCount + 1;
    myOutputValue = `It is a DRAW. <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer. <br> You are currently in a REVERSE mode.`;
  } // (In reverse mode) user beats computer when: scissors beat stone, paper beats scissors, and stone beats paper.
  else if (
    (input == "scissors" && computerChoose == "stone") ||
    (input == "paper" && computerChoose == "scissors") ||
    (input == "stone" && computerChoose == "paper")
  ) {
    userWinCount = userWinCount + 1;
    userLossCount = userLossCount;
    drawCount = drawCount;
    playCount = playCount + 1;
    myOutputValue = `You WIN! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer. <br> You are currently in a REVERSE mode.`;
  } // (In reverse mode) computer beats user when: scissors loses to  paper, paper loses to stone, and stone loses to scissors.
  else if (
    (input == "scissors" && computerChoose == "paper") ||
    (input == "paper" && computerChoose == "stone") ||
    (input == "stone" && computerChoose == "scissors")
  ) {
    userWinCount = userWinCount;
    userLossCount = userLossCount + 1;
    drawCount = drawCount;
    playCount = playCount + 1;
    myOutputValue = `You LOSE! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Player ${userName}, you have played ${playCount} times. <br> You have ${userWinCount} wins, ${userLossCount} loses, and ${drawCount} draws with the computer. <br> You are currently in a REVERSE mode.`;
  }
  return myOutputValue;
};

// Korean Version
// most recent winner is the ultimate winner when there is a draw
var playKoreanMode = function (userName, input) {
  currentGameMode = "Korean version";
  myOutputValue = `Welcome, Player ${userName}! <br> You are now in KOREAN version of scissor paper stone. <br> Please enter 'scissors', 'paper', or 'stone' to play the game.`;
  var computerChoose = randomItem();

  // assigning emojis to the icon
  var inputEmoji;
  if (input == "scissors") {
    inputEmoji = "✌";
  } else if (input == "paper") {
    inputEmoji = "✋";
  } else if (input == "stone") {
    inputEmoji = "✊";
  }
  var compEmoji;
  if (computerChoose == "scissors") {
    compEmoji = "✌";
  } else if (computerChoose == "paper") {
    compEmoji = "✋";
  } else if (computerChoose == "stone") {
    compEmoji = "✊";
  }

  // korean mode logic
  // user win
  if (
    (input == "scissors" && computerChoose == "paper") ||
    (input == "paper" && computerChoose == "stone") ||
    (input == "stone" && computerChoose == "scissors")
  ) {
    recentWinner = "user";
    myOutputValue = `Player ${userName}, you win! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}.  <br> You need to play again and have draw to decide the ultimate winner.`;
  } // if computer wins
  else if (
    (input == "scissors" && computerChoose == "stone") ||
    (input == "paper" && computerChoose == "scissors") ||
    (input == "stone" && computerChoose == "paper")
  ) {
    recentWinner = "computer";
    myOutputValue = `Player ${userName}, you lose! <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}.  <br> You need to play again to decide the ultimate winner.`;
  } // if it's draw
  else if (input == computerChoose) {
    if (recentWinner == "") {
      recentWinner = "";
      myOutputValue = `It is a DRAW. <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Since no one wins the previous round, please play again.`;
    } else if (recentWinner == "user") {
      recentWinner = "";
      return (myOutputValue = `It is a DRAW. <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Since you are the recent winner, you WIN. <br> Congratulations Player ${userName}, you are the ultimate winner of muk-jji-ppa! `);
    } else if (recentWinner == "computer") {
      recentWinner = "";
      return (myOutputValue = `It is a DRAW. <br> You choose: ${input} ${inputEmoji}. <br> The computer chooses: ${computerChoose} ${compEmoji}. <br> Since the computer is the recent winner, you LOST muk-jji-ppa! `);
    }
  }
  return myOutputValue;
};

var main = function (input) {
  var myOutputValue = "";

  // first input user name
  if (input == "") {
    myOutputValue = "Please input your user name.";
    return myOutputValue;
  }
  if (currentGameMode == "waiting for user name") {
    userName = input;
    // now that we have the user name, pick the game mode: normal or reverse
    currentGameMode = "scissor paper stone game";
    myOutputValue = `Hello, Player ${userName}! <br> You can now pick between: normal mode, reverse mode , or even Korean version of scissor paper stone. <br> Please type in 'normal' or 'reverse' or 'korean' to play the game.`;
    return myOutputValue;
  } else if (input == "normal") {
    //normal mode
    currentGameMode = "scissor paper stone game";
  } else if (input == "reverse") {
    //reverse mode
    currentGameMode = "REVERSE scissor paper stone game";
  } else if (input == "korean") {
    //korean version
    currentGameMode = "Korean version";
  }
  if (input !== "scissors" && input !== "paper" && input !== "stone") {
    // only 3 input options, and ask user to try again
    myOutputValue = `ERROR! Invalid input. Please only type 'scissors', 'paper', or 'stone' to play another round!`;
  }
  if (currentGameMode == "scissor paper stone game") {
    myOutputValue = playNormalMode(userName, input);
  } else if (currentGameMode == "REVERSE scissor paper stone game") {
    myOutputValue = playReverseMode(userName, input);
  } else if (currentGameMode == "Korean version") {
    myOutputValue = playKoreanMode(userName, input);
  }

  return myOutputValue;
};
