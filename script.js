var main = function (input) {
  var chosenSPS = SPS()
  var chosenIconForUser = SPSIconForUser(input)
  console.log('User input')
  console.log(input)
  console.log(chosenIconForUser)
  console.log('Computer chose')
  console.log(chosenSPS)

  //if user inputs scissors and computer choose paper, user wins OR
  //if user inputs paper and computer chose stone, user wins OR
  //if user inputs stone and computer chose scissors, user wins
  if (input == 'scissors' && chosenSPS == 'paper 🗒' || 
  input == 'paper' && chosenSPS == 'stone 🪨' || 
  input == 'stone' && chosenSPS == 'scissors ✂️'){
    console.log('win')
    return `The computer chose ${chosenSPS}.<br>You chose ${input} ${chosenIconForUser}.<br><br>You win! Congrats!<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  //if the input by user is the same as the one computer chose, its a draw
  if (input == 'scissors' && chosenSPS == 'scissors ✂️' ||
   input == 'paper' && chosenSPS == 'paper 🗒' ||
   input == 'stone' && chosenSPS == 'stone 🪨'){
    console.log('draw')
    return `The computer chose ${chosenSPS}.<br>You chose ${input} ${chosenIconForUser}.<br><br>It's a draw!<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  //if user inputs paper and computer choose scissors, user lose OR
  //if user inputs stone and computer chose paper, user lose OR
  //if user inputs scissors and computer chose stone, user lose
  if (chosenSPS == 'scissors ✂️' && input == 'paper' || 
  chosenSPS == 'paper 🗒' && input == 'stone' || 
  chosenSPS == 'stone 🪨' && input == 'scissors'){
    console.log('lose')
    return `The computer chose ${chosenSPS}.<br>You chose ${input} ${chosenIconForUser}.<br><br>You lose! Bummer!<br><br>Now you can type "scissors" "paper" or "stone" to play another round!`
  }

  return 'error. please input one of these 3 options: scissors, paper or stone';
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