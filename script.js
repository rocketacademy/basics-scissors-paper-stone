var main = function (input) {
  var myOutputValue = myOutputValue;
  return inputVsGen(input);
};

function randomGen() {
  var randomNum = Math.floor(Math.random() * 3);
  console.log(randomGen);
  if (randomNum == 0) {
    return "scissors";
  } else if (randomNum == 1) {
    return "stone";
  } else {
    return "paper";
  }
}

function inputVsGen(input) {
  var computer = randomGen();
  console.log(computer);
  if (input === "scissors" && computer == "scissors") {
    return draw(input, computer);
  } else if (input === "scissors" && computer == "stone") {
    return lose(input, computer);
  } else if (input === "scissors" && computer == "paper") {
    return win(input, computer);
  } else if (input === "paper" && computer == "paper") {
    return draw(input, computer);
  } else if (input === "paper" && computer == "scissors") {
    return lose(input, computer);
  } else if (input === "paper" && computer == "stone") {
    return win(input, computer);
  } else if (input === "stone" && computer == "stone") {
    return draw(input, computer);
  } else if (input === "stone" && computer == "paper") {
    return lose(input, computer);
  } else if (input === "stone" && computer == "scissors") {
    return win(input, computer);
  } else {
    return "Enter scissors,paper or stone";
  }
}

function win(player, computer) {
  return "You win you chose " + player + " And the computer chose " + computer;
}

function lose(player, computer) {
  return "You lose you chose " + player + " And the computer chose " + computer;
}

function draw(player, computer) {
  return (
    "It was a Draw you chose " + player + " And the computer chose " + computer
  );
}
