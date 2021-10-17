var main = function (userInput) {
  var myOutputValue = 'Invalid Input';
  var compChoices = ['rock', 'paper', 'scissor'];
  var randomIndex = Math.floor(Math.random() * 3);
  var compPick = compChoices[randomIndex]
  
  console.log('User Input', userInput) 
  console.log('Computer Pick', compPick) 

  var computerWinsText = 'Computer Wins!';
  var userWinsText = 'User Wins!';
  var tieText = "It's a Tie!";

  if (userInput == 'rock') {
    if (compPick == 'rock') {
      myOutputValue = tieText;
    } else if (compPick == 'paper') {
      myOutputValue = computerWinsText;
    } else if (compPick == 'scissor') {
      myOutputValue = userWinsText;
    }
  } else if (userInput == 'paper') {
    if (compPick == 'rock') {
      myOutputValue = userWinsText;
    } else if (compPick == 'paper') {
      myOutputValue = tieText;
    } else if (compPick == 'scissor') {
      myOutputValue = computerWinsText;
    }
  } else if (userInput == 'scissor') {
    if (compPick == 'rock') {
      myOutputValue = computerWinsText;
    } else if (compPick == 'paper') {
      myOutputValue = userWinsText;
    } else if (compPick == 'scissor') {
      myOutputValue = tieText;
    }
  }

  return myOutputValue;
}

