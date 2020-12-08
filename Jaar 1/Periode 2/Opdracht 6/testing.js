// A
// for(var i=0; i <= 20; i++) {
//     console.log(i);
// }

// B
// for(var i=3; i <= 29; i++) {
//     if(i % 2) console.log(i);
// }

// C
// for(var i=12; i >= -14; i--) {
//     if(i % 2) {
//     } else {
//         console.log(i);
//     }
//
// }

// D
var start = new Date().getTime();

let resultaat = "Geen resultaat";
let getal = 3;
if(getal == 1) {
    resultaat = "een";
} else if(getal == 2) {
    resultaat = "twee";
} else if(getal == 3) {
    resultaat = "drie";
} else if(getal == 4) {
    resultaat = "vier";
} else if(getal == 5) {
    resultaat = "vijf";
} else {
    resultaat = "Geen resultaat";
}
// switch(getal) {
//     case 1:
//         resultaat = "een";
//         break;
//     case 2:
//         resultaat = "twee";
//         break;
//     case 3:
//         resultaat = "drie";
//         break;
//     case 4:
//         resultaat = "vier";
//         break;
//     case 5:
//         resultaat = "vijf";
//         break;
//     default:
//         resultaat = "Geen resultaat";
//         break;
// }

console.log(resultaat);

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);