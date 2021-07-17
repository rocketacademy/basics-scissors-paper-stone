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

//=========Reverse SPS Game (Project Part 1 + 2)============

// Generate random scissors/paper/stone choices
var generateChoice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0) {
    assignedChoice = `scissors ✂️`;
  }
  if (randomInteger == 1) {
    assignedChoice = `paper 🗒`;
  }
  if (randomInteger == 2) {
    assignedChoice = `stone 🗿`;
  }
  return assignedChoice;
};

//Create global variables
var roundsPlayed = 0;
var drawCount = 0;
var winCount = 0;
var loseCount = 0;
var currentGameMode = `waiting for player name`;
var playerName = ``;

//Rename inputs to remove 'reversed' and to add emojis
var nameProcessor = function (input) {
  var processedName = `Invalid`;
  if (input == `scissors` || input == `reversed scissors`) {
    processedName = `scissors ✂️`;
  }
  if (input == `paper` || input == `reversed paper`) {
    processedName = `paper 🗒`;
  }
  if (input == `stone` || input == `reversed stone`) {
    processedName = `stone 🗿`;
  }
  console.log(`renamed input is ${processedName}`);
  return processedName;
};

//Check if input is within acceptable range of responses
var inputCheck = function (processedName) {
  var valid =
    processedName == `scissors ✂️` ||
    processedName == `paper 🗒` ||
    processedName == `stone 🗿`;
  return valid;
};

//Create function to find out if player won before any reversal is done
var didPlayerWin = function (programSelection, userSelection) {
  var playerWon =
    (programSelection == `scissors ✂️` && userSelection == `paper 🗒`) ||
    (programSelection == `paper 🗒` && userSelection == `stone 🗿`) ||
    (programSelection == `stone 🗿` && userSelection == `scissors ✂️`);
  console.log(`Player won before reversal ${playerWon}`);
  return playerWon;
};
//Create function to find out if player lost before any reversal is done
var didPlayerLose = function (programSelection, userSelection) {
  var inputLogical = inputCheck(userSelection);
  var playerLost =
    inputLogical == true &&
    !(
      (programSelection == `scissors ✂️` && userSelection == `paper 🗒`) ||
      (programSelection == `paper 🗒` && userSelection == `stone 🗿`) ||
      (programSelection == `stone 🗿` && userSelection == `scissors ✂️`)
    ) &&
    !(programSelection == userSelection);
  console.log(`Player lost before reversal ${playerLost}`);
  return playerLost;
};
//Reverse result if player used the word 'reversed', otherwise, let result be the same
var lostReversed = function (actualEntry, programSelection, userSelection) {
  var inputLogical = inputCheck(userSelection);
  var lost = didPlayerLose(programSelection, userSelection);
  if (inputLogical == true && actualEntry.includes(`reversed`)) {
    lost = !didPlayerLose(programSelection, userSelection);
  }
  return lost;
};
var wonReversed = function (actualEntry, programSelection, userSelection) {
  var inputLogical = inputCheck(userSelection);
  var won = didPlayerWin(programSelection, userSelection);
  if (inputLogical == true && actualEntry.includes(`reversed`)) {
    won = !didPlayerWin(programSelection, userSelection);
  }
  return won;
};

//Create function to add to lose count if player lost
var addLoseCount = function (lost) {
  if (lost == true) {
    loseCount = loseCount + 1;
  }
  return loseCount;
};
//Create function to add to win count if player won
var addWinCount = function (won) {
  if (won == true) {
    winCount = winCount + 1;
  }
  return winCount;
};
//Create function to add to draw count if player drew
var addDrawCount = function (programSelection, userSelection) {
  if (programSelection == userSelection) {
    drawCount = drawCount + 1;
  }
  return drawCount;
};

