// Exercise nr 7 

const validOrThrow = (condition, error) => {if(condition) throw new Error(error)};

// Filter 
const filterFN = (array, callback) => {

    if(!(array instanceof Array)) throw new Error('Argument must be an array');
    if(!array.length) throw new Error('Array cannot be empty');
    if(typeof callback !== 'function') throw new Error('Callback is not a function');

    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        const condition = callback(array[i], i, array);
        if(condition) newArr.push(condition);
    }
    
    if(!newArr.length) {
        return '0 results'
    } else {
        return newArr
    }
}

// Map
const mapFN = (array, callback) => {

    if(!(array instanceof Array)) throw new Error('Argument must be an array');
    if(!array.length) throw new Error('Array cannot be empty');
    if(typeof callback !== 'function') throw new Error('Callback is not a function');

    const newAr = [];

    for(let i = 0; i < array.length; i++) {
        const condition = callback(array[i], i, array);
        newAr.push(condition);
    }

    return newAr
}

// Reduce
const reduceFN = (array, callback, initialValue = 0) => {

    if(!(array instanceof Array)) throw new Error('Argument must be an array');
    if(!array.length) throw new Error('Array cannot be empty');
    if(typeof callback !== 'function') throw new Error('Callback is not a function');
    if([null, undefined, false,].includes(initialValue)) throw new Error('initial value cannot be null, undefined or false');

    let accumulator = initialValue;

    for(element of array) accumulator = callback(accumulator,element);

    return accumulator
}

module.exports = {
    filterFN,
    mapFN,
    reduceFN
}