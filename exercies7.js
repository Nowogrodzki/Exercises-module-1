// Exercise nr 7 

// Filter 
const filterFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return 'callback is not a function';
    const newArr = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        const condition = callback(elements, i, array);
        if(condition) newArr.push(elements);
    }
    return newArr
}

// Map
const mapFN = (array, callback) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return ;
    const newAr = [];
    for(let i = 0; i < array.length; i++) {
        let elements = array[i];
        const ar = callback(elements, i, array);
        newAr.push(ar);
    }
    return newAr;
}

// Reduce
const reduceFN = (array, callback, initialValue = 0) => {
    if(!array.length) return 'array is empty';
    if(typeof callback != 'function') return 'callback is not a function';
    let accumulator = initialValue;
    for(element of array) accumulator = callback(accumulator,element);
    return accumulator
}
