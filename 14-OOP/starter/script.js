// // // // 'use strict';

// // // // // const Person = function (firstName, birthYear) {
// // // // //     this.firstName = firstName;
// // // // //     this.birthYear = birthYear;
// // // // // }

// // // // // const jonas = new Person('Jonas', 1991);
// // // // // // console.log(jonas);
// // // // // // console.log(jonas instanceof Person);

// // // // // // Prototypes
// // // // // console.log(Person.prototype);

// // // // // Person.prototype.calcAge = function() {
// // // // //     console.log(2024 - this.birthYear);
// // // // // }

// // // // // jonas.calcAge();

// // // // // console.log(jonas.__proto__);
// // // // // console.log(jonas.__proto__ === Person.prototype);

// // // // // console.log(Person.prototype.isPrototypeOf(jonas));
// // // // // console.log(Person.prototype.isPrototypeOf({Person}));

// // // // // Person.prototype.species = 'Homo sapiens';
// // // // // console.log(jonas.species);

// // // // // const arr = [1, 2, 2, 3, 3, 4]; // new Array === []
// // // // // console.log(arr.__proto__); // methods
// // // // // console.log(arr.__proto__.__proto__); // object
// // // // // console.log(arr.__proto__.__proto__.__proto__); // null

// // // // // Array.prototype.unique = function() {
// // // // //     return [...new Set(this)]
// // // // // };

// // // // // console.log(arr.unique());

// // // // const Car = function(make, speed) {
// // // //     this.make = make;
// // // //     this.speed = speed;
// // // // }

// // // // Car.prototype.accelerate = function () {
// // // //     this.speed += 10;
// // // //     console.log(`${this.make} has accelerated, current speed: ${this.speed}`);
// // // // }

// // // // Car.prototype.brake = function () {
// // // //     this.speed -= 5;
// // // //     console.log(`${this.make} has braked, current speed: ${this.speed}`);
// // // // }

// // // // const car1 = new Car('BWM', 120);
// // // // const car2 = new Car('Mercedes', 95);

// // // // car1.accelerate();
// // // // car1.accelerate();
// // // // car1.accelerate();
// // // // car1.accelerate();
// // // // car1.accelerate();
// // // // car1.brake();

// // // // car2.accelerate();
// // // // car2.accelerate();
// // // // car2.accelerate();
// // // // car2.accelerate();
// // // // car2.brake();


// // // // // class declaration
// // // // class Person {
// // // //     constructor(firstName, birthYear) {
// // // //         this.firstName = firstName;
// // // //         this.birthYear = birthYear;
// // // //     }

// // // //     calcAge() {
// // // //         console.log(2024 - this.birthYear);
// // // //     }

// // // //     greet() {
// // // //         console.log(`Hey ${this.firstName}`);
// // // //     }

// // // //     get age() {
// // // //         return 2024 - this.birthYear;
// // // //     }

// // // //     set age(newAge) {
// // // //         this.birthYear = 2024 - newAge;
// // // //     }

// // // //     static hey() {
// // // //         console.log('Hey there!');
// // // //     }
// // // // }

// // // // const josh = new Person('Joshua', 2000);
// // // // josh.age = 13;
// // // // // console.log(josh.birthYear);
// // // // // console.log(josh.age);
// // // // // console.log(josh);
// // // // // josh.calcAge();

// // // // // // Person.prototype.greet = function() {
// // // // // //     console.log(`Hey ${this.firstName}`);
// // // // // // }

// // // // // josh.greet();

// // // // const account = {
// // // //     owner: 'josh',
// // // //     movements: [200, 300, 120, 300],

// // // //     get latest() {
// // // //         return this.movements.slice(-1).pop();
// // // //     },

// // // //     set latest(mov) {
// // // //         this.movements.push(mov);
// // // //     }
// // // // }

// // // // // console.log(account.latest);
// // // // account.latest = 50;
// // // // // console.log(account.latest);

// // // // // Person.hey();

// // // // const PersonProto = {
// // // //     calcAge() {
// // // //         console.log(2024 - this.birthYear);
// // // //     },

// // // //     init(firstName, birthYear) {
// // // //         this.firstName = firstName;
// // // //         this.birthYear = birthYear;
// // // //     }
// // // // };

// // // // // empty object linked to PersonProto object
// // // // const steven = Object.create(PersonProto);
// // // // console.log(steven);
// // // // steven.name = 'steven';
// // // // steven.birthYear = 2000;
// // // // steven.calcAge();

// // // // const sarah = Object.create(PersonProto);
// // // // sarah.init('sarah', 1979);
// // // // sarah.calcAge();



// // // // Challenge 2
// // // class Car {
// // //     constructor(make, speed) {
// // //         this.make = make;
// // //         this.speed = speed;
// // //     }
    
// // //     accelerate() {
// // //         this.speed += 10;
// // //         console.log(`${this.make} has accelerated, current speed: ${this.speed}`);
// // //     }

// // //     brake () {
// // //         this.speed -= 5;
// // //         console.log(`${this.make} has braked, current speed: ${this.speed}`);
// // //     }

// // //     get speedUS() {
// // //         return this.speed / 1.6;
// // //     }

// // //     set speedUS(speed) {
// // //         this.speed = speed * 1.6;
// // //     }
// // // };



// // // const car1 = new Car('BWM', 120);
// // // const car2 = new Car('Mercedes', 95);

// // // car1.accelerate();
// // // car1.accelerate();
// // // car1.accelerate();
// // // car1.accelerate();
// // // car1.accelerate();
// // // car1.brake();
// // // console.log(car1.speedUS);
// // // car1.speedUS = 20;  // 20 * 1.6 = 32
// // // console.log(car1.speed); // 32
// // // console.log(car1.speedUS); // 32 / 1.6 = 20

// // // car2.accelerate();
// // // car2.accelerate();
// // // car2.accelerate();
// // // car2.accelerate();
// // // car2.brake();
// // // console.log(car2.speedUS);


// // // const Person = function (firstName, birthYear) {
// // //     this.firstName = firstName;
// // //     this.birthYear = birthYear;
// // // };

// // // Person.prototype.calcAge = function() {
// // //     console.log(2024 - this.birthYear);
// // // };

// // // const Student = function(firstName, birthYear, course) {
// // //     Person.call(this, firstName, birthYear);
// // //     this.course = course;
// // // }

// // // // Linking Prototypes
// // // Student.prototype = Object.create(Person.prototype);

// // // Student.prototype.introduce = function() {
// // //     console.log(`Hi my name is ${this.firstName} and I study ${this.course}`);
// // // }

// // // const mike = new Student('mike', 2000, 'computer science');
// // // console.log(mike)
// // // mike.introduce();
// // // mike.calcAge();

// // // console.log(mike.__proto__.__proto__);

// // // console.dir(Student.prototype.constructor);

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} has accelerated, current speed: ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} has braked, current speed: ${this.speed}`);
        return this;
    }
};

class EV extends Car {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} has accelerated, current speed: ${this.speed}, with a charge of ${this.#charge}`);
        return this;
    }
}

const rivian = new EV('Rivian', 120, 23)
console.log(rivian);
rivian.chargeBattery(90).brake().accelerate();