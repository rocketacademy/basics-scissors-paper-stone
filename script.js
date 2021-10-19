// script.js contains logic for rock paper scissors game

// random computer generator for rock paper scissors
var computerChoice = function () {
  var words = ["rock", "paper", "scissors"];
  var word = words[Math.floor(Math.random() * words.length)];
  return word;
};

var SPSLogic = (input, comInput) => {
  // user perspective
  var win = true;
  var lose = true;
  var draw = true;

  var i = input.toLowerCase();
  var c = comInput.toLowerCase();
  console.log(`user_input: ${i}, computer_input: ${c}`);

  switch (true) {
    case i == "scissors" && c == "scissors":
      win = false;
      lose = false;
      break;
    case i == "scissors" && c == "paper":
      lose = false;
      draw = false;
      break;
    case i == "scissors" && c == "rock":
      win = false;
      draw = false;
      break;
    case i == "paper" && c == "paper":
      win = false;
      lose = false;
      break;
    case i == "paper" && c == "scissors":
      win = false;
      draw = false;
      break;
    case i == "paper" && c == "rock":
      lose = false;
      draw = false;
      break;
    case i == "rock" && c == "rock":
      win = false;
      lose = false;
      break;
    case i == "rock" && c == "paper":
      win = false;
      draw = false;
      break;
    case i == "rock" && c == "scissors":
      lose = false;
      draw = false;
      break;
  }

  // console.log(win, lose, draw);
  return { win, lose, draw };
};

var main = function (input) {
  console.log(input);
  var result = "";
  var comChoice = computerChoice();
  var output = SPSLogic(input, comChoice);

  if (output.win) {
    result = "win";
  }

  if (output.lose) {
    result = "loss";
  }

  if (output.draw) {
    result = "draw";
  }

  return { comChoice, result };
};
