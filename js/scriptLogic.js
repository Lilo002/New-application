/* const hamburger = 5;
const fries = 1;

if (hamburger && fries) {
    console.log('Я сыт!');
} else {
    console.log('Я голоден!');
}

console.log((hamburger && fries)); */

const hamburger = 3;
const fries = 1;
const cola = 1;

if (hamburger >= 3 && fries === 1 && cola === 1) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 0);
console.log(1 && 'fhgskj'); /* возвражается неправда, так как запинается, но если все верно, то последнее*/

/* и запинается на лжи, или запинается на правде */

const hamburger = 2;
const fries = 1;
const cola = 0;

if (hamburger >= 3 || fries === 1 || cola === 1) {
    console.log('Все сыты!');
} else {
    console.log('Мы уходим');
}