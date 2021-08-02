
class Car {
    // Properties
    private static numberOfCars: number = 0;  // New static property
    private _make: string;
    private _color: string;
    private _doors: number;

    // Constructor
    constructor(make: string, color: string, doors: number = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }

    // Accessors
    get make() {
        return this._make
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return `The color of the car is ${this._color}`;
    }

    set color(color) {
        this._color = color;
    }

    get doors() {
        return this._doors;
    }

    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    public static getNumberOfCars(): number{
        return Car.numberOfCars;
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    // protected permite tener acceso al método con las subclases
    protected worker(): string {
        return this._make;
    }

}


const myCar1 = new Car('Corsa', 'red', 4);
console.log(myCar1.color);
// console.log(myCar1._color);
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));

const myCar2 = new Car('Galaxy Motors', 'red', 4);
// myCar2._doors = 5;

const myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value


console.log('Number of cars', Car.getNumberOfCars());


// -------------------------HERENCIA--------------------

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;

    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    // Accessors
    get range(){
        return this._range;
    }

    set range(range){
        this._range = range;
    }

    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }

    // Overrides the brake method of the Car class
    brake(): string {
        return this.worker() + ' is braking with the regenerative braking system.'
    }

}

const spark = new ElectricCar('Spark Motors','silver', 124, 2);
const eCar = new ElectricCar('Electric Car Co.', 'black', 263);

console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(eCar.brake());