var playerWinCount = 0;
var cpuWinCount = 0;
var tieCount = 0;
var nameInput = 0;
var gameMode = 0; // 1 = standard, 2 = korean, 3 = CPU
var currentWinner = 0; // 1= player, 2= cpu
//Name input message
document.getElementById("output-div").innerHTML = "Please input your name!";

var main = function (input) {
  var myOutputValue;
  var playerInput = input;
  //check player name input state
  if (nameInput == 0) {
    document.getElementById("header").innerHTML = "Welcome " + input + "!";
    //Display message to select game option
    myOutputValue =
      'Type your game mode anytime to change: "Standard", "Korean" or "CPU".';
    nameInput = 1;
    return myOutputValue;
  }
  //game mode select and reset counters

  if (playerInput == "Standard") {
    gameMode = 1;
    myOutputValue = "Game mode is now Standard.";
    resetCounter();
    return myOutputValue;
  }
  if (playerInput == "Korean") {
    gameMode = 2;
    myOutputValue = "Game mode is now Korean.";
    resetCounter();
    return myOutputValue;
  }
  if (playerInput == "CPU") {
    gameMode = 3;
    myOutputValue = "Game mode is now CPU.";
    resetCounter();
    return myOutputValue;
  }

  //Standard game//
  if (gameMode == 1) {
    //validate input
    if (validateInput(playerInput)) {
      myOutputValue =
        "Your input is not valid. Please enter 'sissors, 'paper' or 'stone'.";
      return myOutputValue;
    }
    var cpuInputCase = generateCpuInput();
    var cpuInputSign = convertCpuInput(cpuInputCase);
    var winner = judgeWinner(playerInput, cpuInputSign);

    //output winning message
    if (winner == "player") {
      playerWinCount = playerWinCount + 1;
      myOutputValue = `Player wins! <br/> You played ${playerInput}. <br/> CPU played ${cpuInputSign}. You have won ${playerWinCount} times!`;
    }
    if (winner == "cpu") {
      cpuWinCount = cpuWinCount + 1;
      myOutputValue = `CPU wins! <br/> You played ${playerInput}.<br/> CPU played ${cpuInputSign}. The CPU has won ${cpuWinCount} times!`;
    }
    if (winner == "tie") {
      tieCount = tieCount + 1;
      myOutputValue = `It's a tie!<br/> You played ${playerInput}.<br/> CPU played ${cpuInputSign}. There has been ${tieCount} ties!`;
    }
    return myOutputValue;
  }
  // End of standard game//

  //Korean Game//
  if (gameMode == 2) {
    var mukPhrase = "Muk-jji-ppa!";
    //validate input
    if (validateInput(playerInput)) {
      myOutputValue =
        "Your input is not valid. Please enter 'sissors, 'paper' or 'stone'.";
      return myOutputValue;
    }
    //Roll and judge
    var cpuInputCase = generateCpuInput();
    var cpuInputSign = convertCpuInput(cpuInputCase);
    var winner = judgeWinner(playerInput, cpuInputSign);
    //Output 1st Round
    if (currentWinner == 0) {
      if (winner == "player") {
        currentWinner = 1;
        myOutputValue = "You won! " + mukPhrase;
        return myOutputValue;
      }
      if (winner == "cpu") {
        currentWinner = 2;
        myOutputValue = "CPU wins!" + mukPhrase;
        return myOutputValue;
      }
      if (winner == "tie") {
        currentWinner = 0;
        myOutputValue = "It's a tie! Go again!";
        return myOutputValue;
      }
    }
    //Round two
    //player won 1st
    if (currentWinner == 1) {
      currentWinner = 0;
      if (playerInput == cpuInputSign) {
        playerWinCount = playerWinCount + 1;
        myOutputValue = `Player wins! <br/> You have won ${playerWinCount} times!`;
        return myOutputValue;
      }
      myOutputValue = mukPhrase + "Go again!";
      return myOutputValue;
    }
    //CPU won 1st
    if (currentWinner == 2) {
      currentWinner = 0; //reset winner
      if (playerInput == cpuInputSign) {
        cpuWinCount = cpuWinCount + 1;
        myOutputValue = `CPU wins! <br/> CPU has won ${cpuWinCount} times!`;
        return myOutputValue;
      }

      myOutputValue = mukPhrase + "Go again!";
      return myOutputValue;
    }
  }
  //End of Korean game//

  //CPU game//
  if (gameMode == 3) {
    //CPUs rolling
    var cpuOne = convertCpuInput(generateCpuInput());
    var cpuTwo = convertCpuInput(generateCpuInput());
    var winner = judgeWinner(cpuOne, cpuTwo);

    //output winning message
    if (winner == "player") {
      playerWinCount = playerWinCount + 1;
      myOutputValue = `CPU 1 wins! <br/> CPU 1 played ${cpuOne}. <br/> CPU 2 played ${cpuTwo}. CPU 1 have won ${playerWinCount} times!`;
    }
    if (winner == "cpu") {
      cpuWinCount = cpuWinCount + 1;
      myOutputValue = `CPU 2 wins! <br/> CPU 2 played ${cpuTwo}.<br/> CPU 1 played ${cpuOne}. The CPU 2 has won ${cpuWinCount} times!`;
    }
    if (winner == "tie") {
      tieCount = tieCount + 1;
      myOutputValue = `It's a tie!<br/> CPU 1 played ${cpuOne}.<br/> CPU 2 played ${cpuTwo}. There has been ${tieCount} ties!`;
    }
    return myOutputValue;
  }
  //End of CPU game//
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

//Judgement outputs winning message.(player =1 cpu  =2)
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

//validate player input to be sissors paper or stone, wrong input = true
var validateInput = function (input) {
  if (input != "paper" && input != "sissors" && input != "stone") {
    return true;
  }
  return false;
};

// global counter reset function, used when modes change
var resetCounter = function () {
  playerWinCount = 0;
  cpuWinCount = 0;
  tieCount = 0;
  currentWinner = 0;
  return;
};
