const a: Number = 5 - 2;
const b: Number = 2 - 5;
console.log(a,b);

// @ts-ignore
const c: Number = !0 + 1 * 5;
const d: Number = 2 - 5;
console.log(c, d);

function echo(n: number) {
    return n;
}

console.log(3 + echo(7 - 3) * 5);
console.log(3 + 7 - 3 * 5);
console.log(3 + (7 - 3) * 5);

const e: Number = 0;
const f: Number = 1;
const g: Number = 42;
const h: Number = e || f || g;
console.log(h);

const i: Number = 5 * 0 || 3;
const j: Number = 5 * (0 || 3);
console.log(i);
console.log(j);

let k: Number = 40;
const l: Number = k = 5;
console.log(k, l);

let m: Number = -1;
// @ts-ignore
let n: Number = (4 + 5 * 2) / 2 - 7 || 3 + --m;
console.log(n);
