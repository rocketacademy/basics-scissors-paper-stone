var SCISSORS = "scissors";
var PAPER = "paper";
var STONE = "stone";
var REVERSEDSCISSORS = "reversed scissors";
var REVERSEDPAPER = "reversed paper";
var REVERSEDSTONE = "reversed stone";

//PLAYERS
var PLAYER = "player";
var COMPUTER = "computer";

//outcomes
var WIN = "win";
var LOST = "lost";
var DRAW = "draw";

//Game Modes
var REVERSE = "reverse";
var NORMAL = "normal";
var KOREANSPS = "koreansps";

//Global variable for counting
var playerWinCount = 0;
var comWinCount = 0;
var drawCount = 0;
var rounds = 0;
var winLose = "";
var mode = "";
var mostrecentwinner = "";

//Username
var userName = "";

var randomNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var randNumber = randomInteger;
  console.log(randNumber);
  return randNumber;
};

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

var winRate = function () {
  var percentage = Math.floor((playerWinCount / rounds) * 100);
  return percentage;
};

var countRound = function () {
  if (winLose == LOST) {
    comWinCount += 1;
  }

  if (winLose == WIN) {
    playerWinCount += 1;
  }

  if (winLose == DRAW) {
    drawCount += 1;
  }

  return winLose;
};

//Validating Mode Chosesn
var validModeCheck = function (input) {
  return input == NORMAL || input == REVERSE || input == KOREANSPS;
};

//validating input
var validInputCheck = function (input) {
  if (mode == REVERSE) {
    return (
      input == REVERSEDSCISSORS ||
      input == REVERSEDSTONE ||
      input == REVERSEDPAPER
    );
  }

  if (mode == NORMAL || mode == KOREANSPS) {
    return input == SCISSORS || input == STONE || input == PAPER;
  }
};

