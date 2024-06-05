'use strict';

let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
}

g();
f();
console.dir(f);

h();
f();

console.dir(f);