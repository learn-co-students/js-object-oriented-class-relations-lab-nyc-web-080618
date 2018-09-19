let store = { drivers: [],passengers: [],trips:[]};
let driver_id = 0
let user_id = 0
let trip_id = 0

class Driver {
  constructor(name){
    this.name = name
    this.id = ++driver_id

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    )
  }

  passengers(){
    return this.trips().map(
      function(trip){
        return trip.passenger()
      }.bind(this)
    )
  }





}

class Passenger {
  constructor(name){
    this.name = name
    this.id = ++user_id
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this)
    )
  }

  drivers(){
    return this.trips().map(
      function(trip){
        return trip.driver();
      }.bind(this)
    )
  }



}

class Trip {
  constructor(driver,passenger){
    this.id = ++trip_id;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this)
  }


  driver() {
  return store.drivers.find(driver => {
    return driver.id === this.driverId;
  });
}
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })

}



}
