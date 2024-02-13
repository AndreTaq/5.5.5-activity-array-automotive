//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

//Create a derived class called Car that inherits from Vehicle and add the methods.
class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160; 
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        this.passengers += num;
    }
    start(){
        if(this.fuel > 0){
            console.log("engine started...!!!");
            this.started = true;
        } else {
            console.log("engine cannot start...!!!");
            this.started = false;
        }
    }
    ServiceDue(_mileage){
        if(this.mileage > 30000){
            console.log("Service is due");
            this.scheduleService = true;
        }
    }
}

let car = new Car("Mercury", "A28_Sedan", "2005", "red", 70000);
car.loadPassenger(4);
car.start();
car.ServiceDue(70001);

console.log(car);

//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
