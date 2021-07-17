    
var PlayervsComputer = function (PlayerChoice, ComputerChoice){

    if (PlayerChoice =='scissors' && ComputerChoice =='scissors'){
    return myOutputValue= 'Its a tie!';
    }

    if (PlayerChoice =='scissors' && ComputerChoice =='paper'){
    return myOutputValue= 'you win';
    }

    if (PlayerChoice =='scissors' && ComputerChoice =='stone'){ 
    return myOutputValue= 'you lose';
    }
    if (PlayerChoice =='paper' && ComputerChoice =='paper') {
    return myOutputValue= 'Its a tie!';
    }

    if (PlayerChoice =='paper' && ComputerChoice =='stone')
    return myOutputValue= 'you win';

    if (PlayerChoice =='paper' && ComputerChoice =='scissors')
    return myOutputValue= 'you lose';

    if (PlayerChoice =='stone' && ComputerChoice =='stone')
    return myOutputValue= 'Its a tie!';

    if (PlayerChoice =='stone' && ComputerChoice =='paper')
    return myOutputValue= 'you lose';

    if (PlayerChoice =='stone' && ComputerChoice =='scissors')
    return myOutputValue= 'you win';

    return myOutputValue;
  
};
var generateaRandomInteger= function () {
  var randomDecimal = Math.random() * 3;
  var randomIntegar = Math.floor(randomDecimal) + 1;
  return randomIntegar;
};

var generateaRandomSPR= function(){
  var randomizednum = generateaRandomInteger();
  if (randomizednum == 1) {
    return 'scissors';
    }
  if (randomizednum == 2) {
    return 'stone';
    }
    if (randomizednum == 3) {
      return 'paper';
    };
  
  };

var main = function (input) {
  var PlayerChoice = input
  console.log(PlayerChoice)
  var ComputerChoice = generateaRandomSPR()
  console.log(ComputerChoice)
  var WhoWins = PlayervsComputer(PlayerChoice,ComputerChoice)
  return WhoWins
  var myOutputValue = generaterandomSCR (input);
    return myOutputValue;
  }; 
