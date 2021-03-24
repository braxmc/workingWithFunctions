'use strict';

const bookings = [];

const createBooking = function(
  flightNum,
  numPassengers = 1, 
  price = 199) {

  // HOW DEFAULT VALUES WERE DONE IN ES5
  // numPassengers = numPassengers || 1; // using short circuting
  // price = price || 199;

  const booking = {
    flightNum, numPassengers, price
  }

  console.log(booking);
  bookings.push(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 4)

createBooking('LH123', undefined, 1000) // how to keep a default parameter