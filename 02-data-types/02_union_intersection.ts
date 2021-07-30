// Union
// Un tipo de unión describe un valor que puede ser uno de entre varios tipos

let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid
// multiType = "twenty";   //* Invalid

// Example

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
// console.log(add('one', 2));      //* Returns error

// Intersection
// combina dos o más tipos para crear uno que tiene todas las propiedades de los tipos existentes

interface Employee {
    employeeID: number;
    age: number;
}

interface Manager {
    stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};

console.log(newManager.employeeID);


// Tipos Literales
// Los tipos literales se escriben como objetos, matrices, 
// funciones o literales de tipo constructor, y se usan para crear tipos a partir de otros.

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
// myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid
