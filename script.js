let main = function (input) {
  let myOutputValue =playRPS(input);
  return myOutputValue;
};

let Rock = 'rock';
let Paper = 'paper';
let Scissor = 'scissors';

let Reversed_Rock = 'reversed rock';
let Reversed_Paper = 'reversed paper';
let Reversed_Scissor = 'reversed scissors';

let Replay_Message = `Now you can type "scissors" "paper" or "stone" to play another round!  <br><br> Total Games played is `
let currentGameMode = 'waiting for user name';
let countGamesPlayed = 0;
let countComputerWins = 0;
let countGamesDraw = 0;


// 1. Generate RPS sign
let getComputerSign = function ()  {
    let randomNumber = (Math.floor(Math.random() * 3))
    if (randomNumber === 0){
      return Rock;
    }
    if (randomNumber === 1){
      return Paper;
    }
    if (randomNumber === 2){
    return  Scissor;
    }
    console.log(getComputerSign());
  };

// Player wins
let doesPlayerBeatsComputer = function (playerSign, computerSign) {
  return (
    (playerSign == Rock && computerSign == Scissor) ||
    (playerSign == Paper && computerSign == Rock) ||
    (playerSign == Scissor && computerSign == Paper ) ||
    (playerSign == Reversed_Rock && computerSign == Paper) ||
    (playerSign == Reversed_Paper && computerSign == Scissor ) ||
    (playerSign == Reversed_Scissor && computerSign == Rock)

  )
};

// Players draws
let doesPlayerDrawComputer = function(playerSign, computerSign) {
  return (
    (playerSign == computerSign ) ||
    (playerSign == Reversed_Rock && computerSign == Rock) ||
    (playerSign == Reversed_Paper && computerSign == Paper ) ||
    (playerSign == Reversed_Scissor && computerSign == Scissor)
  )
};

var getObjectIcon = function (object) {
  if (object == Scissor || object == Reversed_Scissor) return ' ✂️';
  if (object == Paper || object == Reversed_Paper) return ' 🗒';
  if (object == Rock || object == Reversed_Rock) return '<{*^> ';
};

var getDefaultObjectsMessage = function (playerObject, computerObject) {
  var playerObjectIcon = getObjectIcon(playerObject);
  var computerObjectIcon = getObjectIcon(computerObject);
  return (
    'The computer chose ' +
    computerObject +
    computerObjectIcon +
    '<br><br>' +
    'You chose ' +
    playerObject +
    playerObjectIcon
  );
};

 // 2. Basic RPS Matchin 
let playRPS = function (input) {
  var myOutputValue = '';  
  if (currentGameMode == 'waiting for user name') {    
    // set the name    
    userName = input;   
     // now that we have the name, switch the mode    
     currentGameMode = 'game mode';    
     myOutputValue = 'Hello ' + userName;
  } else if (currentGameMode = 'game mode'){



    let playerObject = input
    let computerObject = getComputerSign()
    countGamesPlayed = countGamesPlayed +1 ;

    // Get a default output message sharing what player's and computer's objects are
    let defaultObjectsMessage = getDefaultObjectsMessage(
      playerObject,
      computerObject
    );

    // Compare player's object with computer's object and output win status
    // a) draw case
    if (doesPlayerDrawComputer (playerObject, computerObject) ){
      countComputerWins = countComputerWins;
      countGamesDraw = countGamesDraw + 1;
      myOutputValue =  defaultObjectsMessage + "<br><br> It's a draw! <br><br> " + Replay_Message + `${countGamesPlayed} <br><br> Total Computer Wins is ${countComputerWins}. <br><br> Total Draws is ${countGamesDraw}.`
    }

    // b) player wins case
    else if (doesPlayerBeatsComputer(playerObject, computerObject) ) {
      countComputerWins = countComputerWins;
      countGamesDraw = countGamesDraw
      myOutputValue =  defaultObjectsMessage + "<br><br> You win! <br><br> " + Replay_Message  + `${countGamesPlayed} <br><br> Total Computer Wins is ${countComputerWins}. <br><br> Total Draws is ${countGamesDraw}.`
    }
    // c) computer wins case
    else {
      countComputerWins = countComputerWins +1;
      countGamesDraw = countGamesDraw
      myOutputValue =  defaultObjectsMessage + "<br><br> You lose! Bummer. <br><br>  " + Replay_Message  + `${countGamesPlayed} <br><br> Total Computer Wins is ${countComputerWins}. <br><br> Total Draws is ${countGamesDraw}.`
    }

  }
    return myOutputValue;
};