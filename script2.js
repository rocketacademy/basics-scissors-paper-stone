var win = 0;
var loss = 0;
var draw = 0;
var username = "";
var waitingForUserName = true;
var gameMode = "normal";

var main = function (input) {
  var myOutputValue = 'Scissors Paper Stone!';
  var comChoice = computerChoice();

  if (waitingForUserName)
  {
      username = input;
      waitingForUserName = false;
      myOutputValue = "Welcome " + username;
      return myOutputValue;
  }
  else
  {
    if (input != "Scissors" && input != "Paper" && input != "Stone" && input != "reverse" && input != "normal")
    {
      myOutputValue = "Please input a valid choice.";
      return myOutputValue;
    }

    if (input == "reverse")
    {
      gameMode = "reverse";
      return "Game mode has been reversed!";
    }
    else if (input == "normal")
    {
      gameMode = "normal";
      return "Game mode is normal.";
    }

    if (gameMode == "normal")
    {
      if (input == comChoice)
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>DRAW!<br>";
        draw++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
      else if ((input == "Scissors" && comChoice == "Paper") || (input == "Paper" && comChoice == "Stone") || input == "Stone" && comChoice == "Scissors")
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>WIN!!<br>";
        win++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
      else
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>LOSE!<br>";
        loss++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
    }
    else if (gameMode == "reverse")
    {
      if (input == comChoice)
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>DRAW!<br>";
        draw++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
      else if ((input == "Scissors" && comChoice == "Paper") || (input == "Paper" && comChoice == "Stone") || input == "Stone" && comChoice == "Scissors")
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>LOSE!!<br>";
        loss++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
      else
      {
        myOutputValue = "You chose: " + input;
        myOutputValue += "<br>Computer chose: " + comChoice;
        myOutputValue += "<br>WIN!<br>";
        win++;
        myOutputValue += "<br>Congratulations " + username + ", Wins: " + win + " " + "Losses: " + loss + " " + "Draws: " + draw;
      }
    }

    
    return myOutputValue;
  }

  
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