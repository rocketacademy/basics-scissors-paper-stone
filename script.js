var main = function (input) {
  return scissorsPaperStone(input);
};

// scissorspaperstone with part 2
// win-loss record storing
let countWin = 0;
let countLose = 0;
let countDraw = 0;
let gameStarted = false;
let userName = ``;

let scissorsPaperStone = function (input) {
  if (gameStarted == false) {
    if (isNaN(Number(input)) == true) {
      userName = input;
      gameStarted = true;
      return `welcome to the classic game of scissors paper stone, ${input}!<br><br>To play, key in either scissors, paper or stone and click submit!`;
    } else {
      return `you have keyed in an invalid username. Please try again!`;
    }
  } else if (gameStarted == true) {
    return scissorsPaperStoneGame(input);
  }
};

let scissorsPaperStoneGame = function (input) {
  let randomDecimal = Math.random() * 3;
  let randomInteger = Math.floor(randomDecimal);
  // 0 == scissors
  // 1 == paper
  // 2 == stone
  // additional comments
  if (input == "scissors" || input == "paper" || input == "stone") {
    if (randomInteger == 0) {
      if (input == "scissors") {
        countDraw += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses scissors. <br><br> Draw!`;
      } else if (input == "paper") {
        countLose += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses scissors. <br><br>User loses!`;
      } else {
        countWin += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses scissors. <br><br>User wins!`;
      }
    } else if (randomInteger == 1) {
      if (input == "scissors") {
        countWin += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses paper. <br><br>User wins!`;
      } else if (input == "paper") {
        countDraw += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses paper. <br><br>Draw!`;
      } else {
        countLose += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses paper. <br><br>User loses!`;
      }
    } else {
      if (input == "scissors") {
        countLose += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses stone. <br><br>User loses!`;
      } else if (input == "paper") {
        countWin += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses stone. <br><br>User wins!`;
      } else {
        countDraw += 1;
        return `${userName}<br><br>wins: ${countWin}<br>losses: ${countLose}<br>draws: ${countDraw}<br><br>user uses ${input} and program chooses stone. <br><br>Draw!`;
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
