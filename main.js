// create abstract class
function Vehicle(){
    // this.name = "Vehicle"
    throw new Error("abstract")
}
Vehicle.prototype.name
Vehicle.prototype.showName 
Vehicle.prototype.color
Vehicle.prototype.showColor

// let veh = new Vehicle()
// implement method of abstract class
function Car(name){
    this.name = name
    this.color
    this.showName = function(){
        console.log("name is ", this.name)
    }
    this.showColor = function(){
        console.log("color is", this.color)
    }
}

Car.prototype = Object.create(Vehicle.prototype)

let toyota = new Car("toyota")
toyota.showName()
toyota.color = "red"
toyota.showColor()