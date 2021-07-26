var getRandomSelection = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "scissors";
  }
  if (randomNum == 1) {
    return "paper";
  }
  return "stone";
};

var userWin = 0;
var computerWin = 0;
var currentGameMode = "Enter username";
//var reverseGameMode = "Reverse";
// I have moved name of user here as suggested
// var nameOfUser = "";
var playerName = "";

var main = function (playerInput) {
  var computerInput = "";
  computerInput = getRandomSelection();
  console.log("player input", playerInput);
  console.log("computer input", computerInput);
  var myOutputValue = "";

  if (currentGameMode == "Enter username") {
    console.log("Current Game Mode", currentGameMode);
    playerName = playerInput;
    myOutputValue = `Hi ${playerInput}! <br> Welcome to the game! Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start the game. <br><br> OR <br> <br> Challenge yourself by typing "reverse" to try out a reverse game!`;
    currentGameMode = "Play Game";
    return myOutputValue;
  }

  if (currentGameMode == "Play Game") {
    console.log("current game mode", currentGameMode);

    if (playerInput == "reverse") {
      currentGameMode = "Reverse";
      myOutputValue = `You are now in reverse mode. Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start playing.`;
    } else if (
      playerInput != "scissors" &&
      playerInput != "paper" &&
      playerInput != "stone"
    ) {
      myOutputValue = `Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start the game. <br> <br> Let's get started!`;
    } else if (playerInput == computerInput) {
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}. <br> <br> It's a draw. <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Keep going!`;
    } else if (
      (playerInput == "scissors" && computerInput == "paper") ||
      (playerInput == "paper" && computerInput == "stone") ||
      (playerInput == "stone" && computerInput == "scissors")
    ) {
      userWin = userWin + 1;
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You won!  <br> <br> The current score will be you ${userWin} and computer ${computerWin}.`;
    } else {
      computerWin = computerWin + 1;
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You lost.  <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Try again!`;
    }
    return myOutputValue;
  }
  if ((currentGameMode = "Reverse")) {
    console.log("current mode", currentGameMode);
    if (
      playerInput != "scissors" &&
      playerInput != "paper" &&
      playerInput != "stone"
    ) {
      myOutputValue = `Hi ${playerInput}! <br> Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start the game. <br> <br> Let's get started!`;
    } else if (playerInput == computerInput) {
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}. <br> <br> It's a draw. <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Keep going!`;
    } else if (
      (playerInput == "scissors" && computerInput == "stone") ||
      (playerInput == "paper" && computerInput == "scissors") ||
      (playerInput == "stone" && computerInput == "paper")
    ) {
      userWin = userWin + 1;
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You won!  <br> <br> The current score will be you ${userWin} and computer ${computerWin}.`;
    } else {
      computerWin = computerWin + 1;
      myOutputValue = `Hey ${playerName}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You lost.  <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Try again!`;
    }

    // same here, myOutputValue returned at end of if statement
    return myOutputValue;
  }
};
// if (reverseGameMode == "Reverse") {
//   reversePlayerName = playerInput;
//   myOutputValue = `Hi ${playerInput}! <br> Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start the game. <br> <br> Let's get started!`;
// }
// if (
//   playerInput != "scissors" &&
//   playerInput != "paper" &&
//   playerInput != "stone"
// ) {
//   myOutputValue = `Hi ${playerInput}! <br> Please type either 'scissors ✌️', 'paper ✋' or 'stone ✊' to start the game. <br> <br> Let's get started!`;
// } else if (playerInput == computerInput) {
//   myOutputValue = `Hey ${nameOfUser}! You have input ${playerInput} and computer has input ${computerInput}. <br> <br> It's a draw. <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Keep going!`;
// } else if (
//   (playerInput == "scissors" && computerInput == "stone") ||
//   (playerInput == "paper" && computerInput == "scissors") ||
//   (playerInput == "stone" && computerInput == "paper")
// ) {
//   userWin = userWin + 1;
//   myOutputValue = `Hey ${nameOfUser}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You won!  <br> <br> The current score will be you ${userWin} and computer ${computerWin}.`;
// } else {
//   computerWin = computerWin + 1;
//   myOutputValue = `Hey ${nameOfUser}! You have input ${playerInput} and computer has input ${computerInput}.  <br> <br> You lost.  <br> <br> The current score will be you ${userWin} and computer ${computerWin}. Try again!`;
// }
