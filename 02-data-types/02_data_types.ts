
// Datos primitivos
// number, string, boolean, bigint, void, null y undefined
// const age: number = 10;

const message: string = `Hello I´m ${ age.toString() }`;

const is_older: boolean = true;

console.log(message);

// Enum
// Las enumeraciones permiten especificar una lista de opciones disponibles
// Supongamos que tiene un campo en una base de datos externa 
// denominada ContractStatus, que contiene los números 1, 2 o 3, 
// que representan los siguientes estados de contacto: Permanent, Temp y Apprentice

enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}


let employeeStatus: ContractStatus = ContractStatus.Apprentice;
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus]);

// any 
// es un tipo que puede representar cualquier valor de JavaScript sin restricciones
let randomValue: any = 15;
randomValue = 'Juan';
randomValue = false;

// console.log(randomValue.name); // Error

// unknown
// Aunque es flexible, el tipo any puede producir errores 
// inesperados. Para solucionar esto, TypeScript ha presentado el tipo unknown.
// no se puede acceder a las propiedades de un tipo unknown; tampoco se pueden llamar ni construir.

let randomValue2: unknown = 15;
randomValue2 = 'Juan';
randomValue2 = false;

console.log(randomValue.name); // Error

// La diferencia principal entre any y unknown es que 
// no puede interactuar con una variable de tipo unknown; 
// si lo hace, se genera un error del compilador. any omite las 
// comprobaciones en tiempo de compilación y el objeto se evalúa en 
// tiempo de ejecución. Si el método o la propiedad existen, se 
// comportará según lo esperado.

// ASERCIÓN DE TIPOS
// Si necesita tratar una variable como un tipo de datos diferente, puede usar una aserción de tipos.
let randomValue3: unknown = 10;

randomValue3 = true;
randomValue3 = 'Mateo';

if (typeof randomValue3 === "string") {
    console.log((randomValue3 as string).toUpperCase());    //* Returns MATEO to the console.
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
}