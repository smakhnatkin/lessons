function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

function Bus() {}

Car.prototype = {
  constructor: Bus
};

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Bus);
// expected output: false
