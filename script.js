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