// // =========Standard SPS Game (Project Part 1 only)============

// // Generate random integer limited to 3 different digits
// var generateInteger = function () {
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.floor(randomDecimal);
//   return randomInteger;
// };

// //Assign random numbers to scissors/paper/stone choices
// var assignChoice = function (randomInteger) {
//   if (randomInteger == 0) {
//     assignedChoice = `scissors ✂️`;
//   }
//   if (randomInteger == 1) {
//     assignedChoice = `paper 🗒`;
//   }
//   if (randomInteger == 2) {
//     assignedChoice = `stone 🗿`;
//   }
//   console.log(`program choice is ${assignedChoice}`);
//   return assignedChoice;
// };

// //Add emojis
// var nameProcessor = function (input) {
//   var renamedInput = input;

//   if (input == `scissors`) {
//     renamedInput = `scissors ✂️`;
//   }
//   if (input == `paper`) {
//     renamedInput = `paper 🗒`;
//   }
//   if (input == `stone`) {
//     renamedInput = `stone 🗿`;
//   }
//   console.log(`renamed input is ${renamedInput}`);
//   return renamedInput;
// };

//Output win or lose based on SPS game
// var main = function (input) {
//   var renamedInput = nameProcessor(input);
//   var programChoice = assignChoice(generateInteger);
//   var myOutputValue = `Please type 'scissors', 'paper' or 'stone' to play the game with me 😊.`;

//   if (
//     (programChoice == `scissors ✂️` && input == `paper`) ||
//     (programChoice == `paper 🗒` && input == `stone`) ||
//     (programChoice == `stone 🗿` && input == `scissors`)
//   ) {
//     myOutputValue = `You lost! <br> I chose ${programChoice} and you chose ${renamedInput}. <br> Better luck next time!`;
//   }
//   if (
//     (programChoice == `scissors ✂️` && input == `stone`) ||
//     (programChoice == `stone 🗿` && input == `paper`) ||
//     (programChoice == `paper 🗒` && input == `scissors`)
//   ) {
//     myOutputValue = `You won! <br> I chose ${programChoice} and you chose ${renamedInput}. <br> Congratulations 🎉!!`;
//   }
//   if (programChoice == renamedInput) {
//     myOutputValue = `It's a draw! <br> We both chose ${programChoice}! 🙌`;
//   }
//   return myOutputValue;
// };

// //======Reverse SPS Game: Project Part 1 more Comfortable + Part 2 Base=======

// // Create global variables
// var roundsPlayed = 0;
// var drawCount = 0;
// var winCount = 0;
// var loseCount = 0;
// var currentGameMode = `waiting for player name`;
// var playerName = ``;

// // Create a function to generate random scissors/paper/stone choices
// var generateChoice = function () {
//   var randomDecimal = Math.random() * 3;
//   var randomInteger = Math.floor(randomDecimal);
//   if (randomInteger == 0) {
//     assignedChoice = `scissors ✂️`;
//   }
//   if (randomInteger == 1) {
//     assignedChoice = `paper 🗒`;
//   }
//   if (randomInteger == 2) {
//     assignedChoice = `stone 🗿`;
//   }
//   return assignedChoice;
// };

// // Create a function to rename user inputs to remove the word 'reversed' and to add emojis
// var nameProcessor = function (input) {
//   var processedName = `Invalid`;
//   if (input == `scissors` || input == `reversed scissors`) {
//     processedName = `scissors ✂️`;
//   }
//   if (input == `paper` || input == `reversed paper`) {
//     processedName = `paper 🗒`;
//   }
//   if (input == `stone` || input == `reversed stone`) {
//     processedName = `stone 🗿`;
//   }
//   console.log(`renamed input is ${processedName}`);
//   return processedName;
// };

// // Create a function to check if the input is within the acceptable selections of responses
// var inputCheck = function (processedName) {
//   var valid =
//     processedName == `scissors ✂️` ||
//     processedName == `paper 🗒` ||
//     processedName == `stone 🗿`;
//   return valid;
// };

// //** */ Find out results and result statistics:

