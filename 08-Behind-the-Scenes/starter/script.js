let lastName = 'De Chavez';
let oldLastName = lastName;

lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'jessica',
    lastName: 'De Chavez',
    age: 24,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica); // both have last name davis