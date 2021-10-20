var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";

//PLAYERS
var PLAYER = "player";
var COMPUTER = "computer";

//Outcomes
var WIN = "win";
var LOST = "lost";
var DRAW = "draw";

//Game Modes
var REVERSE = "reverse";
var NORMAL = "normal";
var KOREANSPS = "korean sps";

//Global variable for counting
var playerWinCount = 0;
var comWinCount = 0;
var rounds = 0;
var winLose = "";
var mode = "";
var mostrecentwinner = "";

//Username
var userName = "";

//Message
var modeInputMessage =
  "<br> Please input the mode you would like: 'normal', 'korean sps' and 'reverse'";
var inputMessage = "Please enter scissors, paper, stone to start game!";
var lossMessage = function (input, computer) {
  return `${userName}, you have chosen ${input} and you have lost to the computer's choice ${computer}! <br>`;
};

var drawMessage = function (input, computer) {
  return `You have played ${input} and the computer's choice is ${computer}! <br> Its a draw!!`;
};

var winMessage = function (input, computer) {
  return `You have played ${input} and you have won the computer's choice ${computer}! <br>`;
};

//random number generator
var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randNumber = randomInteger;
  console.log(randNumber);
  return randNumber;
};

//Computer chooses based on random number
var computerChoice = function () {
  var number = randomNumber();
  var choice = SCISSORS;

  if (number == 0) {
    choice = STONE;
  }

  if (number == 1) {
    choice = PAPER;
  }
  return choice;
};

//Win Percentage
var winRate = function () {
  var percentage = Math.floor((playerWinCount / rounds) * 100);
  return percentage;
};

//Statistic Board
var countStatistics = function () {
  rounds += 1;
  if (winLose == LOST) {
    comWinCount += 1;
  }

  if (winLose == WIN) {
    playerWinCount += 1;
  }

  var winrate = winRate();
  var statistics = `<br><br> ---- Statistics for ${mode} ---- <br> ${userName} win count: ${playerWinCount} <br> Computer win count: ${comWinCount} <br> Win rate: ${winrate}% <br> <br> Please type "scissors", "paper" or "stone" for the next game`;

  return statistics;
};

//Validating Mode Chosesn
var validModeCheck = function (input) {
  return input == NORMAL || input == REVERSE || input == KOREANSPS;
};

//validating input
var validInputCheck = function (input) {
  return input == SCISSORS || input == STONE || input == PAPER;
};

//check for win
var winCheck = function (winner, loser) {
  return (
    (winner == STONE && loser == SCISSORS) ||
    (winner == SCISSORS && loser == PAPER) ||
    (winner == PAPER && loser == STONE)
  );
};

//Main Code

var main = function (input) {
  // if there is no user name
  if (!userName) {
    //if there is no input
    if (!input) {
      return "Please input something as your user name!";
    }
    // if there is an input
    userName = input;
    return "Welcome, " + userName + "<br" + modeInputMessage;
  }

  //if there is an user name input
  //if there is no mode chosen
  if (!mode) {
    if (!input) {
      return modeInputMessage;
    }

    //if there is an incorrect input
    var validmodeinput = validModeCheck(input);
    if (validmodeinput == false) {
      return "Incorrect mode chosen" + modeInputMessage;
    }

    //if there is a correct input
    mode = input;
    return `Hello ${userName}, you have entered ${mode}! <br>` + inputMessage;
  }

  var computer = computerChoice();
  var checkforvalidinput = validInputCheck(input);
  if (checkforvalidinput == false) {
    return "you have entered an incorrect input," + inputMessage;
  }
  var player = input;
  console.log("Computer Choice", computer);
  console.log("User Choice", input);

  //Revserse Mode

  if (mode == REVERSE) {
    winLose = LOST;
    var myOutputValue = lossMessage(input, computer);

    //check for win for reversed game. the player win if they are lose in the normal game
    var wincheck = winCheck(computer, player);
    if (wincheck == true) {
      winLose = WIN;
      myOutputValue = winMessage(input, computer);
    }

    //check for draw
    if (player == computer) {
      winLose = DRAW;
      myOutputValue = drawMessage(input, computer);
    }

    var statisticsboard = countStatistics();
    myOutputValue = myOutputValue + statisticsboard;
    return myOutputValue;
  }

  //Normal Mode

  if (mode == NORMAL) {
    winLose = LOST;
    var myOutputValue = lossMessage(input, computer);

    //check for win
    var wincheck = winCheck(player, computer);
    if (wincheck == true) {
      winLose = WIN;
      myOutputValue = winMessage(input, computer);
    }

    //check for draw
    if (player == computer) {
      winLose = DRAW;
      myOutputValue = drawMessage(input, computer);
    }

    var statisticsboard = countStatistics();
    myOutputValue = myOutputValue + statisticsboard;
    return myOutputValue;
  }

  //Korean SPS Mode
  if (mode == KOREANSPS) {
    var wincheck = winCheck(player, computer);
    if (wincheck == true) {
      mostrecentwinner = PLAYER;
      console.log(mostrecentwinner);
      myOutputValue =
        winMessage(input, computer) + `${userName} shouts Muk-Jji-Ppa!`;
    }

    var losecheck = winCheck(computer, player);
    if ((losecheck = true)) {
      mostrecentwinner = COMPUTER;
      console.log(mostrecentwinner);
      myOutputValue =
        lossMessage(input, computer) + ` Computer shouts Muk-Jji-Ppa!`;
    }

    //check for win
    if (player == computer) {
      console.log(mostrecentwinner);

      if (!mostrecentwinner) {
        winLose = DRAW;
        myOutputValue = `<br> You have drawed! <br>`;
      }

      if (mostrecentwinner == PLAYER) {
        winLose = WIN;
        myOutputValue = `<br> You have won! <br>`;
        mostrecentwinner = "";
      }

      if (mostrecentwinner == COMPUTER) {
        winLose = LOST;
        myOutputValue = `<br> You have LOST! <br>`;
        mostrecentwinner = "";

        var statisticsboard = countStatistics();
      }
    }

    myOutputValue = myOutputValue + statisticsboard;
    return myOutputValue;
  }
};
