
//Add global states to include wins and draws
var playerScore = 0;
var comScore = 0;
var drawScore = 0;

//Add states for username and game mode
var userName ='';
var gameMode ='';

//Game mode checker
var gameModeState =0;

//Add WinState for korean mode
var playerLastWinState = 0;
var comLastWinState = 0;
var winnerState = 0;

var main = function (input) {
  //Convert input to lowercase and remove white space, allow for minor typos
  var convertInput = input.toLowerCase().replace(/\s/g, "");

  //Prints error message if input is not SPS or reversed SPS
  var myOutputValue = `Please enter 'stone', 'paper' or 'scissors' <br>Current Score<br>User:${playerScore}<br>Com:${comScore}<br>Draws:${drawScore}`

  //If userName is not set, use first input as username
  if(userName==''){
    if(input==''){
      return `Please input something for your username`;
    }
    
    userName = input;

    return `Hi ${userName}, Please enter game mode to start playing.`
  } 
  
  
  //If mode is not selected, prompt to choose mode
if(gameModeState==0){
  if(gameMode==''){
    if(gameModeState==0){
      if(input!='normal'&&input!='reversed'&&input!='korean'&&input!='computer'){
      return `Please select 'normal' ,'reversed','computer' or 'korean' mode`
    }
    gameMode= input;
    return gameModeChecker(gameMode);
     
    }
  }
}

//Change game mode anytime during other gameplays
if(gameModeState == 1&&input=='change'){
  gameModeState = 0;
  gameMode ='';
  return `Change game mode! Please enter game mode to continue playing`
}

if(gameMode=='normal'){
  //If Input is normal SPS, run normal SPS rules.
  if(convertInput=='stone'|| convertInput =='paper'||convertInput =='scissors'){
    myOutputValue = normalGame(convertInput,translateRPS());
    }
  else{
    return `Please enter 'stone', 'paper' or 'scissors'`
    }
  }
if(gameMode=='reversed'){
  //If input includes reversed, then run reverse SPS rules
  if(convertInput == 'stone' || convertInput == 'paper'||convertInput == 'scissors'){
    myOutputValue = reverseGame(convertInput,translateRPS());
    
  } 
}

if(gameMode=='korean'){
  //Run normal game with korean rules
  var koreanWinner = normalGame(convertInput,translateRPS());
  return koreanWinner;
}
  
if(gameMode=='computer'){
  //Computer mode for auto selection
  myOutputValue = normalGame(translateRPS(),translateRPS());
}

//Compare win loss with function
var winLossCompare = winLossPerc(playerScore,comScore);

  
//Output message with win/loss state, score and current game mode
return myOutputValue + `<br> ${winLossCompare} Play Again?<br>Current Game Mode: ${gameMode}`
};

// Symbol Generation
function symbolGenerator(input) {
  if (input == "scissors" || input == "reversedscissors") {
    return "✂️";
  }
  if (input == "paper" || input == "reversedpaper") {
    return "📜";
  }
  if (input == "stone" || input == "reversedstone") {
    return "🗿";
  }
}

// Winning message and add to playerScore
function winMessage(playerInput, comInput, playerIcon, comIcon) {
  playerScore +=1;
  return (
    `You Won! You have chosen ${playerInput} ${playerIcon} while Computer chose ${comInput} ${comIcon}<br> Current Score<br>User:${playerScore}<br>Com:${comScore}<br>Draws:${drawScore}`
  );
}

// Losing message and add to comScore
function loseMessage(playerInput, comInput, playerIcon, comIcon) {
  comScore+=1;
  return (
    `You Lost! You have chosen ${playerInput} ${playerIcon} while Computer chose ${comInput} ${comIcon}<br> Current Score<br>User:${playerScore}<br>Com:${comScore}<br>Draws:${drawScore}`
  );
}

// Draw message and add to drawScore
function drawMessage(playerInput, comInput, playerIcon, comIcon) {
  drawScore+=1;
  return (
    `It's a Draw✏️ You have chosen ${playerInput} ${playerIcon} while Computer chose ${comInput} ${comIcon}<br> Current Score<br>User:${playerScore}<br>Com:${comScore}<br>Draws:${drawScore}`
  );
}




// Normal SPS Game function
function normalGame(user, com) {
  // If user chose stone and com is scissors, user wins
  // If user chose paper and com is stone, user wins
  // If user chose scissors and com is paper, user wins
 
  if (((user == 'stone')&&(com=='scissors'))||((user=='paper')&&(com=='stone'))||((user=='scissors')&&(com=='paper'))){
    //Play korean mode if gameMode is korean
    if(gameMode=='korean'){
      playerLastWinState = 1;
      winnerState=1;
      return `축하합니다! ${userName} Won! You chose ${user} while Computer chose ${com}! <br>Enter another input to Muk Jji Paa!`
    }
    return winMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  // If user chose paper and com is scissors, user lose
  // If user chose scissors and com is stone, user lose
  // If user chose stone and com is paper, user lose
  if (((user == 'paper')&&(com=='scissors'))||((user=='scissors')&&(com=='stone'))||((user=='stone')&&(com=='paper'))){
    //Play korean mode if gameMode is korean
    if(gameMode=='korean'){
      comLastWinState =1;
      winnerState =1;
      return `죄송합니다! Com Won! You chose ${user} while Computer chose ${com}!<br>Enter another input to fight back!`
    }
    return loseMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  //else it's a draw 
  else {
    //Play korean mode if gameMode is korean
    if(gameMode=='korean'){
      if(playerLastWinState==1&&winnerState==1){
        winnerState=0;
        return winMessage(user,com,symbolGenerator(user),symbolGenerator(com)) 
      }
      if(comLastWinState==1&&winnerState==1){
        winnerState=0;
        return loseMessage(user,com,symbolGenerator(user),symbolGenerator(com))
      }
      return `It's a draw! Try Again! Muk Jji Paa`
    }
    return drawMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  }


  // Reverse SPS Game function
function reverseGame(user, com) {
  // If user chose paper and com is scissors, user wins
  // If user chose scissors and com is stone, user wins
  // If user chose stone and com is paper, user wins 
  if (((user == 'paper')&&(com=='scissors'))||((user=='scissors')&&(com=='stone'))||((user=='stone')&&(com=='paper'))){
    return winMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  // If user chose stone and com is scissors, user lose
  // If user chose paper and com is stone, user lose
  // If user chose scissors and com is paper, user lose
  if (((user == 'stone')&&(com=='scissors'))||((user=='paper')&&(com=='stone'))||((user=='scissors')&&(com=='paper'))){
    return loseMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  //else it's a draw 
  else {
    return drawMessage(user,com,symbolGenerator(user),symbolGenerator(com))
  }
  }


//Calculate win/loss percentage
function winLossPerc(win,loss){
  if((win/loss)>1){
    return `You are doing great, ${userName}!`
  }
  if ((win/loss)<1){
    return `Not doing so well ${userName}, Try Harder!`
  }
  else{
    return `It is balanced...for now, you are like Thanos! ${userName}!`
  }
}

//Game Mode Checker to change game mode in between
function gameModeChecker(input){
  gameModeState=1;
  if(input =='korean'){
    return `안녕하세요! Game mode is now korean!`
  }
  return `Game mode is now ${input}. Please enter input to start playing`
}

// Random RPS by function
var translateRPS = function () {
  //return 'paper'
  const list = ["scissors", "paper", "stone"];
  return list[Math.floor(Math.random() * 3)];
};



