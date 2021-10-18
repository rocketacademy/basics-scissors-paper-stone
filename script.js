let main = function (input) {
  console.log('--------- input field', input)
  let myOutputValue =playRPS2(input);
  // let myOutputValue =playRPS(input);
  // let myOutputValue =normalRPS(input);
  // let myOutputValue =reverseRPS(input);
  return myOutputValue;
};

let Rock = 'rock';
let Paper = 'paper';
let Scissor = 'scissors';

let userName = ''
let gameType = ''

// includes reversed for Part 1
// let Reversed_Rock = 'reversed rock';
// let Reversed_Paper = 'reversed paper';
// let Reversed_Scissor = 'reversed scissors';

let replayMessage = `Now you can type "scissors" "paper" or "stone" to play another round!  <br><br> Total Games played is `
let currentMode = 'waiting for user name';
// let gameMode = 'normal game mode';
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
    (playerSign == Scissor && computerSign == Paper ) 

    // includes reversed for Part 1
    // (playerSign == Rock && computerSign == Scissor) ||
    // (playerSign == Paper && computerSign == Rock) ||
    // (playerSign == Scissor && computerSign == Paper ) ||
    // (playerSign == Reversed_Rock && computerSign == Paper) ||
    // (playerSign == Reversed_Paper && computerSign == Scissor ) ||
    // (playerSign == Reversed_Scissor && computerSign == Rock)

  )
};

// Players draws
let doesPlayerDrawComputer = function(playerSign, computerSign) {
  return (
    (playerSign == computerSign ) 

        // includes reversed for Part 1
    // (playerSign == computerSign ) ||
    // (playerSign == Reversed_Rock && computerSign == Rock) ||
    // (playerSign == Reversed_Paper && computerSign == Paper ) ||
    // (playerSign == Reversed_Scissor && computerSign == Scissor)
  )
};

var getObjectIcon = function (object) {
  if (object == Scissor) return ' ✂️';
  if (object == Paper ) return ' 🗒';
  if (object == Rock ) return '✊🏼 ';


      // includes reversed for Part 1
  // if (object == Scissor || object == Reversed_Scissor) return ' ✂️';
  // if (object == Paper || object == Reversed_Paper) return ' 🗒';
  // if (object == Rock || object == Reversed_Rock) return '✊🏼';
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

 // Project Part 2 - Choose normal or Reverse Mode
let playRPS2 = function (input) {
   // var myOutputValue = '';  
  if (currentMode == 'waiting for user name') { 
  
    // set the name    
    userName = input;   
    currentMode = 'waiting for game type'; 
    console.log(currentMode)
    return 'Hello ' + userName + ` choose your type -- normal or reverse`;
  }
  // for current mode = normal, 
  if (currentMode == 'waiting for game type') {
    gameType = input
    currentMode = 'game mode'; 
    console.log('setting gameType')
    return `Hello ${userName} you have chosen ${gameType} game type`;
  }

  if (currentMode === 'game mode') {
    if (gameType === 'normal') {
        let game = normalRPS(input)
        return game
    } else {
        let game = reverseRPS(input)
        return game
    }
  }
};
  
let normalRPS = function(playerSign) {
  let playerObject = playerSign
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
    myOutputValue = defaultObjectsMessage + "<br><br> It's a draw! <br><br>  " +
                    replayMessage + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }

  // b) player wins case
  else if (doesPlayerBeatsComputer(playerObject, computerObject) ) {
    countComputerWins = countComputerWins;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You win! <br><br> " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  // c) computer wins case
  else {
    countComputerWins = countComputerWins +1;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You lose! Bummer. <br><br>  " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  return myOutputValue
};


let reverseRPS = function(playerSign) {
  let playerObject = playerSign
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
    myOutputValue = defaultObjectsMessage + "<br><br> It's a draw! <br><br> " + 
                    replayMessage + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }

  // b) computer wins case
  else if (doesPlayerBeatsComputer(playerObject, computerObject) ) {
    countComputerWins = countComputerWins +1 ;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You lose! Bummer. <br><br> " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  // c) player wins case
  else {
    countComputerWins = countComputerWins;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You Win! <br><br>  " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  return myOutputValue
};



 // Project Part 1 Basic and Reverse RPS without intermediate mode choice
let playRPS = function (input) {
  var myOutputValue = '';  
  if (currentMode == 'waiting for user name') {    
    // set the name    
    userName = input;   
     // now that we have the name, switch the mode    
     currentMode = 'game mode';    
     myOutputValue = 'Hello ' + userName;
  } else if (currentMode = 'game mode'){

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
    myOutputValue = defaultObjectsMessage + "<br><br> It's a draw! <br><br>  " +
                    replayMessage + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }

  // b) player wins case
  else if (doesPlayerBeatsComputer(playerObject, computerObject) ) {
    countComputerWins = countComputerWins;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You win! <br><br> " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  // c) computer wins case
  else {
    countComputerWins = countComputerWins +1;
    countGamesDraw = countGamesDraw
    myOutputValue = defaultObjectsMessage + "<br><br> You lose! Bummer. <br><br>  " + 
                    replayMessage  + 
                    `${countGamesPlayed} <br><br> Total Computer Wins is 
                    ${countComputerWins}. <br><br> Total Draws is 
                    ${countGamesDraw}.`
  }
  }
    return myOutputValue;
};