// // Create a function to find out if player won before any reversal is done
// var didPlayerWin = function (programSelection, userSelection) {
//   var playerWon =
//     (programSelection == `scissors ✂️` && userSelection == `paper 🗒`) ||
//     (programSelection == `paper 🗒` && userSelection == `stone 🗿`) ||
//     (programSelection == `stone 🗿` && userSelection == `scissors ✂️`);
//   console.log(`Player won before reversal ${playerWon}`);
//   return playerWon;
// };
// // Create function to find out if player lost before any reversal is done
// var didPlayerLose = function (programSelection, userSelection) {
//   var playerLost =
//     inputCheck(userSelection) == true &&
//     !(
//       (programSelection == `scissors ✂️` && userSelection == `paper 🗒`) ||
//       (programSelection == `paper 🗒` && userSelection == `stone 🗿`) ||
//       (programSelection == `stone 🗿` && userSelection == `scissors ✂️`)
//     ) &&
//     !(programSelection == userSelection);
//   console.log(`Player lost before reversal ${playerLost}`);
//   return playerLost;
// };
// // Create functions to reverse win/lose result if player used the word 'reversed' (except where player entered invalid response or when result is a draw); otherwise, let result be the same
// var lostReversed = function (actualEntry, programSelection, userSelection) {
//   var lost = didPlayerLose(programSelection, userSelection);
//   if (
//     inputCheck(userSelection) == true &&
//     actualEntry.includes(`reversed`) &&
//     programSelection != userSelection
//   ) {
//     lost = !didPlayerLose(programSelection, userSelection);
//   }
//   return lost;
// };
// var wonReversed = function (actualEntry, programSelection, userSelection) {
//   var won = didPlayerWin(programSelection, userSelection);
//   if (
//     inputCheck(userSelection) == true &&
//     actualEntry.includes(`reversed`) &&
//     programSelection != userSelection
//   ) {
//     won = !didPlayerWin(programSelection, userSelection);
//   }
//   return won;
// };

// // Create functions to add to lose/win/draw count if player lost/won/drew
// var addLoseCount = function (lost) {
//   if (lost == true) {
//     loseCount = loseCount + 1;
//   }
//   return loseCount;
// };
// var addWinCount = function (won) {
//   if (won == true) {
//     winCount = winCount + 1;
//   }
//   return winCount;
// };
// var addDrawCount = function (programSelection, userSelection) {
//   if (programSelection == userSelection) {
//     drawCount = drawCount + 1;
//   }
//   return drawCount;
// };

// // Create a function to derive winning percentage
// var findWinPercentage = function (wins, totalRounds) {
//   var winPercentage = (wins / totalRounds) * 100;
//   return winPercentage;
// };

// //** */ Customise output messages based on results:

// // Create a function to differentiate message for 5 different results, depending on (1) whether input is valid, (2) whether 'reversed' is used and (3) whether they won/lost/draw
// var result = function (
//   name,
//   actualEntry,
//   userSelection,
//   programSelection,
//   winCount,
//   loseCount,
//   drawCount,
//   customisedMessage,
//   timeOrTimes,
//   winningPercent,
//   lostThisRound,
//   wonThisRound
// ) {
//   var message = ``;
//   // For invalid userGuess:
//   if (inputCheck(userSelection) == false) {
//     message = `I didn't get that, ${name}. <br> <br> Please type 'scissors', 'paper' or 'stone' to play the game with me 😊. (Hint: You can try adding 'reversed' in front of your choice!)`;
//   }
//   // If player drew, regardless of whether 'reversed' is used:
//   if (programSelection == userSelection) {
//     message = `It's a draw, ${name}! <br> <br> We both chose ${programSelection}! 🙌 <br> <br> Your current win-loss ratio is ${winCount}:${loseCount}. <br> ${customisedMessage} <br> <br> We drew a total of ${drawCount} ${timeOrTimes}. <br> <br> Your win rate is ${winningPercent.toFixed(
//       0
//     )}%.`;
//   }
//   // If play lost, and 'reversed' was not used by player
//   if (!actualEntry.includes(`reversed`) && lostThisRound == true) {
//     message = `You lost, ${name}! <br> <br> This is the reverse SPS game. <br> I chose ${programSelection}... <br> and unfortunately ${userSelection} does not beat ${programSelection}in this game! 😝 <br> <br> Your current win-loss ratio is ${winCount}:${loseCount}. <br> ${customisedMessage} <br> <br> We drew a total of ${drawCount} ${timeOrTimes}. <br> <br> Your win rate is ${winningPercent.toFixed(
//       0
//     )}%.`;
//   }
//   // If play won, and 'reversed' was not used by player
//   if (!actualEntry.includes(`reversed`) && wonThisRound == true) {
//     message = `Unbelievable... you won! <br> <br> You successfully won despite this being a reversed SPS game! <br> I chose ${programSelection} and did not see your ${userSelection} coming! <br> You totally deserve this win, ${name}! <br> <br> Your current win-loss ratio is ${winCount}:${loseCount}. <br> ${customisedMessage} <br> <br> We drew a total of ${drawCount} ${timeOrTimes}. <br> <br> Your win rate is ${winningPercent.toFixed(
//       0
//     )}%.`;
//   }
//   // If play lost, and 'reversed' was used by player
//   if (actualEntry.includes(`reversed`) && lostThisRound == true) {
//     message = `You lost, ${name}! <br> <br> You reversed back to the standard SPS game. <br> I chose ${programSelection} ... and unfortunately your ${userSelection} does not beat my ${programSelection}in this game! 😝 <br> <br> Your current win-loss ratio is ${winCount}:${loseCount}. <br> ${customisedMessage} <br> <br> We drew a total of ${drawCount} ${timeOrTimes}. <br> <br> Your win rate is ${winningPercent.toFixed(
//       0
//     )}%.`;
//   }
//   // If play won, and 'reversed' was used by player
//   if (actualEntry.includes(`reversed`) && wonThisRound == true) {
//     message = `Amazing... You actually won! <br> <br> You reversed back to the standard SPS game! <br> I chose ${programSelection} and it did not win against your ${userSelection} in this standard game! <br> You totally deserve this win, ${name}! <br> <br> Your current win-loss ratio is ${winCount}:${loseCount}. <br> ${customisedMessage} <br> <br> We drew a total of ${drawCount} ${timeOrTimes}. <br> <br> Your win rate is ${winningPercent.toFixed(
//       0
//     )}%.`;
//   }
//   return message;
// };

