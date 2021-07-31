
interface IceCream {
    flavor: string; // Obligatoria
    scoops: number;
    instructions?: string; // Opcional
    // readonly is_available: boolean; // Solo lectura
}

let iceCream: IceCream = {
    flavor: 'Vanilla',
    scoops: 2,
    instructions: ''
}

console.log(iceCream.flavor);

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 3, sauce: 'caramel' }));

// EXTEND INTERFACES
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

let myIceCream: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}