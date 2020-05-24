// Exercise nr 7 

// Filter 
const filterFN = (array, callback) => {
    if(!array.length) throw new Error('array is empty');
    if(typeof callback != 'function') throw new Error('callback is not a function');
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        const condition = callback(array[i], i, array);
        if(condition) newArr.push(elements);
    }
    return newArr
}

// Map
const mapFN = (array, callback) => {
    if(!array.length) throw new Error('array is empty');
    if(typeof callback != 'function') throw new Error('Callback is not a function');
    const newAr = [];
    for(let i = 0; i < array.length; i++) {
        const ar = callback(array[i], i, array);
        newAr.push(ar);
    }
    return newAr;
}

// Reduce
const reduceFN = (array, callback, initialValue = 0) => {
    if(!array.length) throw new Error('array is empty');
    if(typeof callback != 'function') throw new Error('Callback is not a function');
    let accumulator = initialValue;
    for(element of array) accumulator = callback(accumulator,element);
    return accumulator
}
