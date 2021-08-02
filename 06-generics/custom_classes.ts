class Car3 {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar2 extends Car3 {
    make = 'Electric Car';
    doors = 4;
}
class Truck extends Car3 {
    make = 'My Super Truck';
    doors = 2
}


// type CustomTypeClass = Truck | ElectricCar2;


function accelerate<T extends Car3> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar2();
accelerate<ElectricCar2>(myElectricCar);

let mySuperTruck = new Truck();
accelerate<Truck>(mySuperTruck);
