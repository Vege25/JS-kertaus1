'use strict';

const score = prompt('Give your course score');

let grade;
if (score >= 0 && score <= 100) {
  if (score <= 39) {
    grade = 0;
  } else if (score >= 40 && score <= 51) {
    grade = 1;
  } else if (score >= 52 && score <= 63) {
    grade = 2;
  } else if (score >= 64 && score <= 75) {
    grade = 3;
  } else if (score >= 76 && score <= 87) {
    grade = 4;
  } else {
    grade = 5;
  }
} else {
  grade = 'Not valid score';
}

const grade2 = () => {
  if (score >= 0 || score <= 100) {
    if (score <= 39) {
      return 0;
    } else if (score >= 40 && score <= 51) {
      return 1;
    } else if (score >= 52 && score <= 63) {
      return 2;
    } else if (score >= 64 && score <= 75) {
      return 3;
    } else if (score >= 76 && score <= 87) {
      return 4;
    } else {
      return 5;
    }
  } else {
    return 'Not valid score';
  }
};

document.getElementById(
  'answer'
).innerHTML = `Your score is ${score} and that gives you a ${grade2()}`;
