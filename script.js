//generate random number from 1 to 3
var generateRandomNum = function(){
  var randomDecimal = Math.random()*3;
  var randomInteger = Math.floor(randomDecimal);
  var oneToThree = randomInteger + 1;
  return oneToThree;
};

//generate random scissors paper or stone
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
  return `Oops there's a bug`;
};

//add emoji to scissors paper and stone
var createEmojiSPS = function(SPS){
  if(SPS == `scissors`){
    return `scissors ✌	`;
  };
  if(SPS == `paper`){
    return `paper 🖐	`;
  };
  if(SPS == `stone`){
    return `stone 👊	`;
  };
  if(SPS == `reversed scissors`){
    return `reversed scissors 👇	✌	`;
  };
  if(SPS == `reversed paper`){
    return `reversed paper 👇	🖐	`;
  };
  if(SPS == `reversed stone`){
    return `reversed stone 👇 👊	`;
  };
  return `Oops there's a bug`;
};

//MAIN FUNCTION
var main = function (input) {
  //computer plays scissors paper or stone
  var computerSPS = generateRandomSPS();
  console.log(`input`, input);
  console.log(`computer plays`, computerSPS);

  //default output value is you lose
  var myOutputValue = `The computer chose ${createEmojiSPS(computerSPS)}.<br>
  You chose ${createEmojiSPS(input)}.<br><br>
  You lose! Bummer.<br><br>
  Now you can type "scissors" "paper" or "stone" to play another round.`;

  //if user plays scissors and computer plays paper
  //OR user plays paper and computer plays stone
  //OR user plays stone and computer plays scissors
  //OR user plays reversed scissors and computer plays stone
  //OR user plays reversed paper and computer plays scissors
  //OR user plays reversed stone and computer plays paper
  //user wins
  if(
    (input == `scissors` && computerSPS == `paper`)||
    (input == `paper` && computerSPS == `stone`) ||
    (input == `stone` && computerSPS == `scissors`)||
    (input == `reversed scissors` && computerSPS == `stone`) ||
    (input == `reversed paper` && computerSPS == `scissors`) ||
    (input == `reversed stone` && computerSPS == `paper`)
  ){
    myOutputValue = `The computer chose ${createEmojiSPS(computerSPS)}.<br>
    You chose ${createEmojiSPS(input)}.<br><br>
    You win! Yay!<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round.`;
  }

  //if user and computer play same SPS
  //OR same reversed SPS
  //user draws
  if(input == computerSPS ||
    input == `reversed ${computerSPS}`
    ){
    myOutputValue = `The computer chose ${createEmojiSPS(computerSPS)}.<br>
    You chose ${createEmojiSPS(input)}.<br><br>
    You draw.<br><br>
    Now you can type "scissors" "paper" or "stone" to play another round.`
  }

  //input validation
  //if user types in anything other that scissors, paper, stone,
  //reversed scissors, reversed paper or reversed stone
  //inform user that they cannot do so
  if(
    input != `scissors` &&
    input != `paper` &&
    input != `stone` &&
    input != `reversed scissors` &&
    input != `reversed paper` &&
    input != `reversed stone` 
    ){
      myOutputValue = `You can only enter ${createEmojiSPS(`scissors`)} ${createEmojiSPS(`paper`)} or ${createEmojiSPS(`stone`)}.<br>
      Please try again.`
    }
  console.log(myOutputValue);
  return myOutputValue;
};