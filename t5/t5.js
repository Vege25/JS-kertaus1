'use strict';

const posNumber = prompt('give a positive number');

let val = 0;
let calculationString = '';

for (let i = 1; i < parseInt(posNumber) + 1; i++) {
  val += i;
  if (i < parseInt(posNumber)) {
    calculationString += i + ' + ';
  } else {
    calculationString += i;
  }
}

document.getElementById(
  'answer'
).innerHTML = `Given number ${posNumber} Calculation ${calculationString} = ${val}`;
