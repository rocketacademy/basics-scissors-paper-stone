
// Project Scissors, Paper Stone.....up to Part 2 Basic

// generate function random number
var randomNumEl = function(){
  var randomEl = Math.random() * 3
  var roundEl = Math.floor(randomEl)
  var integer = roundEl + 1
  return integer
  }

// global var
var userWinEl = 0
var programWinEl = 0
var gameDrawEl = 0
var totalCountEl = 0
var currentMode = ``
var userName = ``

var main = function (input) {
  if(currentMode == ``){
    userName = input
    currentMode = `spsGame`
    myOutputValue = `Hi ${input}, welcome to the game. Now you can start your game by typing Scissors, Paper, Stone.<br>
    if you want more fun, try our Reversed Mode by typing Reversed in front of selected object for more intesting result. Enjoy!`
  } else if(currentMode == `spsGame`){
// default error message
var myOutputValue = `Error......   You type:  ${input}. Please check your typing and retry again`

// generate function assign SPS
var programEl = randomNumEl()
if(programEl == 1){
programEl = `Scissors`
}
if(programEl == 2){
programEl = `Paper`
}
if(programEl == 3){
programEl = `Stone`
}
//enter users name to start the game

//Game Draw normal rules
if(input == programEl){
totalCountEl += 1
// userWinEl += 1
// programWinEl += 1
gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `Game was draw. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`

}
//Game Draw reversed rules
if(input == `Reversed Scissors` && programEl == `Scissors`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Paper` && programEl == `Paper`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Stone` && programEl == `Stone`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}

//
//Win or lose normal rules
if(input == `Scissors` && programEl == `Paper`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Scissors` && programEl == `Stone`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Paper` && programEl == `Stone`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Paper` && programEl == `Scissors`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Stone` && programEl == `Scissors`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Stone` && programEl == `Paper`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}

//win or lose reversed rules
if(input == `Reversed Scissors` && programEl == `Paper`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Scissors` && programEl == `Stone`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Paper` && programEl == `Stone`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Paper` && programEl == `Scissors`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Stone` && programEl == `Scissors`){
totalCountEl += 1
// userWinEl += 1
programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You lost the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
if(input == `Reversed Stone` && programEl == `Paper`){
totalCountEl += 1
userWinEl += 1
// programWinEl += 1
// gameDrawEl += 1 
userWinPc = Math.floor(userWinEl/totalCountEl * 100)
programWinPc = Math.floor(programWinEl/totalCountEl *100)
myOutputValue = `You won the game. User: [${input}] Program: [${programEl}] <><> Total Round: [${totalCountEl}]<br><br>
User Win: [${userWinEl}]<br> Program Win: [${programWinEl}]<br> Game Draw: [${gameDrawEl}]<br>
User Win: [${userWinPc}%]<br>
Program Win: [${programWinPc}%]`
}
  }
// //Checking
// console.log(`input  ${input}`)
// console.log(`programEl  ${programEl}`)
// console.log(`userDrawEl  ${gameDrawEl}`)
// console.log(`userCountEl  ${userWinEl}`)
// console.log(`programCountEl  ${programWinEl}`)

return myOutputValue;
  
}




//......to be continue with comfortable and more comfortable....






  

  
  

  