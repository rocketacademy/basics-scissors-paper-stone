var main = function (input) {

  var myOutputValue = `You lose, Try Again`;

  var comChoice = generateChoice();
  console.log(input, comChoice)

//input validator
  if (
    input != `scissors` || input != `paper` || input != `stone` ||
    input != `reversed scissors` || input != `reversed paper`||
    input != `reversed stone`)
    {
  myOutputValue = `You entered ${input}, please enter scissors, paper or stone and try again`
  }

// winning conditions
  if (
  (input == `stone` && comChoice == `scissors`) | 
  (input == `reversed stone` && comChoice == `paper`) |
  (input == `reversed paper` && comChoice == `scissors`) |
  (input == `paper` && comChoice == `stone`) |
  (input == `reversed scissors` && comChoice == `stone`) |
  (input == `scissors` && comChoice == `paper`)
  ) {
    myOutputValue = `I picked ${input}
    <br><br>and Computer picked ${comChoice}.
    <br><br>I win! Hooray!`
  }
// draw conditions
  if (input == comChoice) {
    myOutputValue = `I picked ${input} 
    <br><br>and Computer picked ${comChoice}.
    <br><br>Try Again!`
  }
  console.log(input,comChoice)
  return myOutputValue
}

// Assign a choice to computer via randomNumber function

var generateChoice = function() {
  var randomComChoice = randomNumber();
  if (randomComChoice == 1) {
    return `scissors`;
  }

  if (randomComChoice == 2) {
    return `paper`;
  }

  else { return`stone`;
  }

}

var randomNumber = function () {

  var randomDecimal = Math.random() * 3;

  var randomInterger = Math.floor(randomDecimal);

  var randomNumber = randomInterger + 1;

  return randomNumber;

}
