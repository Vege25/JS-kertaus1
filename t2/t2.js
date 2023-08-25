const point1x = prompt('give first x point');
const point1y = prompt('give first y point');
const point2x = prompt('give second x point');
const point2y = prompt('give second y point');

const calculation = Math.sqrt(
  (point2x - point1x) ** ((2 + (point2y - point1y)) ** 2)
);

document.getElementById('answer').innerHTML = `calculation: ${calculation}`;
