var main = function (input) {
  var computer = computerChoice();
  var myOutputValue = "";
  var outcome = decision(input, computer);
  var playerEmoji = emoticon(input);
  var computerEmoji = emoticon(computer);

  if (input != "scissors" && input != "paper" && input != "stone") {
    myOutputValue = `You did not enter a valid input. <br> Please type and enter either "scissors", "paper" or "stone".`;
  } else {
    myOutputValue = `The computer chose ${computer}${computerEmoji}. <br> You chose ${input}${playerEmoji}. <br> ${outcome} <br> ${reminder}`;
  }
  return myOutputValue;
};

// input a choice between scissors paper stone
// output if the player has won the game against the computer
// if input is not valid, output will indicate what are the valid choices and remind the player to play them accordingly

var computerChoice = function () {
  var randomInteger = Math.ceil(Math.random() * 3);
  var computerPlay = "";
  switch (randomInteger) {
    case 1:
      computerPlay = "scissors";
      break;
    case 2:
      computerPlay = "paper";
      break;
    case 3:
      computerPlay = "stone";
  }
  return computerPlay;
};

var decision = function (player, computer) {
  var message = "";
  if (player == "scissors") {
    switch (computer) {
      case "scissors":
        message = "It is a draw.";
        break;
      case "paper":
        message = "Congratulations, you won!";
        break;
      case "stone":
        message = "You lose! Bummer.";
    }
  } else if (player == "paper") {
    switch (computer) {
      case "scissors":
        message = "You lose! Bummer";
        break;
      case "paper":
        message = "It is a draw.";
        break;
      case "stone":
        message = "Congratulations, you won!";
    }
  } else if (player == "stone") {
    switch (computer) {
      case "scissors":
        message = "Congratulations, you won!";
        break;
      case "paper":
        message = "You lose! Bummer";
        break;
      case "stone":
        message = "It is a draw.";
    }
  }
  return message;
};

var reminder =
  'Now you can type "scissors" "paper" or "stone" to play another round!';

var emoticon = function (play) {
  var emoji = "";
  switch (play) {
    case "scissors":
      emoji = String.fromCodePoint(0x2702);
      break;
    case "paper":
      emoji = String.fromCodePoint(0x1f4c4);
      break;
    case "stone":
      emoji = String.fromCodePoint(0x1f5ff);
  }
  return emoji;
};