//* MAIN: Output win or lose for reversed SPS game, along with statistics
var main = function (input) {
  var myOutputValue = ``;

  if (currentGameMode == `waiting for player name`) {
    playerName = input;
    currentGameMode = `game`;
    console.log("test");
    myOutputValue = `Welcome, ${playerName}! <br> Please type 'scissors', 'paper' or 'stone' to start playing the game with me 😊. (Hint: You can try adding 'reversed' in front of your choice!)`;
  } else if (currentGameMode == `game`) {
    console.log(`input ${input}`);

    //Find out player's and program's choices
    var renamedInput = nameProcessor(input);
    var programChoice = generateChoice();
    console.log(`program choice is ${programChoice}`);

    //Find out whether player won this round after reversal, if any
    var lostAfterReversal = lostReversed(input, programChoice, renamedInput);
    var wonAfterReversal = wonReversed(input, programChoice, renamedInput);
    console.log(`Player lost after reversal, if any ${lostAfterReversal}`);
    console.log(`Player won after reversal, if any ${wonAfterReversal}`);

    //Find total lose/win/draw counts
    var totalLoseCount = addLoseCount(lostAfterReversal);
    var totalWinCount = addWinCount(wonAfterReversal);
    var totalDrawCount = addDrawCount(programChoice, renamedInput);
    console.log(`total lose count ${totalLoseCount}`);
    console.log(`total win count ${totalWinCount}`);
    console.log(`total draw count ${totalDrawCount}`);

    //Find winning percentage
    roundsPlayed = roundsPlayed + 1;
    var winPercentage = (totalWinCount / roundsPlayed) * 100;

    //Modify the word 'time' in Output string depending on plural or singular count
    var timeModifier = function (totalDrawCount) {
      if (totalDrawCount <= 1) {
        return `time`;
      }
      if (totalDrawCount > 1) {
        return `times`;
      }
    };
    var time = timeModifier(totalDrawCount);

    //Customise message based on win:loss ratio
    var customisedMessage = function (win, loss) {
      var message = `You're doing okay! 🙃`;
      if (win > loss) {
        message = `Not bad! You're ahead of me! 👍🏻`;
      }
      if (win < loss) {
        message = `Try to catch up with me! 😎`;
      }
      return message;
    };
    var personalMessage = customisedMessage(totalWinCount, totalLoseCount);

    //* Output customised for 5 different results, depending on (1) whether input is valid, (2) whether 'reversed' is used and (3) whether they won/lost/draw

    //For invalid input:
    if (inputCheck(renamedInput) == false) {
      myOutputValue = `I didn't get that, ${playerName}. <br> Please type 'scissors', 'paper' or 'stone' to play the game with me 😊. (Hint: You can try adding 'reversed' in front of your choice!)`;
    }
    //If player drew, regardless of whether 'reversed' is used:
    if (programChoice == renamedInput) {
      myOutputValue = `It's a draw, ${playerName}! <br> <br> We both chose ${programChoice}! 🙌 <br> <br> Your current win-loss ratio is ${totalWinCount}:${totalLoseCount}. <br> ${personalMessage} <br> <br> We drew a total of ${totalDrawCount} ${time}. <br> <br> Your win rate is ${winPercentage.toFixed(
        0
      )}%.`;
    }
    //If play lost, and 'reversed' was not used by player
    if (!input.includes(`reversed`) && lostAfterReversal == true) {
      myOutputValue = `You lost, ${playerName}! <br> <br> This is the reverse SPS game. <br> I chose ${programChoice}... <br> and unfortunately ${renamedInput} does not beat ${programChoice}in this game! 😝 <br> <br> Your current win-loss ratio is ${totalWinCount}:${totalLoseCount}. <br> ${personalMessage} <br> <br> We drew a total of ${totalDrawCount} ${time}. <br> <br> Your win rate is ${winPercentage.toFixed(
        0
      )}%.`;
    }
    //If play won, and 'reversed' was not used by player
    if (!input.includes(`reversed`) && wonAfterReversal == true) {
      myOutputValue = `Unbelievable... you won! <br> <br> You successfully won despite this being a reversed SPS game! <br> I chose ${programChoice} and did not see your ${renamedInput} coming! <br> You totally deserve this win, ${playerName}! <br> <br> Your current win-loss ratio is ${totalWinCount}:${totalLoseCount}. <br> ${personalMessage} <br> <br> We drew a total of ${totalDrawCount} ${time}. <br> <br> Your win rate is ${winPercentage.toFixed(
        0
      )}%.`;
    }
    //If play lost, and 'reversed' was used by player
    if (input.includes(`reversed`) && lostAfterReversal == true) {
      myOutputValue = `You lost, ${playerName}! <br> <br> You reversed back to the standard SPS game. <br> I chose ${programChoice} ... and unfortunately your ${renamedInput} does not beat my ${programChoice}in this game! 😝 <br> <br> Your current win-loss ratio is ${totalWinCount}:${totalLoseCount}. <br> ${personalMessage} <br> <br> We drew a total of ${totalDrawCount} ${time}. <br> <br> Your win rate is ${winPercentage.toFixed(
        0
      )}%.`;
    }
    //If play won, and 'reversed' was used by player
    if (input.includes(`reversed`) && wonAfterReversal == true) {
      myOutputValue = `Amazing... You actually won! <br> <br> You reversed back to the standard SPS game! <br> I chose ${programChoice} and it did not win against your ${renamedInput} in this standard game! <br> You totally deserve this win, ${playerName}! <br> <br> Your current win-loss ratio is ${totalWinCount}:${totalLoseCount}. <br> ${personalMessage} <br> <br> We drew a total of ${totalDrawCount} ${time}. <br> <br> Your win rate is ${winPercentage.toFixed(
        0
      )}%.`;
    }
  }
  return myOutputValue;
};
