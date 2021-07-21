var win = 0;
var tie = 0;
var lose = 0;
var myOutputValue = "";
var currentGameMode = "enter username";
var userName = "";
var lastMove = 0;
var koreanUserWin = 0;
var koreanComWin = 0;
var koreanComTie = 0;
var koreanComLose = 0;
var reverseTie = 0;
var reverseWin = 0;
var reverseLose = 0;

var main = function (input) {
  // ENTER USERNAME
  var moves = generateMoves();
  var reverseMoves = generateReverseMoves();
  var prevMove = lastMove + moves;
  console.log("moves");
  console.log(moves);

  if (currentGameMode == "enter username") {
    userName = input;
    currentGameMode = "choose game";
    return (myOutputValue = `hello ${userName}, please choose between 1: normal 2: reverse 3: korean 4: computer. <br></br>
    Key in the text only`);
  }

  // DEFINING THE DIFFERENT GAME MODES FOR THE USER TO CHOOSE FROM

  if (currentGameMode == "choose game") {
    if (input == "korean") {
      currentGameMode = "korean";
      return (myOutputValue = "korean mode");
    } else if (input == "reverse") {
      currentGameMode = "reverse";
      return (myOutputValue = "reverse mode");
    } else if (input == "normal") {
      currentGameMode = "normal";
      return (myOutputValue = "normal mode");
    }
  }

  if (input == "reset") {
    win = 0;
    tie = 0;
    lose = 0;
    koreanComWin = 0;
    koreanComLose = 0;
    koreanComTie = 0;
    reverseTie = 0;
    reverseWin = 0;
    reverseLose = 0;
    currentGameMode = "enter username";
    return (myOutputValue = "resetting game, please input new username");
  }

  // ALLOWING USER TO RESET GAME AND SCORE

  // NORMAL MODE
  if (currentGameMode == "normal") {
    if (input == moves) {
      tie++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${moves}. <br></br> TIE. <br></br> Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. <br></br>
    
         you can do better than a tie lol`);
    }
    if (
      (input == "scissors" && moves == "stone") ||
      (input == "stone" && moves == "paper") ||
      (input == "paper" && moves == "scissors")
    ) {
      lose++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${moves}. <br></br> LOSE. <br></br> Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. <br></br> you suck, stop losing`);
    }
    if (
      (input == "scissors" && moves == "paper") ||
      (input == "stone" && moves == "scissors") ||
      (input == "paper" && moves == "stone")
    ) {
      win++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${moves}. <br></br> WIN. <br></br> Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. <br></br> you're actually winning, wow`);
    }
  }

  // REVERSE MODE

  if (currentGameMode == "reverse") {
    if (input == reverseMoves) {
      reverseTie++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${reverseMoves}. <br></br> TIE. <br></br>  Win rate: ${reverseWin}, Lose rate: ${reverseLose}, Tie rate: ${reverseTie}. <br></br>
    
         you can do better than a tie lol`);
    }
    if (
      (input == "scissors" && reverseMoves == "reverse stone") ||
      (input == "stone" && reverseMoves == "reverse paper") ||
      (input == "paper" && reverseMoves == " reverse scissors")
    ) {
      reverseWin++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${reverseMoves}. <br></br>  Win rate: ${reverseWin}, Lose rate: ${reverseLose}, Tie rate: ${reverseTie}. <br></br> you're actually winning wow`);
    }
    if (
      (input == "scissors" && reverseMoves == "reverse paper") ||
      (input == "stone" && reverseMoves == "reverse scissors") ||
      (input == "paper" && reverseMoves == "reverse stone")
    ) {
      reverseLose++;
      return (myOutputValue = `${userName} you chose ${input}.  Computer chose ${reverseMoves}. <br></br>  Win rate: ${reverseWin}, Lose rate: ${reverseLose}, Tie rate: ${reverseTie}. <br></br> you suck, stop losing`);
    }
  }
  // KOREAN MODE

  //KOREAN USER LOSE SCENARIO; COM WIN
  if (currentGameMode == "korean") {
    if (
      (input == "scissors" && moves == "stone") ||
      (input == "stone" && moves == "paper") ||
      (input == "paper" && moves == "scissors")
    ) {
      koreanComTie++;
      return (myOutputValue = `${userName} you chose ${input}. Computer chose ${moves}. <br></br> 
      Your last move was ${prevMove} <br></br> It is Computer's turn! <br></br> Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. 
      <br></br> 
      Com Win rate: ${koreanComWin}, Com Lose rate: ${koreanComLose}, Com Tie rate: ${koreanComTie}. <br></br> 
      you suck, stop losing. COMPUTER MUK JJI PPA`);
    }
    // KOREAN USER WIN SCENARIO; COM LOSE
    if (
      (input == "scissors" && moves == "paper") ||
      (input == "stone" && moves == "scissors") ||
      (input == "paper" && moves == "stone")
    ) {
      tie++;
      return (myOutputValue = `${userName} you chose ${input}.  Computer chose ${moves}. <br></br>  Your last move was ${prevMove} <br></br> It is your turn! <br></br> Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. 
      <br></br> 
      Com Win rate: ${koreanComWin}, Com Lose rate: ${koreanComLose}, Com Tie rate: ${koreanComTie}. <br></br> you're actually winning, wow MUK JJI PPA`);
    }

    // KOREAN END GAME; DRAW; REF TO LAST ROUND WINNER AS GAME WINNER
    // USED THE OVERALL TIE SCORES TO COME UP WITH 2 SCENARIOS OF EITHER THE USER OR COMPUTER WINNING
    if (input == moves && koreanComTie > tie) {
      koreanComWin++;
      return (myOutputValue = `${userName} you chose ${input}.  Computer chose ${moves}. <br></br>  Your last move was ${prevMove} <br></br> COMPUTER WON!!! <br></br>  Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. 
      <br></br> 
      Com Win rate: ${koreanComWin}, Com Lose rate: ${koreanComLose}, Com Tie rate: ${koreanComTie}. <br></br> Computer won, too bad. Please 'reset'`);
    }
    if (input == moves && tie > koreanComTie) {
      Win++;
      return (myOutputValue = `${userName} you chose ${input}.  Computer chose ${moves}. <br></br>  Your last move was ${prevMove} <br></br> YOU WON!!! <br></br>  Win rate: ${win}, Lose rate: ${lose}, Tie rate: ${tie}. 
      <br></br> 
      Com Win rate: ${koreanComWin}, Com Lose rate: ${koreanComLose}, Com Tie rate: ${koreanComTie}. <br></br> Computer won, too bad. Please 'reset'`);
    }
  } else return "wtf u writing";
};

var getWinRate = function () {
  var winRate = Math.floor((win / totalScore) * 100);
  return winRate;
};

var randomize = function (randomizeNumber) {
  var randomDecimal = Math.random() * randomizeNumber;
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger;
};

var generateMoves = function (moves) {
  var totalMoves = 3;
  var randomMoves = randomize(totalMoves);
  if (randomMoves == 1) {
    return "scissors";
  }
  if (randomMoves == 2) {
    return "paper";
  }
  if (randomMoves == 3) {
    return "stone";
  }
};

var generateReverseMoves = function (moves) {
  var totalReverseMoves = 3;
  var randomReverseMoves = randomize(totalReverseMoves);
  if (randomReverseMoves == 1) {
    return "reverse scissors";
  }
  if (randomReverseMoves == 2) {
    return "reverse paper";
  }
  if (randomReverseMoves == 3) {
    return "reverse stone";
  }
};

