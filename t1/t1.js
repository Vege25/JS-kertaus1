'use strict';

const degreesC = prompt('syötä C asteet');

const degreesF = (degreesC * 9) / 5 + 32;
const degreesK = degreesC + 273.15;

const answer = `${degreesC} astetta Celsiusta on ${degreesF} astetta Farenheittia ja ${degreesK} astetta Kelviniä`;

//tulostus
document.getElementById('target').innerHTML = answer;
