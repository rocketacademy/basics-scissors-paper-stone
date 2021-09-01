var main = function (input) {
  var myOutputValue = 'Scissors Paper Stone!';
  var comChoice = computerChoice();

  if (input != "Scissors" && input != "Paper" && input != "Stone")
  {
    myOutputValue = "Please input a valid choice.";
    return myOutputValue;
  }

  if (input == comChoice)
  {
    myOutputValue = "You chose: " + input;
    myOutputValue += "<br>Computer chose: " + comChoice;
    myOutputValue += "<br>IT'S A DRAW!";
  }
  else if ((input == "Scissors" && comChoice == "Paper") || (input == "Paper" && comChoice == "Stone") || input == "Stone" && comChoice == "Scissors")
  {
    myOutputValue = "You chose: " + input;
    myOutputValue += "<br>Computer chose: " + comChoice;
    myOutputValue += "<br>YAY YOU WIN!!";
  }
  else
  {
    myOutputValue = "You chose: " + input;
    myOutputValue += "<br>Computer chose: " + comChoice;
    myOutputValue += "<br>BOO YOU LOSE!";
  }

  return myOutputValue;
};

var computerChoice = function()
{
  var comChoice = Math.floor(1 + Math.random() * 3);
  console.log("Com Choice: " + comChoice);

  if (comChoice == "1")
  {
    console.log("Com chose Stone");
    comChoice = "Stone";
  }
  else if (comChoice == "2")
  {
    console.log("Com chose Scissors");
    comChoice = "Scissors";
  }
  else if (comChoice == "3")
  {
    console.log("Com chose Paper");
    comChoice = "Paper";
  }
  return comChoice;
}