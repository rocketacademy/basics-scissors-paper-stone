// Variable Declarations

/*--- Consistencies ---*/
const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

const LIZARD = 'lizard'
const SPOCK = 'spock'

// const REV_ROCK = 'reversed rock'
// const REV_PAPER = 'reversed paper'
// const REV_SCISSORS = 'reversed scissors'


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
  gameMode=""
  let myOutputValue = `Hey ${userName}. Choose the game mode you want to play.<br>Type in any of the following:<br><br>
  Regular<br>
  Reversed<br>
  Korean<br>
  AI<br>
  BigBangTheory`
  return myOutputValue
 }

 /*--- Percentage Win ---*/
const percentageWin = () => {
  let win rate = Math.floor((numWin/numPlayed)*100)
  return `${win rate}%`
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


/*--- Computer BBT Move ---*/
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

/*---  Korean Version ---*/
let lastWinner = 0
const playerLoseKorean = (input, AImove) => {
  return (
    (input == "rock" && AImove == "paper") ||
    (input == "paper" && AImove == "scissors") ||
    (input == "scissors" && AImove == "rock")
  );
};

/*---  Regular game version ---*/
const regularVersion = input => {
  let AImove = rpsAI()
  let userWin = rpsUserWin(input, AImove)
  let userDraw = draw(input, AImove)
  let invalid = invalidRPS(input)
  let myOutputValue

  numPlayed += 1

  //Default is lose
  myOutputValue = `Computer played: ${AImove}. You played: ${input}.You lose.<br>
  Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`

  if (userWin) {
    numWin += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.You win.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (userDraw) {
    numDraw += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.It's a tie.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (invalid) {
    numPlayed -= 1
    myOutputValue = `Choose one: rock, paper, scissors.`
  }

  return myOutputValue
}

/*---  Reversed game version ---*/
const reversedVersion = input => {
  let AImove = rpsAI()
  let userWin = reversedUserWin(input, AImove)
  let userDraw = draw(input, AImove)
  let invalid = invalidRPS(input)
  let myOutputValue

  numPlayed += 1

  //Default is lose
  myOutputValue = `Computer played: ${AImove}. You played: ${input}.You lose.<br>
  Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`

  if (userWin) {
    numWin += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.You win.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (userDraw) {
    numDraw += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.It's a tie.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (invalid) {
    numPlayed -= 1
    myOutputValue = `Choose one: rock, paper, scissors.`
  }

  return myOutputValue 
}

/*---  BBT (Rock-paper-scissors-lizard-spock) game version ---*/
const bbtVersion = input => {
  let AImove = bbtAI()
  let userWin = bbtUserWin(input, AImove)
  let userDraw = draw(input, AImove)
  let invalid = invalidBBT(input)
  let myOutputValue

  numPlayed += 1

  //Default is lose
  myOutputValue = `Computer played: ${AImove}. You played: ${input}.You lose.<br>
  Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`

  if (userWin) {
    numWin += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.You win.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (userDraw) {
    numDraw += 1
    myOutputValue = `Computer played: ${AImove}. You played: ${input}.It's a tie.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (invalid) {
    numPlayed -= 1
    myOutputValue = `Choose one: rock, paper, scissors, lizard, spock.`
  }

  return myOutputValue 
}

/*---  Korean version ---*/
const koreanVersion = input => {
  gameMode = 'Regular'
  let AImove = rpsAI()
  let userWin = rpsUserWin(input, AImove)
  let userLose = playerLoseKorean(input, AImove)
  let userDraw = draw(input, AImove)
  let invalid = invalidRPS(input)
  let myOutputValue

  if (invalid) {
    myOutputValue = `Choose one: rock, paper, scissors.`
  }

  if (userWin) {
    lastWinner = 1
    myOutputValue = `Computer played ${AImove}. You played ${input}. You win this round.<br>
    To win the game, you have to draw the next round.`
  }

  if (userLose) {
    lastWinner = 2
    myOutputValue =  `Computer played ${AImove}. You played ${input}. You lost this round.<br>
    If the next round is a draw, Computer wins. `
  }

  if (userDraw) {
    if (lastWinner == 2) {
      myOutputValue = `Computer won the last round. Computer wins!`
    }

    if (lastWinner == 1) {
      myOutputValue = `You won the last round. You win!`
    }

    if (lastWinner == 0) {
      myOutputValue = `No winner was recorded. Please try again.`
    }
  } return myOutputValue
}

/*---  AI vs AI version ---*/
const aiGame = () => {
  let firstMove = rpsAI()
  let secondMove = rpsAI()
  let userWin = rpsUserWin(firstMove, secondMove)
  let userDraw = draw(firstMove, secondMove)
  let myOutputValue

  numPlayed += 1

  //Default is lose
  myOutputValue = `Computer played: ${secondMove}. Computer played ${firstMove} for you.You lose.<br>
  Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`

  if (userWin) {
    numWin += 1
    myOutputValue = `Computer played: ${secondMove}. Computer played ${firstMove} for you.You win.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }

  if (userDraw) {
    numDraw += 1
    myOutputValue = `Computer played: ${secondMove}. Computer played ${firstMove} for you.It's a tie.<br>
    Number of games played: ${numPlayed}. Your win rate is ${percentageWin()}`
  }
  return myOutputValue
}

/*---  choose game version ---*/
const initGame = input => {
  gameMode='choose your game version'
  let myOutputValue = `Please choose among<br>Regular<br>Reversed<br>Korean<br>AI<br>BigBangTheory`
  if (input == 'Regular') {
    myOutputValue = regularVersion(input)
  }
  if (input == 'Reversed') {
    gameMode = 'Reversed'
    myOutputValue = `You have chosen ${input}! This is a REVERSED VERSION of the game.<br>Start the game by typing either "rock", "paper", or "scissors"`
    myOutputValue = reversedVersion()
  }
  if (input == 'Korean') {
    gameMode = 'Korean'
    myOutputValue = `You have chosen ${input}!<br>The winner of this version is determined by who won BEFORE a draw.<br>Start the game by typing either "rock", "paper", or "scissors"`
    myOutputValue = koreanVersion()
  }
  if (input == 'AI') {
    gameMode = 'AI'
    myOutputValue = `You have chosen ${input}! Watch a battle between two AIs.<br>Start the game by hitting the submit button`
    myOutputValue = aiGame()
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
    myOutputValue= bbtVersion()
  }

  if (input != 'Regular' ||
      input != 'Reversed' ||
      input != 'Korean' ||
      input != 'AI' ||
      input != 'BigBangTheory') {
        return `Please make sure you chose  among<br>Regular<br>Reversed<br>Korean<br>AI<br>BigBangTheory`
      }

  return myOutputValue
}



var main = function (input) {
  let myOutputValue = "Input your name"
  gameMode= setUsername(input)
  if (gameMode == "enter user name") {
    myOutputValue = setUsername(input);
  } else if (gameMode == 'choose your game version') {
    myOutputValue = initGame(input);
  } else if (gameMode == "Regular") {
    myOutputValue = regularVersion(input);
  } else if (gameMode == "Reversed") {
    myOutputValue = reversedVersion(input);
  } else if (gameMode == "Korean") {
    myOutputValue = koreanVersion(input);
  } else if (gameMode == "AI") {
    myOutputValue = aiGame();
  } else if (gameMode = "bbtVersion") {
    myOutputValue = bbtVersion(input)
  }
  // to track which game version we are in
  console.log("current game mode", gameMode);
  return myOutputValue;
};