function addNumbersY(x: number, y: number): number {
    return x + y;
}

addNumbersY(1, 2); // Returns 3
// addNumbersY(1);    // Returns an error


// Parametros opcionales
function addNumbersZ(x: number, y?: number): number {
    if (y === undefined){
        return x;
    }else{
        let total: number = x + y;
        return total;
    }
}

addNumbersZ(1, 2); // Returns 3
addNumbersZ(1);    // Returns 1


// Parametros predeterminados
function addNumbersA(x: number, y: number = 25): number {
    return x + y;
}

addNumbersA(1, 2);  // Returns 3
addNumbersA(1);     // Returns 26


// Parametros REST
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
}

addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5


// Parametros de objeto deconstruido
interface Message {
    text: string;
    sender: string;
}

function displayMessage({ text, sender }: Message) {
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' });