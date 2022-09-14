// create abstract class
function Vehicle(){
    // this.name = "Vehicle"
    throw new Error("abstract")
}
Vehicle.prototype.name
Vehicle.prototype.showName =  function (){
    throw new Error("method showName should be implemented")
}
Vehicle.prototype.color
Vehicle.prototype.showColor = function (){
    throw new Error("method showColor should be implemented")
}

// let veh = new Vehicle()
// implement method of abstract class
function Car(name, cl){
    this.name = name
    let color = cl
    this.showName = function(){
        console.log("name is ", this.name)
    }
    this.showColor = function(){
        console.log("color is", color)
    }
}

Car.prototype = Object.create(Vehicle.prototype)

let toyota = new Car("toyota", "red")
toyota.showName()
toyota.showColor()