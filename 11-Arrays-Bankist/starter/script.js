'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////

const displayMovements = (movements) => {
  movements.forEach((movement, i) => {
    containerMovements.innerHTML = '';

    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const user = 'Joshua De Chavez';

const calcPrintBalance = (movements) => {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
}

calcPrintBalance(account1.movements);

const calcDisplaySummary = (movements) => {
  const incomes = movements.filter(mov => mov > 0)
                            .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements.filter(mov => mov < 0)
                        .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements.filter(mov => mov > 0)
                            .map((mov) => mov * .012)
                            .filter(mov => mov >= 1)
                            .reduce((acc, mov) => acc + mov, 0);

  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements)

const createUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name.charAt(0))
    .join('');
  })

}

createUsernames(accounts);


// let login = false;

// btnLogin.addEventListener('click', () => {
//   const username = inputLoginUsername.value; // Get the input value
  
//   login = accounts.find(account => account.owner === username); // Check if any account matches the username
// });
// console.log(login);


/////////////////////////////////////////////////

// const eurToUsd = 1.1;

// const movementsUSD = account1.movements.map(current => current * eurToUsd);

// console.log(account1.movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of account1.movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDesc = account1.movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementDesc);
const movements = account1.movements;

const arr = [[1,2,3],[4,5,6],7,8]
console.log(arr.flat());

const arr2 = [[[1,2],3],[4,[5,6]],7,8]
console.log(arr2.flat());

const overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0 );

console.log(overallBalance);

// Ascending Order
movements.sort((a,b) => {
  if(a > b) 
    return 1;
  if(b > a)
    return -1;
});
console.log(movements);

// Descending Order
movements.sort((a,b) => {
  if(a > b) 
    return -1;
  if(b > a)
    return 1;
});
console.log(movements);

// Ascending Order
movements.sort((a,b) => a-b);

// Descending Order
movements.sort((a,b) => b-a);

const x = new Array(9);
console.log(x.map)