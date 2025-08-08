class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`${this.name} vehicle started`);
    }
 }


 class Car extends Vehicle {
    start() {
         console.log(`${this.name} car started`);

         super.start()
    }
 }

 const car = new Car("BMW");

 console.log(car.start());