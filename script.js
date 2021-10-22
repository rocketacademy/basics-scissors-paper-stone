//check whether input won/draw with the program
//1st Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//2nd Rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors.The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. For example: "reversed stone".
// var userWinCount = 0;
// var compWinCount = 0;
// var main = function (input) {
//   var randomGuess = generateRandomNo();
//   userCount = false;
//   compCount = false;
//   console.log(input);
//   if (randomGuess == 0){
//     if (input == 'scissors' || input == "reversed scissor") {
//   //console.log(randomNo);
//   //console.log("Draw");
//     myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> Its a Draw! <br> Try again! `;
//     // console.log(userWinCount);
//     // console.log(compWinCount);
//     }
//     if (input =='scissor' || input == "reversed stone") {
//   //   //console.log(randomNo);
//   //   //console.log("Lost");
//     compCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> You Lost! <br> Try again!`;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
//     if (input == "stone" || input == "reversed paper") {
//       //console.log(randomNo);
//       //console.log("Win");
//     userCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> You Won! <br> Let's Continue!`;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
// }
// if (randomGuess = 1){
//   if (input == "scissor" || input == "reversed stone") {
//     //console.log(randomNo);
//     //console.log("Win");
//     userCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> You Won! <br> Let's continue!`;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
//   if (input == "paper" || input == "reversed paper") {
//     //console.log(randomNo);
//     //console.log("Draw");
//     myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> Its a Draw! <br> Try again! `;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
//   if (input == "stone" || input == "reversed scissor") {
//     //console.log(randomNo);
//     //console.log("Lost");
//     compCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> You Lost! <br> Try again! `;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
// }
// if (randomGuess = 2){
//   if (input == "scissor" || input == "reversed paper") {
//     //console.log(randomNo);
//     //console.log("Lost");
//     compCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> You Lost! <br> Try again! `;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
//   if (input == "paper" || input == " reversed scissor") {
//     //console.log(randomNo);
//     //console.log("Win");
//     userCount = true;
//     myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> You Won! <br> Let's continue! `;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
//   if (input == "stone" || input == "reversed stone") {
//     //console.log(randomNo);
//     //console.log("Draw");
//     myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> Its a Draw! <br> Try again! `;
//     //console.log(userWinCount);
//     //console.log(compWinCount);
//   }
// }
//   if (userCount = true){
//     userWinCount = userWinCount + 1;
//     //newUserWinCount = userWinCount;
//     console.log(userWinCount);
//     //return userWinCount;
//   }
//   if (compCount = true){
//     compWinCount = compWinCount + 1
//     //newCompWinCount = compWinCount;
//     console.log(compWinCount);
//     //return compWinCount;
//   }

// return myOutputValue;
// };

//define global variable
var S = 'scissor';
var P = 'paper';
var ST = 'stone';
var RS = 'reversed scissor';
var RP = 'reversed paper';
var RST = 'reversed stone';
var playerWinCount = 0;
var compWinCount = 0;
var playerWinRecord = Number();
var compWinRecord = Number();
var userInputName = String();
var userName = String();
var userName1 = String();
//generate random guess
var generateRandomGuess = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  if (randomInteger == 0){
    return S;
  }
  if (randomInteger == 1){
    return P;
  }
  return ST;
}

//define how player win computer
var playerWinComp = function (playerGuess, compGuess){
  return ((playerGuess == S && compGuess == P) || (playerGuess == P && compGuess == ST) || (playerGuess == ST && compGuess == S ) || (playerGuess == RS && compGuess == ST) || (playerGuess == RP && compGuess == S) || (playerGuess == RST && compGuess == P));
}

//define how player draw with computer
var playerDrawComp = function (playerGuess, compGuess){
  return ((playerGuess == compGuess) || (playerGuess == RS && compGuess == S) || (playerGuess == RP && compGuess == P) || (playerGuess == RST && compGuess == ST));
}

//define how player loss to computer
var playerLossComp = function (playerGuess, compGuess){
   return ((playerGuess == S && compGuess == ST) || (playerGuess == P && compGuess == S) || (playerGuess == ST && compGuess == P ) || (playerGuess == RS && compGuess == P) || (playerGuess == RP && compGuess == ST) || (playerGuess == RST && compGuess == S));
}
var inputName = function (userName){
  return (userName != S || userName != P || userName !=ST || userName != RS || userName != RP || userName != RST)

}

var main = function(input){
  var compGuess = generateRandomGuess();

  var playerGuess = input;
  userInputName = userName;

    if (playerWinComp(playerGuess, compGuess)){
    playerWinCount = playerWinCount + 1;
    playerWinRecord = playerWinCount;
    userInputName = userName1;
    return `You Won!<br>Your guess is: ${playerGuess}<br>Computer guess is: ${compGuess}. ${playerWinRecord}  ${compWinRecord}  ${userName1}`
  }
  if(playerLossComp(playerGuess, compGuess)){
    compWinCount = compWinCount + 1;
    compWinRecord = compWinCount;
    userInputName = userName;
    return `You Loss!<br>Your guess is: ${playerGuess}<br>Computer guess is: ${compGuess} ${compWinRecord} ${playerWinRecord} `
  }
  if(playerDrawComp(playerGuess, compGuess)){
    userInputName = userName;
    return `It's a draw!<br>Your guess is: ${playerGuess}<br>Computer guess is: ${compGuess}. `
  }
  if (
    input != S ||
    input != P ||
    input != ST ||
    input != RS ||
    input != RP ||
    input != RST
  ) {
    var userName = input;
    console.log(userName);
    return userName;
  }
  return 
};