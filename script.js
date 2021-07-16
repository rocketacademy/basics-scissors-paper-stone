var main = function (input) {
  var convertInput = input.toLowerCase().replace(/\s/g, "");
  console.log("user input");
  console.log(convertInput);

  return gameCondition(convertInput, translateRPS());
};

// Symbol Generation
function symbolGenerator(input) {
  if (input == "scissors" || input == "reversedscissors") {
    return "✂️";
  }
  if (input == "paper" || input == "reversedpaper") {
    return "📜";
  }
  if (input == "stone" || input == "reversedstone") {
    return "🗿";
  }
}

// Winning message
function winMessage(playerInput, comInput, playerIcon, comIcon) {
  return (
    "You Won! You have chose " +
    playerInput +
    playerIcon +
    " while the Computer chose " +
    comInput +
    comIcon +
    "<br>Play Again?"
  );
}

// Losing message
function loseMessage(playerInput, comInput, playerIcon, comIcon) {
  return (
    "You Lost! You have chose " +
    playerInput +
    playerIcon +
    " while the Computer chose " +
    comInput +
    comIcon +
    "<br>Play Again?"
  );
}

// Draw message
function drawMessage(playerInput, comInput, playerIcon, comIcon) {
  return (
    `It's a Draw✏️! You have chose ` +
    playerInput +
    playerIcon +
    " while the Computer chose " +
    comInput +
    comIcon +
    "<br>Play Again?"
  );
}

// Win Condition
function gameCondition(user, com) {
  // check input
  if (
    user == "stone" ||
    user == "reversedstone" ||
    user == "paper" ||
    user == "reversed paper" ||
    user == "scissors" ||
    user == "reversedscissors"
  ) {
    if (com == "paper") {
      // Computer is paper and user is scissors or reversedstone, user wins
      if (user == "scissors" || user == "reversedstone") {
        return winMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      }
      // Computer is paper and user is stone or reversed scissors, user loses
      else if (user == "stone" || user == "reversed scissors") {
        return loseMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      } else {
        return drawMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      }
    }
    if (com == "scissors") {
      if (user == "stone" || user == "reversedpaper") {
        return winMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      } else if (user == "paper" || user == "reversedstone") {
        return loseMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      } else {
        return drawMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      }
    }
    if (com == "stone") {
      if (user == "paper" || user == "reversedscissors") {
        return winMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      } else if (user == "scissors" || user == "reversedpaper") {
        return loseMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      } else {
        return drawMessage(
          user,
          com,
          symbolGenerator(user),
          symbolGenerator(com)
        );
      }
    }
  } else {
    return "Please enter scissors, paper or stone";
  }
}

// Random RPS by function
var translateRPS = function () {
  const list = ["scissors", "paper", "stone"];
  return list[Math.floor(Math.random() * 3)];
};
