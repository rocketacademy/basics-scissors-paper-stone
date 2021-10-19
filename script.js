//This is a global value, I used the prompt function to keep the player username in the game
var userName = prompt('Please state your Name');
console.log(userName)
var winCount = 0;
var totalPlay = 0;

var main = function (userInput) {
  var myOutputValue = 'Invalid Input';

  //I put an array to hold the three choices for the computer to choose
  var compChoices = ['rock', 'paper', 'scissor'];

  //put random index for computer choices
  var randomIndex = Math.floor(Math.random() * 3);

  //I put random index to get/hold the array
  var compPick = compChoices[randomIndex]

  //this will increment +1 everytime the user input her/his pick, it will update everytime you enter a value or your pick
  totalPlay = totalPlay + 1;
 //In the console log I declare the user input as the user name and "computer chose" constant variable since it will randomly pick choices inside the array
  console.log(`${userName} chose ${userInput}`); 
  console.log('Computer chose', compPick) 

  //To define both user and computer choices I put 2 variables
  var computerInputText = `The computer chose ${compPick}`;
  var userInputtext = `You chose ${userInput}`

  //To define winning or losing string value
  var computerWinsText = 'You lose! Bummer!';
  var userWinsText = 'You win!';
  var tieText = "It's a Tie!";
  var outCome = '';

 //There are three scenarios that the computer would pick either rock paper scissor
  if (userInput == 'rock') {
    if (compPick == 'rock') {
      outCome = tieText;
    } else if (compPick == 'paper') {
      outCome = computerWinsText;
    } else if (compPick == 'scissor') {
      outCome = userWinsText;
      winCount = winCount + 1
    }
  } else if (userInput == 'paper') {
    if (compPick == 'rock') {
      outCome = userWinsText;
      winCount = winCount + 1
    } else if (compPick == 'paper') {
      outCome = tieText;
    } else if (compPick == 'scissor') {
      outCome = computerWinsText;
    }
  } else if (userInput == 'scissor') {
    if (compPick == 'rock') {
      outCome = computerWinsText;
    } else if (compPick == 'paper') {
      outCome = userWinsText;
      winCount = winCount + 1
    } else if (compPick == 'scissor') {
      outCome = tieText;
    }
  } else {
    return myOutputValue
  }

  myOutputValue = `${computerInputText} <br/> ${userInputtext} <br/> <br/> ${outCome} <br/> <br/> So for ${userName}, you've been winning ${winCount}/${totalPlay}. Nice!`

   return myOutputValue
} 