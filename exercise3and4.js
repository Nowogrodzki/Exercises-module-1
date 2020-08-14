// Exercise nr 3 i 4
const validOrThrow = (condition, error) => {if(condition) throw new Error(error)};

const array = [1,2,3,4,5,6,7,8,9,10]

const generateTenArraysOfNumbers = arr => {

    validOrThrow(!(arr instanceof Array), 'Argument must be an array');
    validOrThrow(arr.length !== 10, 'Array must contain ten random numbers');
    validOrThrow(!arr.every(item => typeof item === 'number'), 'Argument must be an array of integer');

    return arr.map((item,index,array) => { return array.map(item => Math.floor(Math.random() * 10)) })
}

module.exports = generateTenArraysOfNumbers;