// // Create a function to further customise message based on win:loss ratio
// var customisedMessage = function (win, loss) {
//   var message = `You're doing okay! 🙃`;
//   if (win > loss) {
//     message = `Not bad! You're ahead of me! 👍🏻`;
//   }
//   if (win < loss) {
//     message = `Try to catch up with me! 😎`;
//   }
//   return message;
// };

// // Create a function to modify the word 'time' in Output string depending on plural or singular count
// var timeModifier = function (drawValue) {
//   if (drawValue <= 1) {
//     return `time`;
//   }
//   if (drawValue > 1) {
//     return `times`;
//   }
// };

// //* MAIN: Run different codes for different game modes
// var main = function (input) {
//   var myOutputValue = ``;

//   if (currentGameMode == `waiting for player name`) {
//     playerName = input;
//     currentGameMode = `game`;
//     myOutputValue = `Welcome, ${playerName}! <br> Please type 'scissors', 'paper' or 'stone' to start playing the game with me 😊. (Hint: You can try adding 'reversed' in front of your choice!)`;
//   } else if (currentGameMode == `game`) {
//     console.log(`input ${input}`);

//     // Find out player's and program's choices
//     var renamedInput = nameProcessor(input);
//     var programChoice = generateChoice();
//     console.log(`program choice is ${programChoice}`);

//     // Find out whether player won this round after reversal, if any
//     var lostAfterReversal = lostReversed(input, programChoice, renamedInput);
//     var wonAfterReversal = wonReversed(input, programChoice, renamedInput);
//     console.log(`Player lost after reversal, if any ${lostAfterReversal}`);
//     console.log(`Player won after reversal, if any ${wonAfterReversal}`);

//     // Find total lose/win/draw counts
//     var totalLoseCount = addLoseCount(lostAfterReversal);
//     var totalWinCount = addWinCount(wonAfterReversal);
//     var totalDrawCount = addDrawCount(programChoice, renamedInput);
//     console.log(`total lose count ${totalLoseCount}`);
//     console.log(`total win count ${totalWinCount}`);
//     console.log(`total draw count ${totalDrawCount}`);

//     // Find winning percentage
//     roundsPlayed = roundsPlayed + 1;
//     var winPercentage = findWinPercentage(totalWinCount, roundsPlayed);

//     // Customise Message
//     var time = timeModifier(totalDrawCount);
//     var personalMessage = customisedMessage(totalWinCount, totalLoseCount);

//     // Return output value
//     myOutputValue = result(
//       playerName,
//       input,
//       renamedInput,
//       programChoice,
//       totalWinCount,
//       totalLoseCount,
//       totalDrawCount,
//       personalMessage,
//       time,
//       winPercentage,
//       lostAfterReversal,
//       wonAfterReversal
//     );
//   }
//   return myOutputValue;
// };

