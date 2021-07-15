var main = function (input) {
  //computer plays scissors paper or stone
  var computerSPS = generateRandomSPS();
  console.log(`input`, input);
  console.log(`computer plays`, computerSPS);

  //default output value is you lose
  var myOutputValue = `The computer chose ${computerSPS}.<br>
  You chose ${input}.<br><br>
  You lose! Bummer.<br><br>
  Now you can type "scissors" "paper" or "stone" to play another round.`;

  //if user plays scissors and computer plays paper
  //OR user plays paper and computer plays stone
  //OR user plays stone and computer plays scissors
  //user wins
  if(
    (input == `scissors` && computerSPS == `paper`)||
    (input == `paper` && computerSPS == `stone`) ||
    (input == `stone` && computerSPS == `scissors`)
  ){
    myOutputValue = `The computer chose ${computerSPS}.<br>
    You chose ${input}.<br><br>
    You win! Yay!<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round.`;
  }

  //if user and computer play sames
  //user draws
  if(input == computerSPS){
    myOutputValue = `The computer chose ${computerSPS}.<br>
    You chose ${input}.<br><br>
    You draw.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round.`
  }

  //input validation
  //if user types in anything other that scissors, paper or stone
  //inform user that they cannot do so
  if(
    input != `scissors` &&
    input != `paper` &&
    input != `stone`
    ){
      myOutputValue = `you can only enter scissors paper or stone, please try again`
    }
  console.log(myOutputValue);
  return myOutputValue;
};

//generate random number from 1 to 3
var generateRandomNum = function(){
  var randomDecimal = Math.random()*3;
  var randomInteger = Math.floor(randomDecimal);
  var oneToThree = randomInteger + 1;
  return oneToThree;
};

// generate random scissors paper or stone
var generateRandomSPS = function(){
  var randomSPS = generateRandomNum()

  if (randomSPS == 1){
    return `scissors`;
  };

  if (randomSPS == 2){
    return `paper`; 
  };

  if (randomSPS == 3){
    return `stone`;
  };  
  return `Oops there's a bug`
};