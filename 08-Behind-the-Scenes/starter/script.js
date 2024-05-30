'use strict';

var firstName = 'Matilda';

const josh = {
    firstName: 'Joshua',
    year: 2000, 
    calcAge: function() {
        console.log(2024 - this.year);

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMillenial(); // regular function call so this points to undefined
    },

    greet: () => {
        console.log(`Hey ${this}`)
        console.log(`Hey ${this.firstName}`)
    },
};

josh.greet();
josh.calcAge();

const addExpr = function (a,b) {
    console.log(arguments);
    return a + b;
}

addExpr(2,5);

var addArrow = (a,b) => a+b;