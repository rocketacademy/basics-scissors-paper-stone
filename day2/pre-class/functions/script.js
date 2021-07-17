var main = function (name) {
  var greetings = `Hello ${name}, welcome to the Basics Course!`;
  return greetings;
};

var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  output = `${distanceInKm} km is equal to ${distanceInMiles} miles.`;
  return output;
};

var convertKilosToPounds = function (kilos) {
  let pounds = kilos * 2.2;
  return `${kilos} kilograms is equal to ${pounds.toFixed(2)} pounds.`;
};

var doubleNumber = function (number) {
  doubled = number * 2;
  return `The number ${number} doubled is ${doubled}.`;
};

var calcCircleArea = function (radius) {
  var pi = 3.1415;
  var area = pi * radius ** 2;
  return `The area of the circle with radius ${radius} cm is ${area.toFixed(
    2
  )} square centimetres.`;
};

var calcOranges = function (guests) {
  var recipe = 4;
  var recipeVolume = 0.09;
  var oranges = recipe * guests;
  var totalVolume = recipeVolume * guests;
  return `${oranges} oranges are needed to produce ${totalVolume} litres of orange juice for ${guests} guests.`;
};

var calcHugs = function (hugDuration) {
  var populationSG = 5000000;
  var sleepEatTime = 9;
  var dailyHugHours = 24 - sleepEatTime;
  var years = (populationSG * hugDuration) / 3600 / 24 / 365;
  return `If you spend 9 hours for sleep and meals every day, it will take you ${years.toFixed(
    2
  )} years to hug all ${populationSG} people in Singapore for ${hugDuration} seconds.`;
};

var calcPaintCost = (paintCost) => {
  var doorWindowWidth = 0.9;
  var doorWindowHeight = 1.5;
  var doorWindowNum = 11;
  var roomNum = 6;
  const roomWidth = 3;
  const roomHeight = 1.5;
  const coatNum = 2;
  const coverage = 300;
  const paintArea =
    (roomWidth * roomHeight * 4 * roomNum -
      doorWindowHeight * doorWindowWidth * doorWindowNum) *
    coatNum;
  const totalCost = (paintArea / coverage) * paintCost;
  return `It will cost \$${totalCost.toFixed(2)} to paint the house.`;
};

const calcTrainSpeed = (delay) => {
  const train1Speed = 200;
  const timeTaken = 2;
  const distance = train1Speed * timeTaken;
  const train2Speed = distance / (timeTaken - delay / 60);
  return `Train 2 needs to travel at ${train2Speed.toFixed(
    2
  )} kph to arrive at Tokyo at the same time as Train 1.`;
};

const calcAngle = (minutes) => {
  const offset = 5;
  const angle = ((minutes - offset) % 60) * 6;
  return `The minutes hand is ${angle} degrees away from the hour hand.`;
};
