var main = function (userShape) {
  var regexpReversedChoice = /reversed (scissors|paper|stone)/;
  var reversedMode = false;
  var userResult = "";
  var computerShape = getComputerShape();

  // Check for reversed mode selection first and other invalid input
  if (regexpReversedChoice.test(userShape)) {
    reversedMode = true;
    // Assign the capture group of the regex to user shape
    userShape = userShape.match(regexpReversedChoice)[1];
  } else if (
    !(userShape == "scissors" || userShape == "paper" || userShape == "stone")
  ) {
    return `You entered "${userShape}", please enter "scissors", "paper" or "stone" to play. Or add "reversed" before your choice (e.g."reversed scissors") for a different challenge.`;
  }

  // Check if user wins against computer
  if (
    (userShape == "scissors" && computerShape == "paper") ||
    (userShape == "paper" && computerShape == "stone") ||
    (userShape == "stone" && computerShape == "scissors")
  ) {
    // If reversed mode is on, then the results will be opposite
    if (reversedMode) {
      userResult = "lose";
    } else {
      userResult = "win";
    }
  }

  // Check if user loses against computer
  if (
    (userShape == "scissors" && computerShape == "stone") ||
    (userShape == "paper" && computerShape == "scissors") ||
    (userShape == "stone" && computerShape == "paper")
  ) {
    // If reversed mode is on, then the results will be opposite
    if (reversedMode) {
      userResult = "win";
    } else {
      userResult = "lose";
    }
  }

  // Check for a draw
  if (userShape == computerShape) {
    userResult = "draw";
  }

  return generateOutputMessage(userShape, computerShape, userResult);
};

function getComputerShape() {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var shape = "";
  switch (randomInteger) {
    case 0:
      shape = "scissors";
      break;
    case 1:
      shape = "paper";
      break;
    case 2:
      shape = "stone";
      break;
  }
  return shape;
}

function getEmoji(shape) {
  switch (shape) {
    case "scissors":
      return "&#x2702";
    case "paper":
      return "&#x1F4C4";
    case "stone":
      return "&#x26F0";
  }
}

function generateOutputMessage(userShape, computerShape, result) {
  var message = `&#x1F476 VS &#x1F916 <br>${getEmoji(userShape)} VS ${getEmoji(
    computerShape
  )}<br>`;
  switch (result) {
    case "win":
      message += `You won! Congrats! &#x1F389`;
      break;
    case "lose":
      message += `You lose! Better luck next time! &#x1F340`;
      break;
    case "draw":
      message += `It's a draw! What are the odds!? &#x1F914`;
      break;
  }
  message += `<br>Now you can type "scissors", "paper" or "stone" to play another round!<br>Or add "reversed" before your choice for a different challenge &#x1F648`;
  return message;
}
