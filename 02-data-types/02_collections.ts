
// Tipos de colección
// Matrices
let list: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];


// Matriz con literal types
type options = string | number;
let list3: Array<options> = [1, 2, 'Anderson'];


let list4: Array<number | string > = [1, 2, 'Anderson'];

let list5: Array<any> = [1, 2, 'Anderson', true];

let list6: Array<string | object> = ['Anderson', {name: 'Anderson', age: 15}];


// Tupla
// a veces tiene una matriz que contiene valores de tipos mixtos. 
// Para ese propósito, TypeScript proporciona el tipo de tupla
// los elementos de la tupla array son fijos

let person1: [string, number] = ['Marcia', 35];
// let person2: [string, number] = ['Marcia', 35, true]; //* Error */
// La tupla person2 es una matriz que contiene exactamente un valor string y otro numeric.