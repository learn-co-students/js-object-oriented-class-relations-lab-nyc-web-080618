let id = 0;
let store = {
  drivers: [],
  passengers: [],
  trips: []
}

class Driver {
  constructor(name) {
    this.id = ++id
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(trip => trip.driverId === this.id)
  }

  passengers() {
    return this.trips().map(trip => store.passengers.find(passenger => passenger.id === trip.passengerId))
  }
}

class Passenger {
  constructor(name) {
    this.id = ++id
    this.name = name
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(trip => trip.passengerId === this.id)
  }

  drivers(){
    return this.trips().map(trip => store.drivers.find(driver => driver.id === trip.driverId))
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++id
    this.driverId = driver.id
    this.passengerId = passenger.id
    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId)
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId)
  }
}
