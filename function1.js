// function exercise nr 1
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k', 'l','m','n','o','p','r','s','t','u','v','w','x','y','z','ź','ż'];

// tradycyjny for 
const forLoop = (array, callback) => {
    if(!array.length) return `Podana tablica nie posiada elementów ${array}`
    if(typeof callback !== 'function') return `Podany callback nie jest funkcja ${callback}`
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let statement = callback(array[i], i, array);
        newArray.push(statement)
    }
    return newArray;
}

// for of
const forOfLoop = (array) => {
    if(!array.length) return `Podana tablica nie posiada elementów ${array}`
    let newArray = []
    for(let element of array) {
        newArray.push(element * 2)
    }
    return newArray
}
const newAr = forOfLoop(ar);

// for in 
const forInLoop = array => {
    if(!array.length) return `Podana tablica nie posiada elementów ${array}`;
    let newArray = [];
    for(let elements in array) {
        newArray.push(array[elements])
    }
    return newArray;
}

module.exports = {
    forLoop,
    forOfLoop,
    forInLoop
}