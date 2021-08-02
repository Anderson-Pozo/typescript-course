function getArray<T>(items : T[]) : T[] {
    return new Array().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                       // OK
// numberArray.push('This is not a number');   // Error tyoe

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');                // OK
// stringArray.push(30);                       // Error tyoe

console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


function identity1<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity1<number, string>(100, 'Hello!');
let returnString = identity1<string, string>('100', 'Hola!');
let returnBoolean = identity1<boolean, string>(true, 'Bonjour!');


returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
