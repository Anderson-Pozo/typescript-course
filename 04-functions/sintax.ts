// Funciones con nombres
function addNumbersX(x: number, y: number): number {
    return x + y;
}

addNumbersX(1, 2);

// funciones anonimas
let addNumbers2 = function (x: number, y: number): number {
    return x + y;
}

addNumbers2(1, 2);


let total = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

console.log(total([1, 2, 3]));

// Arrow functions

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
}

 // Arrow function
let addNumbers3 = (x: number, y: number): number => x + y;

