# Rocket Academy Coding Basics: Scissors Paper Stone

Some of the learnings from working on the project.

## String Constants and Variables

Note: From reading the [reference solution].
In production code, it is good practice to assign string constants to variables. By convention, string constant variables are written entirely in upper case.

- Minimises chances of making spelling mistakes because the code editor can catch these mistakes before the program is run.
- Makes it easy to replace all the string constants by simply changing the value in the assignment if needed.

## Logic for Scissors Paper Stone

In the [Rock Paper Scissors] page on Wikipedia, one section described the logic of the game as isomorphic to modular arithmetic. This helped to simplify the writing of the game logic.

> The majority of such proposed generalizations are isomorphic to a simple game of modular arithmetic, where half the differences are wins for player one. For instance, Rock-Paper-Scissors-Spock-Lizard may be modeled as a game in which each player picks a number from one to five. Subtract the number chosen by player two from the number chosen by player one, and then take the remainder modulo 5 of the result. Player one is the victor if the difference is one or three, and player two is the victor if the difference is two or four. If the difference is zero, the game is a tie.

## JavaScript Modulo Operator

[[Original Forum Thread]]
In JavaScript, the `%` operator is not the modulo operator but the remainder operator. Resolved it by using one of the functions listed.

```javascript
function mod(n, m) {
  var remainder = n % m;
  return Math.floor(remainder >= 0 ? remainder : remainder + m);
}
```

## Radio Buttons, Form and Form Data for User Input

Implemented [radio buttons] for user input which removes the need for input validation and a user can select the game modes and shape to play instead of typing in text inputs. Worked with forms and [accessing form values].

```javascript
var formElements = document.forms["myform"].elements["inputTypeName"].value;
```

[reference solution]: https://github.com/rocketacademy/basics-scissors-paper-stone/blob/part1-inclMoreComfortable/script.js
[rock paper scissors]: https://en.wikipedia.org/wiki/Rock_paper_scissors#Game-theoretic_variations
[original forum thread]: https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
[radio buttons]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
[accessing form values]: https://stackoverflow.com/questions/18606305/accessing-formdata-values
