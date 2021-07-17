var main = function (input) {
  // Checks if it is a reversed game and run it and output
  if (input.toLowerCase().includes("reversed")) {
    return playReversedGame(
      input.toLowerCase().replace("reversed", "").trim(),
      SPS()
    );
  }
  //run game and output
  var myOutputValue = playGame(input.toLowerCase().trim(), SPS());
  return myOutputValue;
};
// global counter to count number of wins
var wincounter = 0;
var playcounter = 0;
//function to generate random choice
function SPS() {
  const hands = ["scissors", "paper", "stone"];
  return hands[Math.floor(Math.random() * 3)];
}

// to decide on who won the game
function playGame(player, computer) {
  if (player == computer) {
    return draw(player, computer);
  } else if (player == "scissors") {
    if (computer == "stone") {
      return lose(player, computer);
    } else if (computer == "paper") {
      return win(player, computer);
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      return lose(player, computer);
    } else if (computer == "stone") {
      return win(player, computer);
    }
  } else if (player == "stone") {
    if (computer == "paper") {
      return lose(player, computer);
    } else if (computer == "scissors") {
      return win(player, computer);
    }
  } else {
    return "Please enter only scissors,paper or stone";
  }
}

// adds some cute emoji to messages
function cuteSelector(input) {
  if (input == "paper") {
    return "🖐";
  } else if (input == "scissors") {
    return "✌";
  } else if (input == "stone") {
    return "✊";
  }
}

//winning message
function win(player, computer) {
  wincounter++;
  playcounter++;
  return `You won! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(
    computer
  )} <br> You won ${wincounter} times out of ${playcounter} plays `;
}

//losing message
function lose(player, computer) {
  playcounter++;
  return `You lost! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(
    computer
  )} <br> You won ${wincounter} times out of ${playcounter} plays`;
}

//draw message
function draw(player, computer) {
  playcounter++;
  return `Draw! You chose ${player}${cuteSelector(
    player
  )} and the computer chose ${computer}${cuteSelector(
    computer
  )} <br> You won ${wincounter} times out of ${playcounter} plays`;
}

//function to determine who wins the reversed game
function playReversedGame(player, computer) {
  if (player == computer) {
    return draw(player, computer);
  } else if (player == "scissors") {
    if (computer == "stone") {
      return win(player, computer);
    } else if (computer == "paper") {
      return lose(player, computer);
    }
  } else if (player == "paper") {
    if (computer == "scissors") {
      return win(player, computer);
    } else if (computer == "stone") {
      return lose(player, computer);
    }
  } else if (player == "stone") {
    if (computer == "paper") {
      return win(player, computer);
    } else if (computer == "scissors") {
      return lose(player, computer);
    }
  } else {
    return "Please enter only scissors,paper or stone";
  }
}