var main = function (input) {
  // if there is no user name
  if (!userName) {
    //if there is no input
    if (!input) {
      return "Please input something as your user name!";
    }
    // if there is an input
    userName = input;
    return "Welcome, " + userName;
  }

  //if there is an user name input
  //if there is no mode chosen
  if (!mode) {
    if (!input) {
      return "Please input the mode (either normal/ korean SPS/reverse)";
    }

    //if there is an incorrect input
    var validmodeinput = validModeCheck(input);
    if (validmodeinput == false) {
      return "you have entered an incorrect mode, please choose either normal/korean SPS/ reverse";
    }

    //if there is a correct input
    mode = input;
    return `Hello ${userName}, you have entered ${mode} `;
  }

  if (mode == REVERSE) {
    var computer = computerChoice();
    var checkforvalidinput = validInputCheck(input);

    //if invalid input
    if (checkforvalidinput == false) {
      return "you have entered an incorrect input, please choose either reversed scissors, reversed stone or reversed paper";
    }

    // if valid input
    var player = input;
    console.log("Computer Choice", computer);
    console.log("User Choice", input);
    winLose = LOST;
    var myOutputValue = `${userName}, you have chosen ${input} and you have lost to the computer's choice ${computer}! <br> you lose! <br> Please type reversed scissors, reversed paper or reversed stone to start a new game `;

    //check for win
    if (
      (player == REVERSEDPAPER && computer == SCISSORS) ||
      (player == REVERSEDSTONE && computer == PAPER) ||
      (player == REVERSEDSCISSORS && computer == STONE)
    ) {
      winLose = WIN;
      console.log("Num of player wins", playerWinCount);
      myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br>`;
    }

    //check for draw
    if (
      (player == REVERSEDPAPER && computer == PAPER) ||
      (player == REVERSEDSCISSORS && computer == SCISSORS) ||
      (player == REVERSEDSTONE && computer == STONE)
    ) {
      winLose = DRAW;
      myOutputValue = `You have played ${input} and the computer's choice is ${computer}! <br> Its a draw!!`;
    }

    var adjustCount = countRound();
    rounds += 1;
    var winrate = winRate();

    myOutputValue =
      myOutputValue +
      `<br><br> Statistics <br> ${userName} win count: ${playerWinCount} <br> Computer win count: ${comWinCount} <br> Win rate: ${winrate}% <br> <br> Now you can type "scissors, paper or stone to start new game`;

    return myOutputValue;
  }

  if (mode == NORMAL) {
    var computer = computerChoice();
    var checkforvalidinput = validInputCheck(input);

    //if invalid input
    if (checkforvalidinput == false) {
      return "you have entered an incorrect input, please choose either scissors, stone or paper";
    }

    // if valid input
    var player = input;
    console.log("Computer Choice", computer);
    console.log("User Choice", input);
    winLose = LOST;
    var myOutputValue = `${userName}, you have chosen ${input} and you have lost to the computer's choice ${computer}! <br> you lose! <br> Please type scissors, paper or stone to start a new game `;

    //check for win
    if (
      (player == STONE && computer == SCISSORS) ||
      (player == SCISSORS && computer == PAPER) ||
      (player == PAPER && computer == STONE)
    ) {
      winLose = WIN;
      console.log("Num of player wins", playerWinCount);
      myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br>`;
    }

    //check for draw
    if (player == computer) {
      winLose = DRAW;
      myOutputValue = `You have played ${input} and the computer's choice is ${computer}! <br> Its a draw!!`;
    }

    var adjustCount = countRound();
    rounds += 1;
    var winrate = winRate();

    myOutputValue =
      myOutputValue +
      `<br><br> Statistics <br> ${userName} win count: ${playerWinCount} <br> Computer win count: ${comWinCount} <br> Win rate: ${winrate}% <br> <br> Now you can type "scissors, paper or stone to start new game`;

    return myOutputValue;
  }

  if (mode == KOREANSPS) {
    var computer = computerChoice();
    var checkforvalidinput = validInputCheck(input);

    //if invalid input
    if (checkforvalidinput == false) {
      return "you have entered an incorrect input, please choose either scissors, stone or paper";
    }

    // if valid input
    var player = input;
    console.log("Computer Choice", computer);
    console.log("User Choice", input);

    if (
      (player == STONE && computer == SCISSORS) ||
      (player == SCISSORS && computer == PAPER) ||
      (player == PAPER && computer == STONE)
    ) {
      mostrecentwinner = PLAYER;
      console.log(mostrecentwinner);
      myOutputValue = `You have played ${input} and you have won the computer's choice ${computer}! <br> you have to draw the next round with the computer in order to win!`;
    }

    if (
      (computer == STONE && player == SCISSORS) ||
      (computer == SCISSORS && player == PAPER) ||
      (computer == PAPER && player == STONE)
    ) {
      mostrecentwinner = COMPUTER;
      console.log(mostrecentwinner);
      myOutputValue = `You have played ${input} and you have lost to the computer's choice ${computer}! <br> if you draw with the computer for the next round, you will lose!`;
    }

    //check for win
    if (player == computer) {
      console.log(mostrecentwinner);

      if (mostrecentwinner == PLAYER) {
        winLose = WIN;
        myOutputValue = `<br> You have won! <br>`;
        mostrecentwinner = "";
      }

      if (mostrecentwinner == COMPUTER) {
        winLose = LOST;
        myOutputValue = `<br> You have LOST! <br>`;
        mostrecentwinner = "";
      }

      if (!mostrecentwinner) {
        winLose = DRAW;
        myOutputValue = `<br> You have drawed! <br>`;
      }
    }

    var adjustCount = countRound();
    rounds += 1;
    var winrate = winRate();
    myOutputValue =
      myOutputValue +
      `<br><br> Statistics <br> ${userName} win count: ${playerWinCount} <br> Computer win count: ${comWinCount} <br> Win rate: ${winrate}% <br> <br> Now you can type "scissors, paper or stone for the next game`;

    return myOutputValue;
  }
};
