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

// LECTURE NUMBER 5

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() { }
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
}

lufthansa.book(239, 'Brax McClellan');
lufthansa.book(666, 'Saint Luci');
console.log(lufthansa);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// book(23, 'Diana Player'); THIS DOESN'T WORK

// CALL METHOD
// using .call set the THIS keyword to new object
book.call(euroWings, 691, 'Diana Player');
console.log(euroWings);

book.call(lufthansa, 691, 'Shawn Player');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 999, 'Richard Long');
console.log(swiss);

// APPLY METHOD
const flightData = [583, 'Nana Dee'];
book.apply(swiss, flightData);
console.log(swiss);

// in modern javascript it is more common to use .call like this than .apply
book.call(swiss, ...flightData)
console.log(swiss);

// -----------------------------------------------------

// LECTURE NUMBER 6

// BIND METHOD
const bookEw = book.bind(euroWings);
const bookSwiss = book.bind(swiss);
const bookLH = book.bind(lufthansa);

bookEw(111, 'Steven Williams');
bookSwiss(123, 'Brax Mc')

console.log(euroWings);
console.log(swiss);

const bookEw23 = book.bind(euroWings, 23);
bookEw23('Nic Benns');
console.log(euroWings);

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++
  console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // using bind to set this keyword to lufthansa

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.10, 200));

const addVat = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVat(200));
console.log(addVat(23));

// Mini Challenge
// my solution using arrow functions
const addTaxs = rate => value => {
  return value + value * rate;
}
addTaxs(0.23)(100)

const addSetRate = addTaxs(0.23);
console.log(addSetRate(300))

// his solution using regular functions
const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(200));

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