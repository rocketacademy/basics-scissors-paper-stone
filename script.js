var main = function (input) {
  //Check input
  if ( input != "scissors" && input != "stone" && input != "paper" && input != "reversed scissors" && input != "reversed stone" && input != "reversedpaper"){
    output = "Please input again either (paper) (scissors) (stone) (reversed paper) (reversed scissors) or (reversed stone)";
    return output;
  } else if(input == "scissors" || input =="paper" || input == "stone"){
  programHand = chooseHand()
  gameStatus = checkWin(input,programHand)
  } else{
    programHand = chooseHand()
    gameStatus = checkWin(input,programHand)
    if (gameStatus == "You Win!"){
      gameStatus = "You Lose!"
    } else if(gameStatus = "You Lose!"){
      gameStatus = "You Win!"
    }
  }
  return "Computer selected " + programHand + "<br> You selected "+input+"<br><br>"+gameStatus+"<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!";
};

// generate program hand
var chooseHand = function(){
  randNum = Math.floor(Math.random()*3)
  if (randNum == 0){
    return "scissors"
  } else if (randNum == 1){
    return "paper"
  }else if (randNum ==2){
    return "stone"
  }
}

//check win lose or draw
var checkWin  = function(player,program){
  var status = "Its a Draw!"
  if (player == program){
    return status
  }else if (player == "scissors" && program == "paper"){
    status = "You Win!"
  }else if (player == "scissors" && program == "stone"){
    status = "You Lose!"
  }else if (player == "paper" && program == "scissors"){
    status = "You Lose!"
  }else if (player == "paper" && program == "stone"){
    status = "You Win!"
  }else if (player == "stone" && program == "scissors"){
    status = "You Win!"
  }else if (player == "stone" && program == "paper"){
    status = "You Lose!"
  }
  return status
}