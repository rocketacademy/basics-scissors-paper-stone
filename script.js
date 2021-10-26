// var currentGameMode = "waiting for user name";
var counter = 0;
var winRecord = 0;
var loseRecord = 0;
var drawRecord = 0;

var userName = "";

// Why my userName doesnt appear?
// var game_mode_type_msg = `Hello ${userName}! Please select game mode type by entering the numeric number. <br><br> 1 - Normal Mode <br><br> 2 - Korean <br><br> 3 - COM vs COM`;
// console.log("a");

var main = function (input) {
  // if input input is blank, it'll ask to input username
  if (!userName) {
    if (!input) {
      console.log("Input username");
      return "Please input username!";
    } else {
      userName = input;
      console.log(`You have input your username: ${userName}`);
      var inputText = document.getElementById("input-field");
      inputText.placeholder = "Pick your move";
      return (myOutputValue = `Hello ${userName}! Pick your moves: scissors &#9996, paper &#9995 or stone &#9994?`);
    }
  }

  var own = input.toLowerCase();
  var computer = rollDice();
  var myOutputValue = "";
  myOutputValue = win_lose_draw(own, computer);
  // myOutputValue = "Ops. Try again! The opponent's move was " + COM;
  return myOutputValue;
};

var rollDice = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var opponent = randomInteger + 1;
  if (opponent == 1) {
    sps = "scissors";
  }
  if (opponent == 2) {
    console.log("should enter if opponent is 2");
    sps = "paper";
  }
  if (opponent == 3) {
    sps = "stone";
  }
  return sps;
};

var win_lose_draw = function (own, computer) {
  counter += 1;
  // var myOutputValue = {
  //   ":scissors:": "&#9995",
  //   ":paper:": "&#9995",
  //   ":stone:": "&#9994",
  // };
  myOutputValue = `You lose &#129335 <br> <br> Your move is ${own}. <br> Your opponent's move is ${computer}. <br><br> You've lose ${loseRecord}/${counter} rounds.`;
  // it's a draw
  if (own == computer) {
    // the same as <drawRecord = drawRecord + 1>
    drawRecord += 1;
    myOutputValue = `It's a draw &#128528 <br> <br> Your move is ${own}. <br> Your opponent's move is ${computer}. <br><br> You've got draw ${drawRecord}/${counter} rounds.`;
  }
  // winning conditions
  if (
    (own == "scissors" && computer == "paper") ||
    (own == "paper" && computer == "stone") ||
    (own == "stone" && computer == "scissors")
  ) {
    winRecord += 1;
    myOutputValue = `You win &#128588 <br> <br> Your move is ${own}. <br> Your opponent's move is ${computer}. <br><br> You've won ${winRecord}/${counter} rounds.`;
  }
  loseRecord += 1;
  return myOutputValue;
};
