//check whether input won/draw with the program
//1st Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//2nd Rules are reversed: scissors beat stone, stone beats paper, and paper beats scissors.The user can choose to try their luck at reversed mode by adding the word "reversed" to their choice. For example: "reversed stone".
var main = function (input) {
  var randomNo = generateRandomNo();
  //Validate the inputs with only 'Scissor', 'Paper' and 'Stone'
  //if otherwise inform the user that there are only 3 input options and ask them to try again
  var myOutputValue = `Wrong input!<br><br>Please enter the 
  following ONLY:<br> 'scissor', 'paper', 'stone', 'reversed scissor', 'reversed paper' or 'reversed stone'.`;
  //define number 0 as scissor
  if (randomNo == 0 && (input == "scissor" || input == "reversed scissor")) {
    //console.log(randomNo);
    //console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> Its a Draw! <br> Try again! `;
  }
  if (randomNo == 0 && (input == "paper" || input == "reversed stone")) {
    //console.log(randomNo);
    //console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> You Lost! <br> Try again!`;
  }
  if (randomNo == 0 && (input == "stone" || input == "reversed paper")) {
    //console.log(randomNo);
    //console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br><br> You Won! <br> Let's Continue! `;
  }
  //define number 1 as paper
  if (randomNo == 1 && (input == "scissor" || input == "reversed stone")) {
    //console.log(randomNo);
    //console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> You Won! <br> Let's continue! `;
  }
  if (randomNo == 1 && (input == "paper" || input == "reversed paper")) {
    //console.log(randomNo);
    //console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> Its a Draw! <br> Try again! `;
  }
  if (randomNo == 1 && (input == "stone" || input == "reversed scissor")) {
    //console.log(randomNo);
    //console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br><br> You Lost! <br> Try again!`;
  }
  //define 2 as Stone
  if (randomNo == 2 && (input == "scissor" || input == "reversed paper")) {
    //console.log(randomNo);
    //console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> You Lost! <br> Try again!`;
  }
  if (randomNo == 2 && (input == "paper" || input == " reversed scissor")) {
    //console.log(randomNo);
    //console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> You Won! <br> Let's continue! `;
  }
  if (randomNo == 2 && (input == "stone" || input == "reversed stone")) {
    //console.log(randomNo);
    //console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br><br> Its a Draw! <br> Try again! `;
  }
  // else {
  //   myOutputValue = `wrong input`;
  // }
  return myOutputValue;
};

var generateRandomNo = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};
