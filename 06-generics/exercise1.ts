interface Identity<T, U> {
    value: T;
    message: U;
}

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}


let returnNumber2: Identity<number, string> = {
    value: 25,
    message: 'Hello'
}

let returnString2: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

function proccessIdentity<T, U>(value: T, message: U): T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = proccessIdentity;

let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

//--------------- Interface generica implementada con una clase
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentity<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor3 = new processIdentity<number, string>(100, 'hello dummie');
processor3.process();


class GenericClass<T, U>{
    private _value: T;
    private _message: U;

    constructor(value: T, message: U){
        this._value = value;
        this._message = message;
    }

    getIdentity(): T{
        console.log(this._message);
        return this._value;
    }
}

let processor4 = new GenericClass<number, string>(100, 'Hello again');
processor4.getIdentity();

