var gameMode = "userName";
var userName = "default";
var performanceMesssage = "default";
var gameRecord = 0;
var winRecord = 0;
var lossRecord = 0;
var drawRecord = 0;
var koreanLastWin = "nil";

var main = function (input) {
  //Initiates bot choices
  if (gameMode == "userName") {
    userName = input;
    gameMode = "chooseMode";
    return "Input game mode above: 'normal', 'Korean', or 'computer'.";
  } else if (gameMode == "chooseMode") {
    gameType = input.toLowerCase();
    gameMode = "start";
    if (gameType == "computer") {
      return (
        "You have chosen " +
        gameType +
        " mode. Simply enter 'play' and the computer will pick for you!"
      );
    } else {
      return (
        "You have chosen " +
        gameType +
        " mode. Start by entering 'scissors', 'paper', or 'stone' in the input above."
      );
    }
  } else if (gameMode == "start") {
    var botRandom = Math.random();
    var botChoice;
    if (botRandom < 1 / 3) {
      var botChoice = "scissors";
    } else if (botRandom < 2 / 3) {
      var botChoice = "paper";
    } else {
      var botChoice = "stone";
    }

    //Check user entry (normal mode)
    var userChoice = input.toLowerCase();
    if (
      userChoice == "scissors" ||
      userChoice == "paper" ||
      userChoice == "stone" ||
      userChoice == "play"
    ) {
      //Sets user choice to auto if bot mode picked
      if (gameType == "computer") {
        var userBotRandom = Math.random();
        if (userBotRandom < 1 / 3) {
          var userChoice = "scissors";
        } else if (userBotRandom < 2 / 3) {
          var userChoice = "paper";
        } else {
          var userChoice = "stone";
        }
      }
      // Checks user choice against bot choice and declares a result
      if (userChoice == botChoice) {
        var result = "It's a draw.";
        drawRecord++;
      } else if (
        (userChoice == "scissors" && botChoice == "paper") ||
        (userChoice == "paper" && botChoice == "stone") ||
        (userChoice == "stone" && botChoice == "scissors")
      ) {
        var result = "You win.";
        winRecord++;
      } else {
        var result = "You lose.";
        lossRecord++;
      }

      //Check user entry (reverse mode)
    } else if (
      userChoice == "reverse scissors" ||
      userChoice == "reverse paper" ||
      userChoice == "reverse stone"
    ) {
      // Checks user choice against bot choice and declares a result
      if (
        (userChoice == "reverse scissors" && botChoice == "scissors") ||
        (userChoice == "reverse paper" && botChoice == "paper") ||
        (userChoice == "reverse stone" && botChoice == "stone")
      ) {
        var result = "It's a draw.";
        drawRecord++;
      } else if (
        (userChoice == "reverse scissors" && botChoice == "paper") ||
        (userChoice == "reverse paper" && botChoice == "stone") ||
        (userChoice == "reverse stone" && botChoice == "scissors")
      ) {
        var result = "You lose.";
        lossRecord++;
      } else {
        var result = "You win.";
        winRecord++;
      }
    } // Tells user to enter correct inputs if user entry checks fail
    else {
      return "Please input 'scissors', 'paper', or 'stone' to play the game.";
    }
    gameRecord++;

    //Performance check (nomral)
    if (winRecord > lossRecord) {
      performanceMesssage = "Good Job!";
    } else if (lossRecord > winRecord) {
      performanceMesssage = "Keep trying...";
    } else {
      performanceMesssage = "What a close game...";
    }

    //Returns result to the player
    if (gameType == "normal") {
      return (
        "You chose " +
        userChoice +
        "." +
        "<br><br>" +
        "The bot chose " +
        botChoice +
        "." +
        "<br><br>" +
        result +
        "<br><br>" +
        "Now you can type 'scissors', 'paper', or 'stone' to play another round!" +
        "<br><br>" +
        "Or add 'reverse' before your input to try something different." +
        "<br><br>" +
        "Hey, " +
        userName +
        " you have played " +
        gameRecord +
        " games so far. Your win:loss:draw figures is " +
        winRecord +
        ":" +
        lossRecord +
        ":" +
        drawRecord +
        "." +
        performanceMesssage +
        "."
      );
    } // Computer mode return
    else if (gameType == "computer") {
      return (
        "Your bot chose " +
        userChoice +
        "." +
        "<br><br>" +
        "The competitor bot chose " +
        botChoice +
        "." +
        "<br><br>" +
        result +
        "<br><br>" +
        "Now you can type 'play' to play another round!" +
        "<br><br>" +
        "Hey, " +
        userName +
        " you have played " +
        gameRecord +
        " games so far. Your win:loss:draw figures is " +
        winRecord +
        ":" +
        lossRecord +
        ":" +
        drawRecord +
        "." +
        performanceMesssage +
        "."
      );
    } //korean mode return
    else if (gameType == "korean") {
      if (koreanLastWin == "You won." && result == "It's a draw.") {
        return (
          "You won the last round..." +
          "<br><br>" +
          "This round is a draw...so..." +
          "<br><br>" +
          "According to the rules of Mumuk-jji-ppa, you win!"
        );
      } else if (koreanLastWin == "You lost." && result == "It's a draw.") {
        return (
          "You lost the last round..." +
          "<br><br>" +
          "This round is a draw...so..." +
          "<br><br>" +
          "According to the rules of Mumuk-jji-ppa, you lose..."
        );
      } else {
        if (result == "You win.") {
          koreanLastWin = "You won.";
        } else if (result == "You lose.") {
          koreanLastWin = "You lost.";
        } else {
          koreanLastWin = "nil";
        }
        return (
          "You chose " +
          userChoice +
          "." +
          "<br><br>" +
          "The bot chose " +
          botChoice +
          "." +
          "<br><br>" +
          "For this round, " +
          result +
          "<br><br>" +
          "Based on Mumuk-jji-ppa rules, there are no winners yet. Keep trying!"
        );
      }
    }
  }
};
