var main = function (input) {
  var chosenSPS = SPS()
  console.log('User input')
  console.log(input)
  console.log('Computer chose')
  console.log(chosenSPS)

  //if user inputs scissors and computer choose paper, user wins OR
  //if user inputs paper and computer chose stone, user wins OR
  //if user inputs stone and computer chose scissors, user wins
  if (input == 'scissors' && chosenSPS == 'paper' || 
  input == 'paper' && chosenSPS == 'stone' || 
  input == 'stone' && chosenSPS == 'scissors'){
    console.log('win')
    return 'you won! you chose ' + input + ' and computer chose ' + chosenSPS 
  }

  //if the input by user is the same as the one computer chose, its a draw
  if (input == chosenSPS){
    console.log('draw')
    return 'its a draw! you chose ' + input + ' and computer chose ' + chosenSPS 
  }

  //if user inputs paper and computer choose scissors, user lose OR
  //if user inputs stone and computer chose paper, user lose OR
  //if user inputs scissors and computer chose stone, user lose
  if (chosenSPS == 'scissors' && input == 'paper' || 
  chosenSPS == 'paper' && input == 'stone' || 
  chosenSPS == 'stone' && input == 'scissors'){
    console.log('lose')
    return 'you lose! you chose ' + input + ' and computer chose ' + chosenSPS 
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
    if (randomSPS == 1){
    return 'scissors'
  }

    if (randomSPS == 2){
    return 'paper'
  }

    if (randomSPS == 3){
    return 'stone'
  }
}