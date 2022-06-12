//pseudocode
// 1.) User types (s|scizzors, p|paper, r|rock)
// 1.1) (1) Scizzors (2)Paper (3) rock -> number to RPS
// 2) Converts user RPS to number
// 3.) Computer randomizes a number
// 4.) Compare user and computer input
// 5.)

//Global Variables
var userRPS = "";
var compRPS = "";

var loses = 0;
var wins = 0;
var draws = 0;

var userName = "";

var gameMode_Name = "name";
var gameMode_RPS = "rps";
var gameMode_Reverse = "rev";
var gameMode_GameSel = "sel";

var gameMode_Current = "name";

// Convert RPS to number
var convertToNum = function (rps) {
  var usrPick = rps.toLowerCase();
  if (usrPick == "scizzors" || usrPick == "s") return 1;
  else if (usrPick == "paper" || usrPick == "p") return 2;
  else if (usrPick == "rock" || usrPick == "r") return 3;
  else return 0;
};

// Convert Num to RPS
var convertToRPS = function (num) {
  if (num == 1) return "SCISSORS ✂️";
  else if (num == 2) return "PAPER 📃";
  else return "ROCK 🌑";
};

//Computer Randomize
var computerRPS = function () {
  var rndNum = Math.ceil(Math.random() * 3);
  return rndNum;
};

//user won
var usrWin = function () {
  wins += 1;
  return `You WIN! NICE!<br><br>`;
};

//user lost
var usrLose = function () {
  loses += 1;
  return `You LOST! Bummer.<br><br>`;
};

//Draw
var itsDraw = function () {
  draws += 1;
  return `It's a DRAW!<br><br>`;
};

//Show Game Stats
var gameStats = function () {
  var statOutput = `${userName}'s Game Stats:<br>
  Wins: ${wins}<br>
  Losses: ${loses}<br>
  Draws: ${draws}<br><br>`;
  var comment = "";
  if (wins >= loses) comment = "You are doing good!";
  else comment = "Do better! You can do it!";

  return statOutput + comment;
};

//analyze result
var gameResult = function (compareResult) {
  var rtnResult = `The computer chose ${compRPS}. <br>
  You chose ${userRPS}.<br><br>`;

  var cResult = "";
  if (compareResult == 1) cResult = usrWin();
  else if (compareResult == 2) cResult = usrLose();
  else cResult = itsDraw();

  return rtnResult + cResult + gameStats();
};

//Compare user input to computer
var compareRPSResult = function (usrInput, compInput) {
  // 0: draw
  // 1: user wins
  // 2: computer wins

  // -- scizzors
  if (usrInput == 1 && compInput == 2) return gameResult(1);
  else if (usrInput == 1 && compInput == 3) return gameResult(2);
  // -- paper
  else if (usrInput == 2 && compInput == 3) return gameResult(1);
  else if (usrInput == 2 && compInput == 1) return gameResult(2);
  // -- rock
  else if (usrInput == 3 && compInput == 1) return gameResult(1);
  else if (usrInput == 3 && compInput == 2) return gameResult(2);
  else return gameResult(0);
};

var rCompareRPSResult = function (usrInput, compInput) {
  // 0: draw
  // 1: user wins
  // 2: computer wins

  // -- scizzors
  if (usrInput == 1 && compInput == 2) return gameResult(2);
  else if (usrInput == 1 && compInput == 3) return gameResult(1);
  // -- paper
  else if (usrInput == 2 && compInput == 3) return gameResult(2);
  else if (usrInput == 2 && compInput == 1) return gameResult(1);
  // -- rock
  else if (usrInput == 3 && compInput == 1) return gameResult(2);
  else if (usrInput == 3 && compInput == 2) return gameResult(1);
  else return gameResult(0);
};

var rpsGame = function (userChose) {
  //get rps num
  var usrPickNum = convertToNum(userChose);
  console.log("user pick", usrPickNum);

  if (usrPickNum == 0)
    return "Not in the option, please pick rock(r), paper(p), or scizzors(s)";

  userRPS = convertToRPS(usrPickNum);
  //get randomized pick

  var compPickNum = computerRPS();
  compRPS = convertToRPS(compPickNum);
  console.log("computer pick", compPickNum, compRPS);

  //compare result

  if (gameMode_Current == gameMode_Reverse)
    return `Game Mode: Reverse Rock-Paper-Scissors. <br><br> ${rCompareRPSResult(
      usrPickNum,
      compPickNum
    )}`;
  return `Game Mode: Reverse Rock-Paper-Scissors. <br><br> ${compareRPSResult(
    usrPickNum,
    compPickNum
  )}`;
};

//----MAIN
var main = function (input) {
  if (input == null || input == "") return "Please enter a name.";

  //gets users name
  if (gameMode_Current == gameMode_Name) {
    userName = input;
    gameMode_Current = gameMode_GameSel; //change game mode to game select
    return `Welcome ${userName}. <br><br>
    Please select a gamemode: <br>
    -type 'rps' for Rock-Paper-Scissors<br>
    -type 'rev' for reverse Rock-Paper-Scissors`;
  } else {
    if (gameMode_Current == gameMode_GameSel) {
      if (input.toLowerCase() == "rps") {
        gameMode_Current = gameMode_RPS;
        return "Game Mode: Rock-Paper-Scissors<br> Type r|rock, p|paper, s|scissors";
      } else if (input.toLowerCase() == "rev") {
        gameMode_Current = gameMode_Reverse;
        return "Game Mode: Reverse Rock-Paper-Scissors<br> Type r|rock, p|paper, s|scissors";
      } else
        return `Hi ${userName}, please enter a game mode. <br> 
      -type 'rps' for Rock-Paper-Scissors<br>
      -type 'rev' for reverse Rock-Paper-Scissors`;
    }
    //game proper
    else {
      //game mode: change name
      if (input.toLowerCase() == "name") {
        gameMode_Current = gameMode_Name;
        return `Game Mode: Naming<br>
        Please Enter your name.`;
      }
      //game mode: change mode to rps
      else if (input.toLowerCase() == "rps") {
        if (gameMode_Current == gameMode_RPS)
          return `Game Mode is already Rock-Paper-Scissors.<br>
        Type r|rock, p|paper, s|scissors`;

        gameMode_Current == gameMode_RPS;
        return `Game Mode: Game Select<br>
        Please Enter your game. <br>
        -type 'rps' for Rock-Paper-Scissors<br>
        -type 'rev' for reverse Rock-Paper-Scissors`;
      }
      //game mode: change mode to reverse
      else if (input.toLowerCase() == "rev") {
        if (gameMode_Current == gameMode_Reverse)
          return `Game Mode is already Reverse Rock-Paper-Scissors.<br>
        Type r|rock, p|paper, s|scissors`;

        gameMode_Current == gameMode_Reverse;
        return `Game Mode: Game Select<br>
        Please Enter your game. <br>
        -type 'rps' for Rock-Paper-Scissors<br>
        -type 'rev' for reverse Rock-Paper-Scissors`;
      }
      //continue game
      else return rpsGame(input);
    }
  }
};
