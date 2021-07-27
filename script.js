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
/*---  Draw  ---*/
const draw = (input, AImove) => {
  return input == AImove
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

/*---  Regular RPS User Win ---*/
const rpsUserWin = (input, AImove) => {
  return (
    (input == SCISSORS && AImove == PAPER)||
    (input == ROCK && AImove == SCISSORS)||
    (input == PAPER && AImove == ROCK)
  )
}

/*---  Reversed RPS User Win ---*/
const reversedUserWin = (input, AImove) => {
  return (
    (input == PAPER && AImove == SCISSORS)||
    (input == SCISSORS && AImove == ROCK)||
    (input == ROCK && AImove == PAPER)
  )
}

/*---  Invalid RPS input ---*/
const invalidRPS = input => {
  return input != "scissors" && input != "rock" && input != "paper";
};


/*--- Computer RPSLS Move ---*/
const bbtAI = () => {
  let num = Math.floor(Math.random()*5)
  let bbtAIMove
  if (num === 0){
    bbtAIMove = ROCK
  } else if (num === 1){
    bbtAIMove = PAPER
  } else if (num === 2){
    bbtAIMove = SCISSORS
  } else if (num === 3){
    bbtAIMove = LIZARD
  } else {
    bbtAIMove = SPOCK
  }
  return bbtAIMove
}

/*---  BBT User Win ---*/
const bbtUserWin = (input, AImove) => {
  return (
    (input == SCISSORS && AImove == PAPER)||
    (input == ROCK && AImove == SCISSORS)||
    (input == PAPER && AImove == ROCK)||
    (input == ROCK && AImove == LIZARD)||
    (input == LIZARD && AImove == SPOCK)||
    (input == SPOCK && AImove == SCISSORS)||
    (input == SCISSORS && AImove == LIZARD)||
    (input == LIZARD && AImove == PAPER)||
    (input == PAPER && AImove == SPOCK)||
    (input == SPOCK && AImove == ROCK)
  )
}

/*---  Invalid BBT input ---*/ 
const invalidBBT = input => {
  return input != "scissors" && input != "rock" && input != "paper" && input != "lizard" && input != "spock";
};




/*---  choose game version ---*/
const initGame = input => {
  let myOutputValue = `Please choose among<br>Regular<br>Reversed<br>Korean<br>AI<br>BigBangTheory`
  if (input == 'Regular') {
    gameMode = 'Regular'
    myOutputValue = `You have chosen ${input}! Play as it is.<br>Start the game by typing either "rock", "paper", or "scissors"`
  }
  if (input == 'Reversed') {
    gameMode = 'Reversed'
    myOutputValue = `You have chosen ${input}! This is a REVERSED VERSION of the game.<br>Start the game by typing either "rock", "paper", or "scissors"`
  }
  if (input == 'Korean') {
    gameMode = 'Korean'
    myOutputValue = `You have chosen ${input}!<br>The winner of this version is determined by who won BEFORE a draw.<br>Start the game by typing either "rock", "paper", or "scissors"`
  }
  if (input == 'AI') {
    gameMode = 'AI'
    myOutputValue = `You have chosen ${input}! Watch a battle between two AIs.<br>Start the game by hitting the submit button`
  }
  if (input == 'BigBangTheory') {
    gameMode = 'BigBangTheory'
    myOutputValue = `You have chosen ${input}!<br>
    Scissors cuts Paper, Paper covers Rock <br>
    Rock crushes Lizard, Lizard poisons Spock <br>
    Spock smashes Scissors, Scissors decapitates Lizard <br>
    Lizard eats Paper, Paper disproves Spock <br>
    Spock vaporizes Rock (and as it always has) Rock crushes Scissors.<br>
    Start the game by typing either "rock", "paper", "scissors", "lizard", or "spock"`
  } 
}

/*---  Regular game version ---*/




var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};
