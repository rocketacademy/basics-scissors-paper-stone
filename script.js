var numTimesUserWon = 0
var numTimesUserLose = 0
var numTimesDraw = 0
var numTimesRolled = 0

var main = function (input) {
  var myOutputValue = ''
  if (input == `scissors` || input == `paper` || input == `stone`){
    myOutputValue = SPSGame(input)
  }

  else myOutputValue = `error. please input one of these 3 options: scissors, paper or stone`
  return myOutputValue;
};


// This function is to randomly generate a number between 1-3
var rollDice = function(){
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;

  return diceNumber
}

// This function is to assign the randomly generated number to scissors, paper or stone
  var SPS = function(){
    var randomSPS = rollDice()
    console.log('Dice Number')
    console.log(randomSPS)
    if (randomSPS == 1){
    return 'scissors ✂️'
  }

    if (randomSPS == 2){
    return 'paper 🗒'
  }

    if (randomSPS == 3){
    return 'stone 🪨'
  }
}

// This function is to select the icon based on the user inputs
var SPSIconForUser = function(input){
  if (input == 'scissors') {
    return '✂️'
  }

  if (input == 'paper'){
    return '🗒'
  }
  
  if (input == 'stone'){
    return '🪨'
  }
}

// This function is to run the scissors paper stone game and return win/lose/draw message
var SPSGame = function(userGuess){

  numTimesRolled += 1
  console.log(`numTimesRolled = ${numTimesRolled}`)

  var chosenSPS = SPS()
  console.log(`Computer chose ${chosenSPS}`)

  var chosenIconForUser = SPSIconForUser(userGuess)

  var winRate = calcUserWinRate()
  console.log(`User winning % = ${winRate}`)

  var comWinRate = calcComputerWinRate()
  console.log(`Computer winning % = ${comWinRate}`)

  var message = ''

  //if user inputs scissors and computer choose paper, user wins OR
  //if user inputs paper and computer chose stone, user wins OR
  //if user inputs stone and computer chose scissors, user wins
if (userGuess == 'scissors' && chosenSPS == 'paper 🗒' || 
  userGuess == 'paper' && chosenSPS == 'stone 🪨' || 
  userGuess == 'stone' && chosenSPS == 'scissors ✂️'){
    console.log('win')
    numTimesUserWon += 1
    winRate = calcUserWinRate()
    message = `You won! You chose ${userGuess} ${chosenIconForUser} and computer chose ${chosenSPS}.<br><br>Win: Lose: Draw = ${numTimesUserWon} times: ${numTimesUserLose} times: ${numTimesDraw} times<br><br>Your winning % = ${winRate}%<br>Computer winning % = ${comWinRate}%`
  }

  //if the input by user is the same as the one computer chose, its a draw
  if (userGuess == 'scissors' && chosenSPS == 'scissors ✂️' ||
   userGuess == 'paper' && chosenSPS == 'paper 🗒' ||
   userGuess == 'stone' && chosenSPS == 'stone 🪨'){
    console.log('draw')
    numTimesDraw += 1
    message = `it's a draw! you chose ${userGuess} ${chosenIconForUser} and computer chose ${chosenSPS}.<br><br>Win: Lose: Draw = ${numTimesUserWon} times: ${numTimesUserLose} times: ${numTimesDraw} times<br><br>Your winning % = ${winRate}%<br>Computer winning % = ${comWinRate}%`
  }

  //if user inputs paper and computer choose scissors, user lose OR
  //if user inputs stone and computer chose paper, user lose OR
  //if user inputs scissors and computer chose stone, user lose
  if (chosenSPS == 'scissors ✂️' && userGuess == 'paper' || 
  chosenSPS == 'paper 🗒' && userGuess == 'stone' || 
  chosenSPS == 'stone 🪨' && userGuess == 'scissors'){
    console.log('lose')
    numTimesUserLose += 1
    var comWinRate = calcComputerWinRate()
    message = `you lost! you chose ${userGuess} ${chosenIconForUser} and computer chose ${chosenSPS}.<br><br>Win: Lose: Draw = ${numTimesUserWon} times: ${numTimesUserLose} times: ${numTimesDraw} times<br><br>Your winning % = ${winRate}%<br>Computer winning % = ${comWinRate}%`
  }
  return message
}

//This function is to calculate the user winning % rate
var calcUserWinRate = function(){
  var userWinRate = Math.floor((numTimesUserWon/numTimesRolled)*100)
  return userWinRate
}

//This function is to calculate the computer winning % rate 
var calcComputerWinRate = function(){
  var computerWinRate = Math.floor((numTimesUserLose/numTimesRolled)*100)
  return computerWinRate
}