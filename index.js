let store = { drivers: [], passengers: [], trips: [] };

let driverID = 0;
let passengerID = 0;
let tripID = 0;

class Driver {
  constructor(nameIn) {
    this.id = driverID++;
    this.name = nameIn;
    store["drivers"].push(this);
  }

  trips() {
    return store["trips"].filter(trip => {
      return trip.driverId === this.id;
    });
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(nameIn) {
      this.id = passengerID++;
      this.name = nameIn;
      store["passengers"].push(this);
  }

  trips() {
    return store["trips"].filter(trip => {
      return trip.passengerId === this.id;
    });
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driverIn, passengerIn) {
    this.id = tripID++;
    this.driverId = driverIn.id;
    this.passengerId = passengerIn.id;
    store["trips"].push(this);
  }

  passenger() {
    return store["passengers"].find(passenger => {
      return passenger.id === this.passengerId;
    });
  }

  driver() {
    return store["drivers"].find(driver => {
      return driver.id === this.driverId;
    });
  }
}
