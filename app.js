import { main } from "./script.js";

var buttons = document.querySelectorAll(".img-buttons");
var resultString = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    var input = e.target.title;
    // console.log(input);
    var res = main(input);

    //TODO: Add color formatting for results
    resultString = `Your choice : ${input}
    <br>
    Computer choice : ${res.comChoice}
    <br> 
    Result : ${res.result}
    <br>
    ${res.userName} Win-loss Record: ${res.userWins}/${res.tries}
    `;

    var output = document.querySelector("#output-div");
    output.innerHTML = resultString;
  });
});
