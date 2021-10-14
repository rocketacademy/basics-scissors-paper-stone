var main = function (input) {
  // var myOutputValue = `Wrong Input! <br> Please enter 'scissor', 'paper', 'stone', 'reversed scissor', 'reversed paper' or 'reversed stone' only.`;
  var randomNo = generateRandomNo();
  //define number 0 as scissor
  if (randomNo == 0 && (input == "scissor" || input == "reversed scissor")) {
    console.log(randomNo);
    console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br> Its a Draw! <br> Try again! `;
  }
  if (randomNo == 0 && (input == "paper" || input == "reversed stone")) {
    console.log(randomNo);
    console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br> You Lost! <br> Try again!`;
  }
  if (randomNo == 0 && (input == "stone" || input == "reversed paper")) {
    console.log(randomNo);
    console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Scissor. <br> You Won! <br> Let's Continue! `;
  }
  //define number 1 as paper
  if (randomNo == 1 && (input == "scissor" || input == "reversed stone")) {
    console.log(randomNo);
    console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br> You Won! `;
  }
  if (randomNo == 1 && (input == "paper" || input == "reversed paper")) {
    console.log(randomNo);
    console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br> Its a Draw! <br> Try again! `;
  }
  if (randomNo == 1 && (input == "stone" || input == "reversed scissor")) {
    console.log(randomNo);
    console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Paper. <br> You Lost! <br> Try again!`;
  }
  //define 2 as Stone
  if (randomNo == 2 && (input == "scissor" || input == "reversed paper")) {
    console.log(randomNo);
    console.log("Lost");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br> You Lost! <br> Try again!`;
  }
  if (randomNo == 2 && (input == "paper" || input == " reversed scissor")) {
    console.log(randomNo);
    console.log("Win");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br> You Won! `;
  }
  if (randomNo == 2 && (input == "stone" || input == "reversed stone")) {
    console.log(randomNo);
    console.log("Draw");
    myOutputValue = `You chose ${input}, <br> The computer chose Stone. <br> Its a Draw! <br> Try again! `;
  }
  if (
    input != "scissor" ||
    input != "paper" ||
    input != "stone" ||
    input != "reversed scissor" ||
    input != "reversed stone" ||
    input != "reversed paper"
  ) {
    myOutputValue = `Wrong Input! <br> Please enter 'scissor', 'paper', 'stone', 'reversed scissor', 'reversed paper' or 'reversed stone' only.`;
  }
  // else {
  //   console.log("wrong input");
  //   myOutputValue = `Wrong Input! <br> Please enter 'scissor', 'paper', 'stone', 'reversed scissor', 'reversed paper' or 'reversed stone' only.`;
  // }
  return myOutputValue;
};
//check whether input won/draw with the program
//Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
//Validate the inputs with only 'Scissor', 'Paper' and 'Stone'
//if otherwise inform the user that there are only 3 input options and ask them to try again

var generateRandomNo = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  return randomInteger;
};
