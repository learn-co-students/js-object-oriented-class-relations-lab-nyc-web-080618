//A driver has many trips, and has many passengers through trips

let store = {drivers: [], passengers: [], trips: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = driverId++;
    store.drivers.push(this);

  }

//returns all of the trips that a driver has taken
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    })
  }

// passengers() - returns all of the passengers that a driver has taken on a trip
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger()
    })
  }


} //end of driver class

//a passenger has many trips, has many drivers through trips

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    })
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }

}//end of Passenger class

//A trip belongs to a driver and belongs to a passenger.
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }

  //returns the driver associated with the trip
  driver() {
    return store.drivers.find(driver => {
      return driver.id == this.driverId;
    })
  }

  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id == this.passengerId;
    })
  }



}// end of class trip




//A trip belongs to a driver and belongs to a passenger.
