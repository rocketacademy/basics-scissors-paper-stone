
var scissors  = "scissors"
var stone = "stone"
var paper = "paper"

//why must I use the work Main to mark out a function


var randomnumber = function(){
  var number = Math.floor(Math.random() * 2);

  console.log("success one")
  if (number == 0){
    return scissors;
  };

  console.log("a")
  if (number == 1){
    return paper;
    
  };
  console.log("b")
  if (number == 2){
    return stone
  };
}  

var numbers = randomnumber()
console.log(numbers)

var main = function(input){
  if(input == numbers) return "draw";
  console.log("success two")
  if(input == scissors && numbers == paper) 
  return "win";
  console.log("success three")
  if(input == scissors && numbers == stone) 
  return "lose";
  console.log("success four")
  if(input == paper && numbers == scissors) 
  return "lose";
  console.log("success five")
  if(input == paper && numbers == stone) 
  return "win";
  console.log("success six")
  if(input == stone && numbers == paper) 
  return "lose";
  console.log("success seven")
  if(input == stone && numbers == scissors) 
  return "win"; 
  console.log("success eight")
  return "Invaild Input. Please input either Scissors, Paper, or Stone"
}
