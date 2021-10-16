// initialize user name
var userName = '';
var isUsernameSet = false;

// initialize turns played and turns won
var turnsPlayed = 0;
var turnsWon = 0;

// initialize each possible input
var validInput1 = 'scissors';
var validInput2 = 'paper';
var validInput3 = 'stone';

// initialize reverse settings
var reverseInput = 'reverse';
var isReverse = false;

// initialize most recent winner
var mostRecentWinner = '';

// initialize game type
var gameType = 'regular';
var isGameTypeSet = false;

// initialize computer mode
var isComputerMode = false;
var isComputerModeSet = false;

var getComputerSps = function () {
  // generate a value between 0 and 2.9999...
  var randomDecimal = Math.random() * 3;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // number type ranges from 1 to 3, inclusive.
  var numberType = randomInteger + 1;

  // 1: scissors
  if (numberType == 1) {
    return validInput1;
  }

  // 2: paper
  if (numberType == 2) {
    return validInput2;
  }

  // 3: stone
  return validInput3;
};

var getSpsEmoji = function (spsType) {
  // scissors
  if (spsType == validInput1) {
    return '&#9986;&#65039;';
  }

  // paper
  if (spsType == validInput2) {
    return '&#128220;';
  }

  // stone
  return '&#128142;';
};

var getWinningState = function (playerInput, computerInput, reverse) {
  // initialize message to show when there's a draw
  var drawMessage = "<br /><br />It's a draw!";

  // initialize winning condition, assuming non-reverse
  // player chose scissors, computer chose paper
  // player chose paper, computer chose stone
  // player chose stone, computer chose paper
  var isWinning = (playerInput == validInput1 && computerInput == validInput2)
    || (playerInput == validInput2 && computerInput == validInput3)
    || (playerInput == validInput3 && computerInput == validInput1);

  // reverse winning condition
  if (reverse) {
    isWinning = !isWinning;
  }

  // draw conditions:
  // same inputs from both
  if (playerInput == computerInput) {
    // end current game if most recent winner is determined, and game type is korean
    if (mostRecentWinner != '' && gameType == 'korean') {
      // message to be printed
      drawMessage = drawMessage + ' Since ' + mostRecentWinner + ' was the most recent winner, ' + mostRecentWinner + ' is the ultimate winner of this game! Please type in your name above to start a new game.';

      // reset game state
      turnsPlayed = 0;
      turnsWon = 0;
      mostRecentWinner = '';
      userName = '';
      isUsernameSet = false;
      gameType = 'regular';
      isGameTypeSet = false;
      isComputerMode = false;
      isComputerModeSet = false;
    }
    return drawMessage;
  }

  // winning condition
  // initialized above
  if (isWinning) {
    turnsWon = turnsWon + 1;
    mostRecentWinner = userName;
    return '<br /><br />You win! Congratulations!';
  }

  // losing conditions:
  // everything else
  mostRecentWinner = 'Computer';
  return '<br /><br />You lose! Bummer.';
};

var getWinLossRecord = function () {
  var output = '<br /><br />So far ' + userName + ', you\'ve been winning ' + turnsWon + '/' + turnsPlayed + ' turns.';

  // if you win at least half of the matches
  if (turnsWon * 2 >= turnsPlayed) {
    return output + ' Pretty good!';
  }

  // base case: losing more than half of the matches
  return output + ' Try harder the subsequent rounds!';
};

var setPreGameMessage = function (input) {
  // trim the input, ie. remove trailing and leading spaces
  var trimmedInput = input.trim();

  // base case: input is an empty string
  var output = 'You are not allowed to have an empty name! Please enter a valid name above!';

  // input is valid, ie. not an empty string
  if (trimmedInput != '') {
    userName = trimmedInput;
    isUsernameSet = true;
    output = 'Welcome ' + userName + '! Would you like to play the regular or Korean version of Scissors Paper Stone?<br/><br/>In the Korean version, we will keep track of the most recent winner. When there\'s a draw, the most recent winner is the ultimate winner of the game.<br /><br />If you want to play the Korean version, please type in "Korean" above and submit. Otherwise, just type in "regular"';
  }

  return output;
};

var setReverseMessage = function (reverse) {
  // base: assume reverse
  var output = userName.toUpperCase() + ', IT\'S NOW TIME TO PLAY REVERSE! The rules are now reversed: scissors beat stone, stone beats paper, and paper beats scissors.';
  var appendedString = '<br /><br />Please type in any 1 of the following 3 items: scissors, paper, stone. Hit Submit to choose your item.';

  // if you want to reset back to non-reverse
  if (!reverse) {
    output = 'Welcome back ' + userName + ', to your proper game of Scissors, Paper, Stone!';
  }

  if (isComputerMode) {
    appendedString = '<br /><br />Since you have decided to spectate for this game, we will still be choosing for you. We can only promise to be lucky ;).';
  }

  output = output + appendedString;

  return output;
};

