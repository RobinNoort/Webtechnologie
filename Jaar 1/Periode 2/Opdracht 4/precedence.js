// Noteer eerst alle antwoorden in dit bestand! Test vervolgens in de browser.
// Wat zien we op elke regel in het console?

// ------------------------------------------------------------------------------------------------------------
console.log( 10 + 5 * 2 ); // Antwoord: 20
console.log( 5 * 2 + 10 ); // Antwoord: 20
console.log( (10 + 5) * 2 ); // Antwoord: 30

// ------------------------------------------------------------------------------------------------------------
const a = 5 - 2;
const b = 2 - 5;
console.log(a, b);  // Antwoord: 3, -3

// ------------------------------------------------------------------------------------------------------------
const c = !0 + 1 * 5;
const d = !(0 + 1) * 5;
console.log(c, d);  // Antwoord: 6, 0

// ------------------------------------------------------------------------------------------------------------
function echo(n) {
    return n;
}
console.log(3 + echo(7 - 3) * 5); // Antwoord: 23
console.log(3 + 7 - 3 * 5); // Antwoord: -5
console.log(3 + (7 - 3) * 5); // Antwoord: 23

// ------------------------------------------------------------------------------------------------------------
// De OR (||) operator geeft de eerste 'truthy'-value of de laatste als er geen 'truthy'-
// value is gevonden.
const e = 0;
const f = 1;
const g = 42;
const h = e || f || g;
console.log(h); // Antwoord: 1

// ------------------------------------------------------------------------------------------------------------
const i = 5 * 0 || 3;
const j = 5 * (0 || 3);
console.log(i); // Antwoord: 3
console.log(j); // Antwoord: 15

// ------------------------------------------------------------------------------------------------------------
// Assignment gaat van rechts naar links
let k = 40;
const l = k = 5;
console.log(k, l); // Antwoord: 5, 5

// ------------------------------------------------------------------------------------------------------------
let m = -1;
let n = (4 + 5 * 2) / 2 - 7 || 3 + --m;
console.log(n); // Antwoord: 1