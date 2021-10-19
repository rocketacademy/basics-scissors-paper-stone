// app.js contains fe button logic
var buttons = document.querySelectorAll(".img-buttons");
var rock = document.querySelector("#rock-button");
var paper = document.querySelector("#paper-button");
var scissors = document.querySelector("#scissors-button");
var resultString = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    var input = e.target.title;
    console.log(input);
    var res = main(input);
    var result = res.result;
    var comChoice = res.comChoice;
    //TODO: Add color formatting for results
    resultString = `Your choice : ${input}
    <br>
    Computer choice : ${comChoice}
    <br> 
    Result : ${result}`;

    var output = document.querySelector("#output-div");
    output.innerHTML = resultString;
  });
});
