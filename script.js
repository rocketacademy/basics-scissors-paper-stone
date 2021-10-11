var main = function (input) {
  var myOutputValue = 'hello world';
  return myOutputValue;
};

const button = document.querySelector("#submit-button");
button.addEventListener("click", function () {
  displayResults(main());
});

function displayResults(result) {
  let outputElement = document.querySelector("#output-div");
  outputElement.innerHTML = result;
}