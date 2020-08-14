// Exercise nr 6 

const mixedArray = [2, 5, 7, 10, 34, 16, 879, 1]

const validOrThrow = (condition, error) => {
    if (condition) throw new Error(error)
};

const onlyEven = array => {

    validOrThrow(!(array instanceof Array), 'Argument must be an array');
    validOrThrow(!array.length, 'Array cannot be empty');
    validOrThrow(!array.every(item => typeof item === 'number'), 'Argument must be an array of integer');

    return array.filter(item => item % 2 === 0)

}

module.exports = onlyEven;