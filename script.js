// program internally randomly chooses scissors, paper or stone
// program outputs whether user won, program won or it's a draw
// Global variables
var currentGameMode = 'waiting for username';
var username = '';
var gameCount = 0;
var winCount = 0;

var SCISSORS = 'scissors';
var PAPER = 'paper';
var STONE = 'stone';

var ORIGINAL = 'play original sps';
var REVERSE = 'play reverse sps';
var KOREAN = 'play korean sps';

// ================== Main function =====================
var main = function (input){
  var myOutputValue = ''
  var generateRandomSign = function (){ 
    var randomSignNum = Math.floor(Math.random()*3);
    if (randomSignNum == 0){
    return SCISSORS;
    }
    if (randomSignNum == 1){
    return PAPER;
    }
    if (randomSignNum == 2){
    return STONE
    } 
    var userSign = input
    var computerSign = generateRandomSign();
    var winner = determineWinner (userSign,computerSign);
    return winner;
  
};
// ================== Username =====================
if (currentGameMode == 'waiting for username'){
  username = input; //set the name
  currentGameMode = ORIGINAL; //switch game mode to original sps
  myOutputValue = 'Hello '+ username + '<br>Playing original scissors paper stone. <br>Type scissors, paper or stone to play. <br>Otherwise, type reverse or korean to change game.';
  console.log ('typing username')
  console.log ('game mode:' + currentGameMode);
} 
// ================== Game Modes =====================

if (currentGameMode != 'waiting for username' 
&& input == 'original'){
  currentGameMode = ORIGINAL
  console.log ('game mode:' + currentGameMode)
  return 'Hello ' + username + '<br>Playing original scissors paper stone. <br>Type scissors, paper or stone to play.'
};

if (currentGameMode != 'waiting for username' 
&& input == 'reverse'){
  currentGameMode = REVERSE
  console.log ('game mode:' + currentGameMode)
  return 'Hello '+ username + '<br>Playing reverse scissors paper stone. <br>Type scissors, paper or stone to play. <br>Otherwise, type original or korean to change game.'
  }

if (currentGameMode != 'waiting for username' 
&& input == 'korean'){
  currentGameMode = KOREAN
  console.log ('game mode:' + currentGameMode)
  return 'Hello '+ username + '<br>Playing Muk Jji Ppa! <br>Type scissors, paper or stone to play. <br>Otherwise, type original or reverse to change game.'
  }


if (currentGameMode == ORIGINAL || REVERSE || KOREAN){ 
var userSign = input;
var computerSign = generateRandomSign();
console.log ('user:' + userSign, 'computer:' + computerSign)
console.log ('keying in userSign')
var determineWinner = function (userSign,computerSign){
// ================== Original Sps =====================
var genericOutput = `Now playing: Original scissors paper stone. <br>You chose: ${userSign}. Computer chose: ${computerSign}.`;
if (currentGameMode != 'waiting for username' 
&& input == 'original'){
  currentGameMode = ORIGINAL
  console.log('game mode:' + currentGameMode);

// if the game is a draw
if (userSign == computerSign){
  gameCount += 1; // Add 1 to total games played
  return `${genericOutput} <br>The game is a draw! ${username} has won ${winCount/gameCount} times against the computer.`;
  // if player wins against computer
} else if (userSign == SCISSORS && computerSign == PAPER
|| userSign == PAPER && computerSign == STONE
|| userSign == STONE && computerSign == SCISSORS){
  gameCount += 1; // Add 1 to total games played
  winCount += 1; // Add 1 to games won against computer
  return `${genericOutput} <br>You won! ${username} has won ${winCount/gameCount} times against the computer.`;
}
// if player loses against computer
else if (userSign == SCISSORS && computerSign == STONE
|| userSign == PAPER && computerSign == SCISSORS
|| userSign == STONE && computerSign == PAPER){
  gameCount += 1; // Add 1 to total games played
  return `${genericOutput} <br>You lost! ${username} has won ${winCount/gameCount} times against the computer.`
}}
// ================== Reverse Sps =====================
var genericReverseOutput = `Now playing: Reverse scissors paper stone. <br>You chose: reverse ${userSign}. Computer chose: reverse ${computerSign}.`;
if (currentGameMode != 'waiting for username' 
&& input == 'reverse'){
  currentGameMode = REVERSE
  console.log('game mode:' + currentGameMode);

// if game is draw
if (userSign == computerSign){
  gameCount += 1; // Add 1 to total games played
  return `${genericReverseOutput} <br>The game is a draw! ${username} has won ${winCount/gameCount} times against the computer.`;
}
// if player loses agaisnt computer
else if (userSign == SCISSORS && computerSign == PAPER
|| userSign == PAPER && computerSign == STONE
|| userSign == STONE && computerSign == SCISSORS){
  gameCount += 1; // Add 1 to total games played
  return `${genericReverseOutput} <br>You lost! ${username} has won ${winCount/gameCount} times against the computer.`;
}
//if player wins against computer
else if (userSign == SCISSORS && computerSign == STONE
|| userSign == PAPER && computerSign == SCISSORS
|| userSign == STONE && computerSign == PAPER){
  gameCount += 1; // Add 1 to total games played
  winCount += 1; // Add 1 to games won against computer
  return `${genericReverseOutput} <br>You won! ${username} has won ${winCount/gameCount} times against the computer.`}
}
}
// ================== Korean Sps =====================
var genericMjpOutput = `Now playing: Muk Jji Ppa! <br> You chose: ${userSign}. Computer chose: ${computerSign}.`;  
if (currentGameMode == 'waiting for username'
&& input == 'korean'){
  currentGameMode = KOREAN;
  console.log('game mode:' + currentGameMode);

var initialMjpWinner = ''
console.log (initialMjpWinner);
//determining initial winner i.e. who starts next round
if (userSign == SCISSORS && computerSign == PAPER 
|| userSign == PAPER && computerSign == STONE
|| userSign == STONE && computerSign == SCISSORS){
  //player is initial winner. player starts the next round
  initialMjpWinner = username;
  myOutputValue = `${genericMjpOutput} <br> ${username} starts the next round. <br>Play the same sign as the computer to win.`;
}
if (userSign == computerSign){
return`${genericMjpOutput} <br>The game is a draw! Type scissors, paper or stone to play again.`;

//computer is initial winner. computer starts the next round
} else if (userSign == SCISSORS && computerSign == STONE
|| userSign == PAPER && computerSign == SCISSORS
|| userSign == STONE && computerSign == PAPER){
  initialMjpWinner = "computer"
  return `${genericMjpOutput} <br>Computer starts the next round. <br>The game ends when you play the same sign as the computer.`
}
// if player chose the same as computer
 else if (userSign == computerSign) {
// +1 play count each time the game draws (1 round)
gameCount += 1;
}
if (initialMjpWinner == username) {
// if winner is user, win count +1
winCount += 1;
return `${genericMjpOutput} <br> ${username} has won ${winCount/gameCount} times against the computer.`}
}
}
return myOutputValue
};
