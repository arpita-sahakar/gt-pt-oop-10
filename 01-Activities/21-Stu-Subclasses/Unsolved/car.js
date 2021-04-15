const Vehicle = require("./vehicle");

class Car extends Vehicle {
    constructor(color, passengers,id) {
      super(id, 4, "honk");
      this.color = color;
      this.passengers = passengers;
      
    }

    checkPassengers(){
        
    }

  
    
  }
  module.exports = Car;
  