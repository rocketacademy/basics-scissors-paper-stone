// Variable Declarations

/*--- Consistencies ---*/
const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

const LIZARD = 'lizard'
const SPOCK = 'spock'

const REV_ROCK = 'reversed rock'
const REV_PAPER = 'reversed paper'
const REV_SCISSORS = 'reversed scissors'


/*--- Win/Loss/Draw Counter ---*/
let numPlayed = 0
let numWin = 0
let numDraw = 0
let numLoss = numPlayed-numWin-numDraw

//Global Functions

/*--- Set Username ---*/
let userName = ''
let gameMode = 'set username'
const setUsername = name => {
  userName=name
  gameMode='choose the Rock-Paper-Scissor game version'
  let myOutputValue = `Hey ${userName}. Choose the game mode you want to play.<br>Type in any of the following:<br><br>
  Regular<br>
  Reversed<br>
  Korean<br>
  AI vs AI<br>
  Rock-Paper-Scissors-Lizard-Spock`
  return myOutputValue
 }

 /*--- Percentage Win ---*/
const percentageWin = () => {
  let winRate = Math.floor((numWin/numPlayed)*100)
  return `${winRate}%`
}

/*--- Computer RPS Move ---*/
const rpsAI = () => {
  let num = Math.floor(Math.random()*3)
  let rpsAIMove
  if (num === 0 ){
    rpsAIMove = ROCK
  } else if (num === 1){
    rpsAIMove = PAPER
  } else if (num === 2){
    rpsAIMove = SCISSORS
  }
  return rpsAIMove
}

/*--- Computer RPSLS Move ---*/
const rpslsAI = () => {
  let num = Math.floor(Math.random()*5)
  let rpslsAIMove
  if (num === 0){
    rpslsAIMove = ROCK
  } else if (num === 1){
    rpslsAIMove = PAPER
  } else if (num === 2){
    rpslsAIMove = SCISSORS
  } else if (num === 3){
    rpslsAIMove = LIZARD
  } else {
    rpslsAIMove = SPOCK
  }
  return rpslsAIMove
}




var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
