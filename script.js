//Global Variable
var username =0
var computerWin = 0
var userWin = 0
var roundCount = 0
var gamemode = 0
var firstWinner = 0     //0 = no lead, 1 = User lead, 2 = computer lead
var ultiWinner = 0

var main = function (input) {
  // input username
  if (username == 0){
    username = input
    return "Hi "+username+" :) <br> Please select game mode  (normal/reversed/korean)"
  } else{   
  // select game mode
  if (gamemode == 0 && input == "normal"){
    gamemode = input
    return "Normal mode selected. Please enter scissors paper or stone"
  }else if (gamemode == 0 && input == "reversed"){
    gamemode = input
    return "Reversed mode selected. Please enter scissors paper or stone"
  }else if (gamemode == 0 && input == "korean"){
      gamemode = input
      return "Korean mode selected. Please enter scissors paper or stone"
  }else if (gamemode == 0 && (input != "normal" || input != "reversed")){
    return "Hi "+username+" :) <br> Please select game mode  (normal/reversed/korean)"
  }
  }

  //korean version
  if (gamemode == "korean"){
    while (ultiWinner == 0){
    if (
      input != "scissors" &&
      input != "stone" &&
      input != "paper"
    ){
      output =
        "Please input again either (paper) (scissors) (stone)";
      return output;
    }else if (input == "scissors" || input == "paper" || input == "stone") {
      programHand = chooseHand();
      gameStatus = checkWin(input, programHand);
    }
    if(firstWinner == 0 && gameStatus == "You Win!"){                           // User wins first round
      firstWinner = 1
      return "You Win the first round! Input 2nd round guess"
    }else if (firstWinner == 0 && gameStatus == "You Lose!"){                   // Computer wins first round
      firstWinner = 2
      return "You Lose the first round! Avoid guess the same as computer!"
    }else if (firstWinner == 0 && gameStatus == "Its a Draw!"){                 // First round draws
      return "Draw! input again"
    }else if (firstWinner == 1 && gameStatus == "Its a Draw!"){                 // User wins first round and draws second round, User is ultimate winner
      ultiWinner == 1
      return "You are the ultimate Winner!"
    }else if (firstWinner == 2 && gameStatus == "Its a Draw!"){                 // Computer wins first round and draws second round, Computer is ultimate winner
      ultiWinner == 2
      return "You lose! Computer is ultimate winner!"
    }else if (firstWinner == 1 && gameStatus != "Its a Draw!"){                 // User wins first round but not draw second round
      firstWinner = 0
      return "You lose second round! Try again from first round"
    }else if (firstWinner == 2 && gameStatus != "Its a Draw!"){                 // Computer wins first round but not draw second round
      firstWinner = 0
      return "Computer loses second round! Try again"
    }
  }
  }

  // check input & generate result based on normal gamemode
  if (
    input != "scissors" &&
    input != "stone" &&
    input != "paper"
  ){
    output =
      "Please input again either (paper) (scissors) (stone)";
    return output;
  } else if (input == "scissors" || input == "paper" || input == "stone") {
    programHand = chooseHand();
    gameStatus = checkWin(input, programHand);
  }
  if (gamemode == "normal"){
    if (gameStatus == "You Win!") {  
      console.log("normal user win")             //User wins normal
      userWin = userWin + 1;
  }else if (gameStatus = "You Lose!") {         //Computer wins normal
      console.log("normal computer win")
      computerWin = computerWin +1;
  }}
  else if (gamemode == "reversed"){ 
    if (gameStatus == "You Win!") {               //User wins normal but reversed mode
      console.log("reverse but normal user win")
      computerWin = computerWin + 1;
      gameStatus = "You Lose!";
    } else if (gameStatus = "You Lose!") {      //Computer wins normal but reversed mode
      console.log("reverse but normal computer win")
      userWin = userWin +1;
      gameStatus = "You Win!";
    }
  }

  roundCount = roundCount +1
  return (
    "You selected "+ gamemode +" mode"+
    "<br>Computer selected " +
    programHand +
    "<br>" +username+" selected " +
    input +
    "<br><br>" +
    gameStatus + "<br> So far " +username+", you've been winning "+ userWin+"/"+roundCount+" turns. Pretty Good!"+
    "<br><br> Now you can type 'scissors' 'paper' or 'stone' to play another round!"
  );
}

// generate program hand
var chooseHand = function () {
  randNum = Math.floor(Math.random() * 3);
  if (randNum == 0) {
    return "scissors";
  } else if (randNum == 1) {
    return "paper";
  } else if (randNum == 2) {
    return "stone";
  }
};

//check win lose or draw
var checkWin = function (player, program) {
  var status = "Its a Draw!";
  if (player == program) {
    return status;
  } else if (player == "scissors" && program == "paper") {
    status = "You Win!";
  } else if (player == "scissors" && program == "stone") {
    status = "You Lose!";
  } else if (player == "paper" && program == "scissors") {
    status = "You Lose!";
  } else if (player == "paper" && program == "stone") {
    status = "You Win!";
  } else if (player == "stone" && program == "scissors") {
    status = "You Win!";
  } else if (player == "stone" && program == "paper") {
    status = "You Lose!";
  }
  return status;
};
