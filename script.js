var main = function (input) {
  return scissorsPaperStone(input);
};

let scissorsPaperStone = function (input) {
  let randomDecimal = Math.random() * 3;
  let randomInteger = Math.floor(randomDecimal);
  // 0 == scissors
  // 1 == paper
  // 2 == stone
  // additional comments
  if (input == "scissors" || input == "paper" || input == "stone") {
    if (randomInteger == 0) {
      if (input == "scissors") {
        return `user uses ${input} and program chooses scissors. <br><br> Draw!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses scissors. <br><br>User loses!`;
      } else {
        return `user uses ${input} and program chooses scissors. <br><br>User wins!`;
      }
    } else if (randomInteger == 1) {
      if (input == "scissors") {
        return `user uses ${input} and program chooses paper. <br><br>User wins!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses paper. <br><br>Draw!`;
      } else {
        return `user uses ${input} and program chooses paper. <br><br>User loses!`;
      }
    } else {
      if (input == "scissors") {
        return `user uses ${input} and program chooses stone. <br><br>User loses!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses stone. <br><br>User wins!`;
      } else {
        return `user uses ${input} and program chooses stone. <br><br>Draw!`;
      }
    }
  } else {
    return `error, user did not input scissors paper or stone. <br><br>Try again!`;
  }
};

let scissorsPaperStoneReversed = function (input) {
  let randomDecimal = Math.random() * 3;
  let randomInteger = Math.floor(randomDecimal);
  // 0 == scissors
  // 1 == paper
  // 2 == stone
  if (input == "scissors" || input == "paper" || input == "stone") {
    if (randomInteger == 0) {
      if (input == "scissors") {
        return `user uses ${input} and program chooses scissors. <br><br> Draw!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses scissors. <br><br>User wins!`;
      } else {
        return `user uses ${input} and program chooses scissors. <br><br>User loses!`;
      }
    } else if (randomInteger == 1) {
      if (input == "scissors") {
        return `user uses ${input} and program chooses paper. <br><br>User loses!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses paper. <br><br>Draw!`;
      } else {
        return `user uses ${input} and program chooses paper. <br><br>User wins!`;
      }
    } else {
      if (input == "scissors") {
        return `user uses ${input} and program chooses stone. <br><br>User wins!`;
      } else if (input == "paper") {
        return `user uses ${input} and program chooses stone. <br><br>User loses!`;
      } else {
        return `user uses ${input} and program chooses stone. <br><br>Draw!`;
      }
    }
  } else {
    return `error, user did not input scissors paper or stone. <br><br>Try again!`;
  }
};