var setGameType = function (input) {
  // base: regular
  var output = 'You have decided to play the regular version of Scissors Paper Stone.';

  if (input == 'korean') {
    output = 'You have decided to play the Korean version of Scissors Paper Stone.<br/><br/>In the Korean version, we will keep track of the most recent winner. When there\'s a draw, the most recent winner is the ultimate winner of the game.';
    gameType = 'korean';
  }

  isGameTypeSet = true;
  // both the regular and korean versions require the instructions below
  output = output + '<br /><br />Do you prefer to play this game, or spectate? If you wish to spectate, please type in "spectate" above and submit. Otherwise, type in "play" above and submit.';
  return output;
};

var setComputerMode = function (input) {
  // base: play
  var output = 'You have decided to play!<br /><br />Please type in any 1 of the following 3 items: scissors, paper, stone. Hit Submit to choose your item.';

  if (input == 'spectate') {
    output = 'You have decided to spectate.<br /><br />You can type in whatever you want into the field above and submit, but we will still be choosing for you. We can only promise to be lucky ;).';
    isComputerMode = true;
  }

  isComputerModeSet = true;
  return output;
};

var playTurn = function (input) {
  // when submit is hit, generate random type
  var computerSps = getComputerSps();

  var output = 'The computer chose ' + computerSps + ' ' + getSpsEmoji(computerSps) + '.<br />You chose ' + input + ' ' + getSpsEmoji(input) + '.' + getWinningState(input, computerSps, isReverse);

  // print win loss record if turns played > 0
  // this also prevents win loss record to be printed as 0/0,
  // when the game state is reset under korean rules
  if (turnsPlayed > 0) {
    output = output + getWinLossRecord();
  }

  return output;
};

var main = function (input) {
  var myOutputValue = 'Please enter your name in the text field above.';

  // user is still in the midst of setting name
  if (!isUsernameSet) {
    myOutputValue = setPreGameMessage(input);
    // return to terminate function, this is because
    // we want to display a welcome message instead of
    // starting game straight after entering a proper name
    return myOutputValue;
  }

  // here on out, we assume the player has already set his name
  // for consistency, we accept capitalization in inputs
  var sanitisedInput = input.toLowerCase();

  // default: assume game type is unchosen
  myOutputValue = userName + ', would you like to play the regular or Korean version of Scissors Paper Stone?<br/><br/>In the Korean version, we will keep track of the most recent winner. When there\'s a draw, the most recent winner is the ultimate winner of the game.<br /><br />If you want to play the Korean version, please type in "Korean" above and submit. Otherwise, just type in "regular".';

  // if game type is not chosen, take the user's next input to decide
  if (!isGameTypeSet) {
    // default:, assume user did not type in "korean" or "regular"
    // update output, re-hint to user to choose valid game type
    if (sanitisedInput != 'korean' && sanitisedInput != 'regular') {
      myOutputValue = 'If you want to play the Korean version, please type in "Korean" above and submit. Otherwise, just type in "regular".';
      return myOutputValue;
    }

    // else, set game type
    myOutputValue = setGameType(sanitisedInput);

    return myOutputValue;
  }

  // here on out, we assume the game type is set
  // now we chose the computer mode
  if (!isComputerModeSet) {
    // default: assume user did not type in "play" or "spectate"
    // update output, re-hint to user to choose valid mode
    if (sanitisedInput != 'play' && sanitisedInput != 'spectate') {
      myOutputValue = 'Please type in and submit only one of the following: play, spectate.';
      return myOutputValue;
    }

    // else, set game type
    myOutputValue = setComputerMode(sanitisedInput);

    return myOutputValue;
  }

  // here on out, we assume computer mode is set
  // begin game proper. default: assume invalid input
  myOutputValue = "Looks like you are selecting an invalid item, or there's a typo in your text! Please select and type in only one of the following: scissors, paper, stone.";

  // setting introductory message when switching reverse/non-reverse
  if (sanitisedInput == reverseInput) {
    isReverse = !isReverse;
    myOutputValue = setReverseMessage(isReverse);
    return myOutputValue;
  }

  // in computer mode, the computer chooses for you
  // thus, assign input to computer-chosen values
  // moving this below the setting of reverse so
  // the user still has some agency in reversing modes.
  if (isComputerMode) {
    sanitisedInput = getComputerSps();
  }

  // only play the turn if input matches
  if (
    sanitisedInput == validInput1
  || sanitisedInput == validInput2
  || sanitisedInput == validInput3
  ) {
    turnsPlayed = turnsPlayed + 1;
    myOutputValue = playTurn(sanitisedInput);
  }

  return myOutputValue;
};
