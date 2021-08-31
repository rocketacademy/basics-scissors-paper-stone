var numTimesUserWon = 0
var numTimesRolled = 0

var currentGameMode = 'waiting for user name';
var userName = '';

var main = function (input) {
  var myOutputValue = ''

  if (currentGameMode == 'waiting for user name') {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = 'scissors paper stone game';

    myOutputValue = 'Hello ' + userName;

  } else if (input == 'reverse'){
    currentGameMode = 'reverse'
    myOutputValue = `please input one of these options: reversed scissors, reversed paper or reversed stone`

  }else if (currentGameMode == 'reverse' &&
  (input == `reversed scissors` || 
  input == `reversed paper` || 
  input == `reversed stone`)){
    myOutputValue = reverseSPSGame(input)
    console.log(myOutputValue)
  } 
  
  else if (currentGameMode == 'scissors paper stone game' &&
  (input == `scissors` || 
  input == `paper` || 
  input == `stone`)) {
    myOutputValue = SPSGame(userName,input)
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
var SPSGame = function(userName,userGuess){

  numTimesRolled += 1
  console.log(`numTimesRolled = ${numTimesRolled}`)

  var chosenSPS = SPS()
  console.log(`Computer chose ${chosenSPS}`)

  var chosenIconForUser = SPSIconForUser(userGuess)

  var winRate = calcUserWinRate()
  console.log(`User winning % = ${winRate}`)

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
    
    //if user win rate is > 50%, format a doing well message
    if (winRate >= 50){
          message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>You win! Congratulations!<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Pretty good!`
    }

    //if user win rate is < 50%, format a try harder message
    else message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>You win! Congratulations!<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Try harder!`
  } 

  //if the input by user is the same as the one computer chose, its a draw
  if (userGuess == 'scissors' && chosenSPS == 'scissors ✂️' ||
   userGuess == 'paper' && chosenSPS == 'paper 🗒' ||
   userGuess == 'stone' && chosenSPS == 'stone 🪨'){
    console.log('draw')

    //if user win rate is > 50%, format a doing well message
    if (winRate >= 50){
          message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>It's a draw!<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Pretty good!`
    }

    //if user win rate is < 50%, format a try harder message
    else message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>It's a draw!<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Try harder!`
  }

  //if user inputs paper and computer choose scissors, user lose OR
  //if user inputs stone and computer chose paper, user lose OR
  //if user inputs scissors and computer chose stone, user lose
  if (chosenSPS == 'scissors ✂️' && userGuess == 'paper' || 
  chosenSPS == 'paper 🗒' && userGuess == 'stone' || 
  chosenSPS == 'stone 🪨' && userGuess == 'scissors'){
    console.log('lose')

    //if user win rate is > 50%, format a doing well message
    if (winRate >= 50){
          message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>You lose! Bummer.<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Pretty good!`
    }

    //if user win rate is < 50%, format a try harder message
    else message = `The computer chose ${chosenSPS}.<br>You chose ${userGuess} ${chosenIconForUser}.<br><br>You lose! Bummer.<br><br>So far ${userName}, you've been winning ${numTimesUserWon}/${numTimesRolled} turns. Try harder!`
  }
  return message
}

//This function is to calculate the user winning % rate
var calcUserWinRate = function(){
  var userWinRate = Math.floor((numTimesUserWon/numTimesRolled)*100)
  return userWinRate
}

//reverse game
var reverseSPSGame = function(input){
  var reverseSPS = SPS()
  console.log(reverseSPS)
  var reverseMsg = '';
if (input == 'reversed scissors' && reverseSPS == 'paper 🗒' || 
  input == 'reversed paper' && reverseSPS == 'stone 🪨' || 
  input == 'reversed stone' && reverseSPS == 'scissors ✂️'){
    console.log('lose')
    reverseMsg = `The computer chose ${reverseSPS}.<br>You chose ${input}.<br><br>You lose! Bummer!<br><br>Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round!`
  }

  //if the input by user is the same as the one computer chose, its a draw
  if (input == 'reversed scissors' && reverseSPS == 'scissors ✂️' ||
   input == 'reversed paper' && reverseSPS == 'paper 🗒' ||
   input == 'reversed stone' && reverseSPS == 'stone 🪨'){
    console.log('draw')
    reverseMsg = `The computer chose ${reverseSPS}.<br>You chose ${input}.<br><br>It's a draw!<br><br>Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round!`
  }

  //if user inputs reversed paper and computer choose scissors, user wins OR
  //if user inputs reversed stone and computer chose paper, user wins OR
  //if user inputs reversed scissors and computer chose stone, user wins
  if (reverseSPS == 'scissors ✂️' && input == 'reversed paper' || 
  reverseSPS == 'paper 🗒' && input == 'reversed stone' || 
  reverseSPS == 'stone 🪨' && input == 'reversed scissors'){
    console.log('win')
    reverseMsg = `The computer chose ${reverseSPS}.<br>You chose ${input}.<br><br>You win! Congrats!<br><br>Now you can type "reversed scissors" "reversed paper" or "reversed stone" to play another round!`
  }
  return reverseMsg
  }