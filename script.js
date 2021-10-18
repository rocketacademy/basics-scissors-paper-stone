var win_record = 0;
var draw_record = 0;
var lose_record = 0;
var total_games = 0;
var played = 0;
var username = "";
var korean_winner = "";
var korean_draw = "";

var game_mode = 0;
var game_mode_type_msg =
  "Please select game mode type by entering the numeric number. <br><br> 1 - Normal Mode <br><br> 2 - Korean <br><br> 3 - COM vs COM";

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
    return game_mode_type_msg;
  }
  // Ensure that an entry is submitted everytime
  // if game is not = 0, then ignore all the ifs
  if (!game_mode) {
    if (!input) {
      console.log("Please input game mode.");
      return game_mode_type_msg;
    }
    game_mode = Number(input);
    // if all status is true, then game mode not found
    if (game_mode != 1 && game_mode != 2 && game_mode != 3) {
      game_mode = 0;
      console.log("Game mode not found.");
      return game_mode_type_msg;
    }
    game_mode = input;
    console.log(`Game mode ${game_mode}`);
    return `Game mode ${game_mode} selected! Please select Scissors, Paper or Stone to begin.`;
  }

  // Ensure that for any other gamemode, the input has to be filled
  if (game_mode != 3) {
    if (!input) {
      return "Please select Scissors, Paper or Stone to begin.";
    }
  }

  var ownchoice = input.toLowerCase();

  // For game_mode = 3, self select
  if (game_mode == 3) {
    ownchoice = random_sps();
  }
  var sps = random_sps();

  var myOutputValue = "";
  // show additional rules once only
  var additional_rule = "";
  var win_lose_msg = "";
  var korean_msg = "";

  // Only show the additional rule once
  if (!played) {
    additional_rule =
      "<br> <br> Now you can type 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper' or 'reversed stone' to start a new game. ";
  }

  myOutputValue = win_or_lose(ownchoice, sps, game_mode) + additional_rule;

  if (game_mode == 2) {
    if (korean_draw == "Y" && korean_winner == username) {
      win_record += 1;
      korean_msg = `<br><br> ${korean_winner} has won the game!! MUK-JJI-PPA!`;
    }
    if (korean_draw == "Y" && korean_winner == "COM") {
      lose_record += 1;
      korean_msg = `<br><br> ${korean_winner} has won the game!! MUK-JJI-PPA!`;
    }
    myOutputValue += `${korean_msg}`;
  }

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

var win_or_lose = function (ownchoice, sps, game_mode) {
  if (
    ownchoice != "reversed scissors" &&
    ownchoice != "reversed paper" &&
    ownchoice != "reversed stone" &&
    ownchoice != "scissors" &&
    ownchoice != "paper" &&
    ownchoice != "stone"
  ) {
    msg = `Please select 'scissors', 'paper', 'stone', 'reversed scissors', 'reversed paper', or 'reversed stone'. <br><br> You selected '${ownchoice}'`;

    return msg;
  }
  played += 1;
  korean_draw = "";

  var msg = `${username} picked ${ownchoice} <br> COM picked ${sps}<br> <br> ${username} lost!`;
  if (
    ownchoice == sps ||
    (ownchoice == "reversed scissors" && sps == "scissors") ||
    (ownchoice == "reversed paper" && sps == "paper") ||
    (ownchoice == "reversed stone" && sps == "stone")
  ) {
    msg = `${username} picked ${ownchoice} <br> COM picked ${sps} <br> <br> It's a draw! `;

    if (game_mode == 1 || game_mode == 3) {
      draw_record += 1;
    }

    korean_draw = "Y";

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
    msg = `${username} picked ${ownchoice} <br> COM picked ${sps} <br> <br> ${username} won! `;

    if (game_mode == 1 || game_mode == 3) {
      win_record += 1;
    }
    korean_winner = username;
    if (game_mode == 2) {
      msg += ` ${korean_winner} says muk-jji-ppa!`;
    }

    return msg;
  }

  if ((game_mode == 1) | (game_mode == 3)) {
    lose_record += 1;
  }

  // If korean game lose
  if (game_mode == 2) {
    korean_winner = "COM";
    msg += ` ${korean_winner} says muk-jji-ppa!`;
  }
  return msg;
};
