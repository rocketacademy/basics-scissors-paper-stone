var main = function (input) {

  var myOutputValue = `you lose`;

  var comChoice = generateChoice();
  console.log(input, comChoice)

//input validator
  if (
    input != `scissors` | input != `paper` | input != `stone`)
    {
  myOutputValue = `You entered ${input}, please enter scissors, paper or stone and try again`
  }

// winning conditions
  if (
  (input == `stone` && comChoice == `scissors`) ||
  (input == `paper` && comChoice == `stone`) ||
  (input == `scissors` && comChoice == `paper`)
  ) {
    myOutputValue = `I picked ` + input + ` and Computer picked ` + comChoice + `. I win! Hooray!`
  }
// draw conditions
  if (input == comChoice) {
    myOutputValue = `I picked ` + input + ` and Computer picked ` + comChoice + `. Try Again!`
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