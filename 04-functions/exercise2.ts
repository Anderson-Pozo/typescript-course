
// tipos de funciones con type
type calculator = (x: number, y: number) => number;

// con interface
interface CalculatorI {
    (x: number, y: number): number
}

let addNumbers4: CalculatorI = (x: number, y: number): number => x + y;
let subtractNumbers: CalculatorI = (x: number, y: number): number => x - y;


console.log(addNumbers4(1, 2));
console.log(subtractNumbers(1, 2));



// ------------------------------------------------
let doCalculation = (operation: 'add' | 'subtract'): CalculatorI => {
    if (operation === 'add') {
        return addNumbers4;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('subtract')(150, 15));


let sumNumbers1: CalculatorI = (x: number, y: number): number => x + y;
let sumNumbers2: CalculatorI = (number1: number, number2: number): number => number1 + number2;
// TypeScript infiere los tipos de los parametros y retorno gracias a la 
// implementacion de la interfaz
let sumNumbers3: CalculatorI = (num1, num2) => num1 + num2;