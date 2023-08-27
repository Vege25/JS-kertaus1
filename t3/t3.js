'use strict';

const side1 = prompt('Give lenght of side 1');
const side2 = prompt('Give lenght of side 2');
const side3 = prompt('Give lenght of side 3');

let triangle;
if (side1 === side2 && side1 === side3) {
  triangle = 'equilateral';
} else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
  triangle = 'scalene';
} else {
  triangle = 'isosceles';
}

document.getElementById(
  'answer'
).innerText = `Based on given sides your triangle is ${triangle}`;
