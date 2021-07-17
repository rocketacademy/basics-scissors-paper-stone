//keep track of win-loss record
var numTimesUserWins = 0;
var numTimesComputerWins = 0;
var numTimesDraw = 0;
var numTimesGamePlayed = 0;

//MAIN FUNCTION
var main = function (input) {
  //computer plays scissors paper or stone
  var computerSPS = generateRandomSPS();
  console.log(`input`, input);
  console.log(`computer plays`, computerSPS);
  numTimesGamePlayed += 1;
  var currentGameResult = gameLogic(input,computerSPS);
  var winLossInfo = generateWinLossInfo();
  
  //default output value
  var myOutputValue = `${winLossInfo}<br><br>
  ${currentGameResult}<br><br>
  Now you can type "scissors" "paper" or "stone" to play another round.`;

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
      Please try again.`;
    };
  
  console.log(`user games won`, numTimesUserWins);
  console.log(`computer games won`, numTimesComputerWins);
  console.log(`number of games played`, numTimesGamePlayed);
  
  return myOutputValue;
};

//generate information about win-loss record
var generateWinLossInfo = function(){
  var winningPercentage = Math.floor((numTimesUserWins/numTimesGamePlayed)*100);
  return `You won ${numTimesUserWins} times.<br>
  Computer won ${numTimesComputerWins} times.<br>
  You drew ${numTimesDraw} times.
  You win ${winningPercentage}% of the time.`;
};

//SPS game logic and scoring
var gameLogic = function(userPlays,computerPlays){

  //WINNING CONDITIONS
  //if user plays scissors and computer plays paper
  //OR user plays paper and computer plays stone
  //OR user plays stone and computer plays scissors
  //OR user plays reversed scissors and computer plays stone
  //OR user plays reversed paper and computer plays scissors
  //OR user plays reversed stone and computer plays paper
  //user wins
  if(
    (userPlays == `scissors` && computerPlays == `paper`)||
    (userPlays == `paper` && computerPlays == `stone`) ||
    (userPlays == `stone` && computerPlays == `scissors`)||
    (userPlays == `reversed scissors` && computerPlays == `stone`) ||
    (userPlays == `reversed paper` && computerPlays == `scissors`) ||
    (userPlays == `reversed stone` && computerPlays == `paper`)
  ){
    numTimesUserWins += 1;
    return `The computer chose ${createEmojiSPS(computerPlays)}.<br>
    You chose ${createEmojiSPS(userPlays)}.<br><br>
    You win! Yay!`;
  };

  //if user and computer play same SPS
  //OR same reversed SPS
  //user draws
  if(
    userPlays == computerPlays ||
    userPlays == `reversed ${computerPlays}`
    ){
      numTimesDraw += 1;
      return `The computer chose ${createEmojiSPS(computerPlays)}.<br>
    You chose ${createEmojiSPS(userPlays)}.<br><br>
    You draw.`;
  };
  
  //if not, assume computer wins
  numTimesComputerWins += 1;
  return `The computer chose ${createEmojiSPS(computerPlays)}.<br>
  You chose ${createEmojiSPS(userPlays)}.<br><br>
  You lose.`;
};


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