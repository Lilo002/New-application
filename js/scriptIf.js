"use strict";

if (4 == 9){
    console.log('OK');
} else{
    console.log('Not OK');
}

/* const num = 50;

if (num < 49) {
    console.log('Мало');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('в самый раз');
}
 */
/* (num == 50) ? console.log('в самый раз'): console.log('Мало'); */

const num = 53;
switch (num) { /* что сравнивать */
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50: /* условие */
        console.log('Верно'); /* что делать , если оно выполнено */
        break;
    default:
        console.log('не в этот раз');
        break;  /* обязательно прерывать или будет все по очереди выполняться */
}
