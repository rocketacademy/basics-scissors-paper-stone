var win_record = 0;
var draw_record = 0;
var lose_record = 0;
var total_games = 0;

var username = "";

var main = function (input) {
  // if username contains something, it'll ignore the if !input
  if (!username) {
    // if input input is blank, it'll ask to input username
    if (!input) {
      console.log("Input username");
      return "Please input username!";
    }
    console.log(`You have input your username: ${username}`);
    username = input;
    return "Please select Scissors, Paper or Stone to begin.";
  }
  // Ensure that an entry is submitted everytime
  if (!input) {
    return "Please input Scissors, Paper or Stone.";
  }

  var ownchoice = input.toLowerCase();
  var sps = random_sps();

  var myOutputValue = "";
  var standard_msg = "";
  var win_lose_msg = "";

  // Only show the additional rule once
  if (!total_games) {
    additional_rule =
      "<br> <br> Now you can type 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper' or 'reversed stone' to start a new game. ";
  }

  myOutputValue = win_or_lose(ownchoice, sps) + additional_rule;
  total_games = win_record + draw_record + lose_record;

  if (win_record > Math.floor(0.5 * total_games)) {
    win_lose_msg = "Pretty good!";
  } else {
    win_lose_msg = "Try harder!";
  }

  myOutputValue += `<br><br> ${username} has won ${win_record}/${total_games} number of games. ${win_lose_msg}`;

  console.log("You picked", ownchoice);
  console.log("Computer picked", sps);

  return myOutputValue;
};

var random_sps = function () {
  var randomNumber = Math.random() * 3;
  var integernumber = Math.floor(randomNumber);
  var computerChoice = integernumber + 1;

  if (computerChoice == 1) {
    sps = "scissors";
  }

  if (computerChoice == 2) {
    sps = "paper";
  }

  if (computerChoice == 3) {
    sps = "stone";
  }
  return sps;
};

var win_or_lose = function (ownchoice, sps) {
  var msg =
    "You picked " +
    ownchoice +
    " <br> COM picked " +
    sps +
    `<br> <br> ${username} lost!`;
  if (
    ownchoice == sps ||
    (ownchoice == "reversed scissors" && sps == "scissors") ||
    (ownchoice == "reversed paper" && sps == "paper") ||
    (ownchoice == "reversed stone" && sps == "stone")
  ) {
    msg =
      `${username} picked ` +
      ownchoice +
      " <br> COM picked " +
      sps +
      "<br> <br> It's a draw! ";
    draw_record += 1;

    return msg;
  }

  if (
    (ownchoice == "scissors" && sps == "paper") ||
    (ownchoice == "paper" && sps == "stone") ||
    (ownchoice == "stone" && sps == "scissors") ||
    (ownchoice == "reversed scissors" && sps == "stone") ||
    (ownchoice == "reversed paper" && sps == "scissors") ||
    (ownchoice == "reversed stone" && sps == "paper")
  ) {
    msg =
      `${username} picked ` +
      ownchoice +
      " <br> COM picked " +
      sps +
      `<br> <br> ${username} won!`;
    win_record += 1;

    return msg;
  }

  if (
    ownchoice != "reversed scissors" &&
    ownchoice != "reversed paper" &&
    ownchoice != "reversed stone" &&
    ownchoice != "scissors" &&
    ownchoice != "paper" &&
    ownchoice != "stone"
  ) {
    msg =
      "Please select 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper', or 'reversed stone'.";

    return msg;
  }

  lose_record += 1;
  return msg;
};
