
interface Vehicle {
    // make: string;
    // color: string;
    // doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car2 implements Vehicle {
    private _make: string;
    private _color: string;
    private _doors: number;
    private static numberOfCars: number;

    constructor(make: string, color: string, doors: number = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car2.numberOfCars++;
    }

    accelerate(speed: number): string {
        return `The car is accelerating to ${ speed } KM/h`;
    }

    brake(): string {
        return `The car is braking`;
    }

    turn(direction: 'left' | 'right'): string {
        return `The car is turning ${ direction }`;
    }

    
}