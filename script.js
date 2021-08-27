var random_pss = function () {
  var paper = "Paper";
  var scissors = "Scissors";
  var stone = "Stone";
  //random numbers from 1 - 3
  var choices = Math.floor(Math.random() * 3) + 1;
  // randomize the paper scissors stone
  if (choices == 1) {
    return paper;
  } else if (choices == 2) {
    return scissors;
  } else if (choices == 3) {
    return stone;
  }
};

var process = function (mypov, computer_pov) {
  //normal stream
  if (mypov == "Scissors" && computer_pov == "Paper") return "you win!";
  else if (mypov == "Scissors" && computer_pov == "Stone") return "you lose!";
  else if (mypov == "Paper" && computer_pov == "Stone") return "you win!";
  else if (mypov == "Paper" && computer_pov == "Scissors") return "you lose!";
  else if (mypov == "Stone" && computer_pov == "Scissors") return "you win!";
  else if (mypov == "Stone" && computer_pov == "Paper") return "you lose!";

  //reversed stream
  if (mypov == "Reversed Scissors" && computer_pov == "Paper")
    return "you lose!";
  else if (mypov == "Reversed Scissors" && computer_pov == "Stone")
    return "you win!";
  else if (mypov == "Reversed Paper" && computer_pov == "Stone")
    return "you lose!";
  else if (mypov == "Reversed Paper" && computer_pov == "Scissors")
    return "you win!";
  else if (mypov == "Reversed Stone" && computer_pov == "Scissors")
    return "you lose!";
  else if (mypov == "Reversed Stone" && computer_pov == "Paper")
    return "you win!";
};

var display_msg = function (input, computer_pov) {
  return (
    "Computer chose " + computer_pov + "<br>" + "You chose " + input + "<br>"
  );
};

var draw = function (input, computer_pov) {
  if (input == computer_pov) return "its draw!";
  if (input == "Reversed Paper" && computer_pov == "Paper") return "its draw!";
  if (input == "Reversed Scissors" && computer_pov == "Scissors")
    return "its draw!";
  if (input == "Reversed Stone" && computer_pov == "Stone") return "its draw!";
};

var main = function (input) {
  var computer_pov = random_pss();
  //validation
  if (
    input != "Scissors" &&
    input != "Paper" &&
    input != "Stone" &&
    input != "Reversed Scissors" &&
    input != "Reversed Paper" &&
    input != "Reversed Stone"
  )
    return "Write Properly!!!! Try again!!!!!!";

  var finale = process(input, computer_pov);
  var finale_draw = draw(input, computer_pov);
  var message = display_msg(input, computer_pov);
  if (finale == "you win!") return message + "You Win! Congrats";
  if (finale == "you lose!") return message + "You lose! Bummer.";
  if (finale_draw == "its draw!") return message + "It is a draw! try again!";
  console.log(computer_pov);
};
