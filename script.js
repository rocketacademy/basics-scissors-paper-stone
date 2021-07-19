//global variables
var currentGameMode = `waiting for username`;
var userName = ``;
//Number Games of Won
var numGamesPlayed = 0;
console.log(numGamesPlayed);
//Number of Games Played
var numGamesWon = 0;
console.log(numGamesWon);

var main = function (input) {
  var myOutputValue = ``;
  if (currentGameMode == `waiting for username`) {
    //set the name
    userName = input;
    console.log(userName);
    currentGameMode = `SPSGame`;

    myOutputValue = `Hello ${userName}`;
  } else if (currentGameMode == `SPSGame`) {
    //Increase number of Games Played
    numGamesPlayed += 1;

    //SPS Generator
    var SPSArray = ["Scissors", "Paper", "Stone"];
    var randomSPS = Math.floor(Math.random() * SPSArray.length); //RandomSPS
    console.log(SPSArray[randomSPS]);

    //Player Beat Computer Function
    var didPlayerBeatComputer = function (input) {
      return (
        (input == "Scissors" && SPSArray[randomSPS] == "Paper") ||
        (input == "Paper" && SPSArray[randomSPS] == "Stone") ||
        (input == "Stone" && SPSArray[randomSPS] == "Scissors") ||
        (input == "ReversedScissors" && SPSArray[randomSPS] == "Stone") ||
        (input == "ReversedStone" && SPSArray[randomSPS] == "Paper") ||
        (input == "ReversedPaper" && SPSArray[randomSPS] == "Scissors")
      );
    };
    if (didPlayerBeatComputer(input)) {
      //Add to number of Games Won
      numGamesWon += 1;
    }
    //created winrate within main function
    var winrate = (numGamesWon / numGamesPlayed) * 100;
    console.log(`numgameswon` + numGamesWon);
    console.log(`numgamesplayed ` + numGamesPlayed);
    myOutputValue = `Too bad ${userName}, you lost to the computer. <br><br> You chose ${input} while the computer chose ${SPSArray[randomSPS]}. <br><br>Your current win rate is ${winrate}%. <br><br>You have played ${numGamesPlayed} games and won ${numGamesWon} games.`;

    //Player Draw Computer function
    var didPlayerDrawComputer = function (input) {
      return (
        (input == "Scissors" && SPSArray[randomSPS] == "Scissors") ||
        (input == "Paper" && SPSArray[randomSPS] == "Paper") ||
        (input == "Stone" && SPSArray[randomSPS] == "Stone") ||
        (input == "ReversedScissors" && SPSArray[randomSPS] == "Paper") ||
        (input == "ReversedStone" && SPSArray[randomSPS] == "Scissors") ||
        (input == "ReversedPaper" && SPSArray[randomSPS] == "Stone")
      );
    };

    if (
      input != "Scissors" &&
      input != "Paper" &&
      input != "Stone" &&
      input != "ReversedScissors" &&
      input != "ReversedPaper" &&
      input != "ReversedStone"
    ) {
      myOutputValue =
        "Please input Scissors, Paper or Stone. <br><br> For the reversed version, please input: ReversedScissors, ReversedPaper or ReversedStone.";
      return myOutputValue;
    }

    if (didPlayerBeatComputer(input)) {
      //Add to number of Games Won

      myOutputValue = `Congratulations ${userName}, you beat the computer. <br><br> You chose ${input} while the computer chose ${SPSArray[randomSPS]}. <br><br>Your current win rate is ${winrate}%. <br><br>You have played ${numGamesPlayed} games and won ${numGamesWon} games.`;

      return myOutputValue;
    }

    if (didPlayerDrawComputer(input)) {
      myOutputValue = `Unlucky, ${userName}. You drew with the computer. <br><br> You chose ${input} while the computer chose ${SPSArray[randomSPS]}. <br><br>Your current win rate is ${winrate}%. <br><br>You have played ${numGamesPlayed} games and won ${numGamesWon} games.`;
      return myOutputValue;
    }

    return myOutputValue;
  }
  return myOutputValue;
};
