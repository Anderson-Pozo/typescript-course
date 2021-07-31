// Puede usar interfaces para describir un objeto, 
// asignar nombres a los tipos del objeto y parametrizarlos, y 
// componer tipos de objetos con nombre existentes en otros nuevos.


interface Employee2 {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// Alias de tipo
type Employee3 = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// El único trabajo de una interfaz consiste en describir un tipo

let employee: Employee3 = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

// -------------------------------------------------------------------------
interface Ball {
    diameter: number;
}
interface Sphere {
    diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;