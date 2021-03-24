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

let flight = 'LH234';
const brax = {
  name: 'Braxton McCellan',
  passport: 987654321
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  flight = flightNum; // changes flight to flightNum
  passenger.name = 'Mr.' + passenger.name;

  if(passenger.passport === 987654321) {
    alert('Checked In');
  } else {
    alert('Wrong passport!');
  }
}

// checkIn(flight, brax);
// console.log(flight, brax);

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(brax);
checkIn(flight, brax);
console.log(flight, brax);