//keep track of win-loss record
var numTimesUserWins = 0;
var numTimesComputerWins = 0;
var numTimesDraw = 0;
var numTimesGamePlayed = 0;

//keep track of user name
var isStartOfGame = true;
var userName = ``;

//keep track of game mode
var gameMode = `default`;

//keep track of most recent winner
var mostRecentWinner = ``;

//MAIN FUNCTION
var main = function (input) {

  //collect user name as first input
  if(isStartOfGame){
    isStartOfGame = false;
    userName = input;
      return `Welcome ${userName}! Start playing by entering ${createEmojiSPS(`scissors`)} ${createEmojiSPS(`paper`)} or ${createEmojiSPS(`stone`)}.`
  };

  //run game logic depending on game mode
  if(input == `reverse`){
     gameMode = `reverse`;
      return `You have changed game mode to ${gameMode}.`;
    };
  if (input == `default`){
      gameMode = `default`
        return`You have changed game mode to ${gameMode}.`;
    };
  if (input == `korean`){
      gameMode = `korean`
        return`You have changed game mode to ${gameMode}.`;
    };
  if (input == `computer`){
      gameMode = `computer`
        return`You have changed game mode to ${gameMode}.`;
    };

  //input validation
  if(
    input != `scissors` &&
    input != `paper` &&
    input != `stone` &&
    gameMode != `computer` // allow any input in computer game mode
    ){
      return `You can only enter ${createEmojiSPS(`scissors`)} ${createEmojiSPS(`paper`)} or ${createEmojiSPS(`stone`)}.<br>
      Please try again.`;
    };

  //computer plays scissors paper or stone
  var computerPlays = generateRandomSPS();
  console.log(`input`, input);
  console.log(`computer plays`, computerPlays);
  numTimesGamePlayed += 1;
  var currentGameResult = generateCurrentGameLogic(input, computerPlays);
  var winLossInfo = generateWinLossInfo();
    
  //default output value
  var myOutputValue = `Game mode: ${gameMode}<br><br>
  ${currentGameResult}<br><br>
  ${winLossInfo}<br><br>
  Now you can type "scissors" "paper" or "stone" to play another round.`;  

  console.log(`user games won`, numTimesUserWins);
  console.log(`computer games won`, numTimesComputerWins);
  console.log(`number of games played`, numTimesGamePlayed);
  
  return myOutputValue;
};

//generate information about win-loss record
var generateWinLossInfo = function(){
  var winningPercentage = Math.floor((numTimesUserWins/numTimesGamePlayed)*100);
  var winLossMessage = `${userName} won ${numTimesUserWins} times.<br>
  Computer won ${numTimesComputerWins} times.<br>
  Game drew ${numTimesDraw} times.
  ${userName} wins ${winningPercentage}% of the time.`

  if(winningPercentage < 50){
    return `${winLossMessage} Keep trying!`;
    };
return `${winLossMessage} Pretty good!`;
};

//generate game logic based on game mode
var generateCurrentGameLogic = function(userPlays,computerPlays){
  if(gameMode == `default`){
    var currentGameLogic = defaultGameLogic(userPlays, computerPlays);
  }else{
      if(gameMode == `reverse`){
      currentGameLogic = reverseGameLogic(userPlays, computerPlays);
      }else{
        if(gameMode == `korean`){
          currentGameLogic = koreanGameLogic(userPlays, computerPlays);
          }else{
            if(gameMode == `computer`){
              currentGameLogic = defaultGameLogic(generateRandomSPS(), computerPlays);
            };
          };
      };
  };
  return currentGameLogic;
};

//DEFAULT GAME LOGIC AND SCORING
var defaultGameLogic = function(userPlays,computerPlays){
  var gamePlayMessage = `Computer chose ${createEmojiSPS(computerPlays)}.<br>
  ${userName} chose ${createEmojiSPS(userPlays)}.`

  //Winning conditions
  if(
    (userPlays == `scissors` && computerPlays == `paper`)||
    (userPlays == `paper` && computerPlays == `stone`) ||
    (userPlays == `stone` && computerPlays == `scissors`)
  ){
    numTimesUserWins += 1;
    return `${gamePlayMessage}<br><br>${userName} wins! Yay!`;
  }else{
    //Draw conditions
    if(userPlays == computerPlays){
        numTimesDraw += 1;
        return `${gamePlayMessage}<br><br>It's a draw.`;
      }else{
        //if not, assume computer wins
        numTimesComputerWins += 1;
        return `${gamePlayMessage}<br><br>${userName} loses.`
      };
  };
};

//REVERSE GAME LOGIC AND SCORING
var reverseGameLogic = function(userPlays,computerPlays){
  var gamePlayMessage = `Computer chose ${createEmojiSPS(computerPlays)}.<br>
  ${userName} chose ${createEmojiSPS(userPlays)}.`

  //Winning conditions
  if(
    (userPlays == `scissors` && computerPlays == `stone`) ||
    (userPlays == `paper` && computerPlays == `scissors`) ||
    (userPlays == `stone` && computerPlays == `paper`)
  ){
    numTimesUserWins += 1;
    return `${gamePlayMessage}<br><br>${userName} wins! Yay!`;
  }else{
    //Draw conditions
    if(userPlays == computerPlays){
        numTimesDraw += 1;
        return `${gamePlayMessage}<br><br>It's a draw.`;
      }else{
        //if not, assume computer wins
        numTimesComputerWins += 1;
        return `${gamePlayMessage}<br><br>${userName} loses.`;
    };
  };  
};

//KOREAN GAME LOGIC AND SCORING
var koreanGameLogic = function(userPlays,computerPlays){
  //Most recent winner conditions
  if(
    (userPlays == `scissors` && computerPlays == `paper`)||
    (userPlays == `paper` && computerPlays == `stone`) ||
    (userPlays == `stone` && computerPlays == `scissors`)
  ){
    mostRecentWinner = userName;
    numTimesUserWins += 1;
    return `${userName} won this round. It is ${userName}'s turn to attack.`
  }else{
      if(
        (computerPlays == `scissors` && userPlays == `paper`)||
        (computerPlays == `paper` && userPlays == `stone`) ||
        (computerPlays == `stone` && userPlays == `scissors`)
      ){
        mostRecentWinner = `Computer`;
        numTimesComputerWins += 1;
        return `Computer won this round. It is Computer's turn to attack.`
      }else{
        //Ultimate winner conditions
          if(userPlays == computerPlays){
            if(mostRecentWinner == userName){
              mostRecentWinner = ``;
              return `${userName} wins the game!`
            }else{
                  if(mostRecentWinner == `Computer`){
                    mostRecentWinner = ``;
                    return `Computer wins the game!`
                  }else{
                      numTimesDraw += 1;
                      return `No attacker yet. Keep playing`;
                  };
            };
          };
      };
  };
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
  return `Oops there's a bug`;
};