//======SPS Game with Reverse Game Mode: Project Part 2 (More Comfortable)=======
// Specify global variables
var currentGameMode = `waiting for player name`;

// Create a function to change game mode based on input
var changeGameMode = function (userInput) {
  var gameMode = currentGameMode;
  if (userInput == `standard`) {
    gameMode = `standard game`;
  }
  if (userInput == `reversed`) {
    gameMode = `reversed game`;
  }
  console.log(`game mode is ${gameMode}`);
  return gameMode;
};

// Create a function to generate random scissors/paper/stone choices
var generateChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    assignedChoice = `scissors`;
  }
  if (randomInteger == 1) {
    assignedChoice = `paper`;
  }
  if (randomInteger == 2) {
    assignedChoice = `stone`;
  }
  return assignedChoice;
};

// Create a function for standard game mode
var standardGame = function (userInput, programSelection) {
  var message = `Sorry, I didn't get that. <br> <br> Please type 'scissors', 'paper' or 'stone' to start playing the game with me 😊 <br> <br> You can also type 'reversed' to try our reversed mode and 'standard' for the original game.`;

  if (userInput == `standard`) {
    message = `You are now in the standard game mode. <br> <br> Please type 'scissors', 'paper' or 'stone' to start the standard SPS game with me!`;
  }
  if (userInput == programSelection) {
    message = `It's a draw! <br> <br> This is the standard game. <br> <br> We both chose ${programSelection}! <br> You didn't copy my answer did you? 😜`;
  }
  if (
    (userInput == `scissors` && programSelection == `paper`) ||
    (userInput == `paper` && programSelection == `stone`) ||
    (userInput == `stone` && programSelection == `scissors`)
  ) {
    message = `You won! <br> <br> This is the standard game. <br> <br> You chose ${userInput} and I chose ${programSelection}. <br> Good job!`;
  }
  if (
    (userInput == `scissors` && programSelection == `stone`) ||
    (userInput == `stone` && programSelection == `paper`) ||
    (userInput == `paper` && programSelection == `scissors`)
  ) {
    message = `You lost! <br> <br> This is the standard game. <br> <br> You chose ${userInput} and I chose ${programSelection}. <br> Better luck next time!`;
  }
  return message;
};

// Create a function for reversed game mode
var reversedGame = function (userInput, programSelection) {
  var message = `Sorry, I didn't get that. <br> <br> Please type 'scissors', 'paper' or 'stone' to start playing the game with me 😊 <br> <br> You can also type 'reversed' to try our reversed mode and 'standard' for the original game.`;

  if (userInput == `reversed`) {
    message = `You are now in the reversed game mode. <br> <br> Please type 'scissors', 'paper' or 'stone' to start the reversed SPS game with me!`;
  }
  if (userInput == programSelection) {
    message = `It's a draw! <br> <br> This is the reversed game. <br> <br> We both chose ${programSelection}! <br> You didn't copy my answer did you? 😜`;
  }
  if (
    (userInput == `scissors` && programSelection == `paper`) ||
    (userInput == `paper` && programSelection == `stone`) ||
    (userInput == `stone` && programSelection == `scissors`)
  ) {
    message = `You lost! <br> <br> This is the reversed game. <br> <br> You chose ${userInput} and I chose ${programSelection}. <br> Better luck next time!`;
  }
  if (
    (userInput == `scissors` && programSelection == `stone`) ||
    (userInput == `stone` && programSelection == `paper`) ||
    (userInput == `paper` && programSelection == `scissors`)
  ) {
    message = `You won! <br> <br> This is the reversed game. <br> <br> You chose ${userInput} and I chose ${programSelection}. <br> Good job!`;
  }

  return message;
};

// Specify what happens for the 3 game modes
var main = function (input) {
  var myOutputValue = ``;

  if (currentGameMode == `waiting for player name`) {
    playerName = input;
    currentGameMode = `standard game`;
    myOutputValue = `Welcome, ${playerName}! <br> Please type 'scissors', 'paper' or 'stone' to start playing the game with me 😊 <br> <br> You can also type 'reversed' to try our reversed mode and 'standard' to revert back to the original game.`;
  } else if (currentGameMode != `waiting for player name`) {
    currentGameMode = changeGameMode(input);
    programChoice = generateChoice();
    if (currentGameMode == `standard game`) {
      myOutputValue = standardGame(input, programChoice);
    }
    if (currentGameMode == `reversed game`) {
      myOutputValue = reversedGame(input, programChoice);
    }
  }
  return myOutputValue;
};
