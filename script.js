var main = function (input) {
  var myOutputValue = "hello world";
  var playerInput = input;
  //validate player input to be sissors paper or stone
  console.log("validating");
  if (
    playerInput != "paper" &&
    playerInput != "sissors" &&
    playerInput != "stone"
  ) {
    myOutputValue =
      "Your input is not valid. Please enter 'sissors, 'paper' or 'stone'.";
    return myOutputValue;
  }
  console.log("passed validation");
  //generate and judge winner
  var cpuInputCase = generateCpuInput();
  var cpuInputSign = convertCpuInput(cpuInputCase);
  var winner = judgeWinner(playerInput, cpuInputSign);

  //output winning message
  if (winner == "player") {
    myOutputValue = `Player wins! <br/> You played ${playerInput}. <br/> CPU played ${cpuInputSign}.`;
  }
  if (winner == "cpu") {
    myOutputValue = `CPU wins! <br/> You played ${playerInput}.<br/> CPU played ${cpuInputSign}.`;
  }
  if (winner == "tie") {
    myOutputValue = `It's a tie!<br/> You played ${playerInput}.<br/> CPU played ${cpuInputSign}.`;
  }
  return myOutputValue;
};

//Creating random hand sign
//Random generation of 3 cases
var generateCpuInput = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal); //Generates 0-2
  return randomInteger;
};

//Coversion of 3 cases
var convertCpuInput = function (randomInteger) {
  // Case 0 default Sissors
  var outputSign = "sissors";
  //Case 1 Paper
  if (randomInteger == 1) {
    outputSign = "paper";
  }
  //Case 2 Stone
  if (randomInteger == 2) {
    outputSign = "stone";
  }
  return outputSign;
};

//Judgement outputs winning message.
var judgeWinner = function (player, cpu) {
  var winner = "cpu"; // default cpu wins
  // sissor player wins when cpu is paper or draw when cpu sissors
  if (player == "sissors") {
    if (cpu == "paper") {
      winner = "player";
    }
    if (cpu == "sissors") {
      winner = "tie";
    } else {
      console.log("passed sissors validation");
      return winner; //cut short
    }
  }
  // paper player wins when cpu stone or draw when cpu paper
  if (player == "paper") {
    if (cpu == "stone") {
      winner = "player";
    }
    if (cpu == "paper") {
      winner = "tie";
    } else {
      return winner;
    }
  }
  // stone player wins when cpu sissors or draw when cpu stone
  if (player == "stone") {
    if (cpu == "sissors") {
      winner = "player";
    }
    if (cpu == "stone") {
      winner = "tie";
    } else {
      return winner;
    }
  }
  return winner;
};
