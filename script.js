'use strict';

// LECTURE NUMBER 1

// const bookings = [];

// const createBooking = function(
//   flightNum,
//   numPassengers = 1, 
//   price = 199) {

//   // HOW DEFAULT VALUES WERE DONE IN ES5
//   // numPassengers = numPassengers || 1; // using short circuting
//   // price = price || 199;

//   const booking = {
//     flightNum, numPassengers, price
//   }

//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('LH123')
// createBooking('LH123', 2, 800)
// createBooking('LH123', 4)

// createBooking('LH123', undefined, 1000) // how to keep a default parameter

// -----------------------------------------------------

// // LECTURE NUMBER 2

// let flight = 'LH234';
// const brax = {
//   name: 'Braxton McCellan',
//   passport: 987654321
// }

// const checkIn = function(flightNum, passenger) {
//   flightNum = 'LH999';
//   flight = flightNum; // changes flight to flightNum
//   passenger.name = 'Mr.' + passenger.name;

//   if(passenger.passport === 987654321) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport!');
//   }
// }

// // checkIn(flight, brax);
// // console.log(flight, brax);

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(brax);
// checkIn(flight, brax);
// console.log(flight, brax);

// -----------------------------------------------------

// // LECTURE NUMBER 3

// // callback function
// const oneWord = function(str) {
//   return str.replace(/ /g, '').toLowerCase();
// }
// // callback function
// const upperFirstWord = function(str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// }

// // Higher-order function
// const transformer = function(str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by ${fn.name}`);
// }

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// // high5 is the callback function
// const high5 = function() {
//   console.log('hello');
// }

// // Add event listener is the higher order function
// document.body.addEventListener('click', high5)

// ['Brax', 'Diana', 'Shawn'].forEach(high5);

// -----------------------------------------------------

// LECTURE NUMBER 4

// Functions returning functions

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting}, ${name}`);
//   }
// }

// const greeterHello = greet('Hello');

// greeterHello('Brax');
// greeterHello('Diana');

// greet('Hello')('Shawn');

// re-writing in arrow function challenge

// // MY SOLUTION
// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting}, ${name}`);
//   }
// }

// const greeterHello = greet('Hi there');

// greeterHello('Brax');
// greet('Hey')('Diana')

// // HIS SOLUTION
// // one arrow function returning another
// const greet = (greeting) => (name) => {
//   console.log(`${greeting}, ${name}`);
// }

// greet('Hey there')('Dude')

// -----------------------------------------------------

// // LECTURE NUMBER 5

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() { }
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//   },
// }

// lufthansa.book(239, 'Brax McClellan');
// lufthansa.book(666, 'Saint Luci');
// console.log(lufthansa);

// const euroWings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// }

// const book = lufthansa.book;

// // book(23, 'Diana Player'); THIS DOESN'T WORK

// // CALL METHOD
// // using .call set the THIS keyword to new object
// book.call(euroWings, 691, 'Diana Player');
// console.log(euroWings);

// book.call(lufthansa, 691, 'Shawn Player');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// }

// book.call(swiss, 999, 'Richard Long');
// console.log(swiss);

// // APPLY METHOD
// const flightData = [583, 'Nana Dee'];
// book.apply(swiss, flightData);
// console.log(swiss);

// // in modern javascript it is more common to use .call like this than .apply
// book.call(swiss, ...flightData)
// console.log(swiss);

// -----------------------------------------------------

// // LECTURE NUMBER 6

// // BIND METHOD
// const bookEw = book.bind(euroWings);
// const bookSwiss = book.bind(swiss);
// const bookLH = book.bind(lufthansa);

// bookEw(111, 'Steven Williams');
// bookSwiss(123, 'Brax Mc')

// console.log(euroWings);
// console.log(swiss);

// const bookEw23 = book.bind(euroWings, 23);
// bookEw23('Nic Benns');
// console.log(euroWings);

// // With event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//   console.log(this);
//   this.planes++
//   console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // using bind to set this keyword to lufthansa

// // partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVat = addTax.bind(null, 0.23);
// // addVat = value => value + value * 0.23;
// console.log(addVat(200));
// console.log(addVat(23));

// // Mini Challenge
// // my solution using arrow functions
// const addTaxs = rate => value => {
//   return value + value * rate;
// }
// addTaxs(0.23)(100)

// const addSetRate = addTaxs(0.23);
// console.log(addSetRate(300))

// // his solution using regular functions
// const addTaxRate = function(rate) {
//   return function(value) {
//     return value + value * rate;
//   }
// }

// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(200));

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting}, ${name}`);
//   }
// }


// // HIS SOLUTION
// // one arrow function returning another
// const greet = (greeting) => (name) => {
//   console.log(`${greeting}, ${name}`);
// }

// -----------------------------------------------------

// // LECTURE NUMBER 7

// Coding Challenge 1

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)
  
//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   //this will generate [0, 0, 0, 0]
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`)
//     );

//     // Update answer
//     typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

//     this.displayResults()
//     this.displayResults('string')
//   },
//   displayResults(type = 'array') {
//     if(type === 'array') {
//       console.log(this.answers);
//     } else if(type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   }
// }

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// // Using different arrays
// // [5, 2, 3]
// // [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({answers: [5, 2, 3]});
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');

// -----------------------------------------------------

// // LECTURE NUMBER 8
// IIFE Immedietly Invoke Function Expressions

// THIS CAN BE CALLED MULTIPLE TIMES
// const runOnce = function() {
//   console.log('This will never run again');
// }
// runOnce();

// THIS IS IMMEDIATLY INVOKED IIFE
// function expression
// const isPublic = 24;
// (function() {
//   console.log('This will never run again');
//   const isPrivate = 23;
//   console.log(isPublic);
// })();

// // console.log(isPrivate);

// // arrow functions
// (() => console.log('This will also not run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(isPrivate);
// console.log(notPrivate);

// -----------------------------------------------------

// // LECTURE NUMBER 9

// Closures

// const secureBooking = function() {
//    let passengerCount = 0;

//    return function() {
//      passengerCount++;
//      console.log(`${passengerCount} passengers`);
//    }
// }

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker)

// -----------------------------------------------------

// // LECTURE NUMBER 10

// More closures examples

// EXAMPLE 1

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

// must call both functions, f is not a function until g is called
g(); // shows nothing in log
f(); // shows the correct answer in log
console.dir(f);

// f will be re-assigned to the h function since h is called before f;
h(); // shows nothing in log
f(); // shows the correct answer in log
console.dir(f);

// EXAMPLE 2

const boardPassengers = function(n, wait) {
  const perGroup = n / 3;

  setTimeout(function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000; // closure has priority over stack
boardPassengers(180, 3);