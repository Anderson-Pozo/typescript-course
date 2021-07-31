let addThreeNumbers = (x: number, y: number, z?: number): number => {
    if (z === undefined){
        return x +y;
    }else{
        return x + y + z;
    }
};


// ------------------------------------------------------
let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;
