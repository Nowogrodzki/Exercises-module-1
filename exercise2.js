// Exercise nr 2 
const validOrThrow = (condition, error) => {if(condition) throw new Error(error)};

const isRectangularTriangle = function (x1,x2,x3) {
    const arrayOfArguments = Array.from(arguments);

    validOrThrow(arrayOfArguments.length > 3, 'You can pass only three numbers');
    validOrThrow(arrayOfArguments.some(item => typeof item !== 'number'), 'Arguments have to be a numbers');
    validOrThrow(arrayOfArguments.some(item => item < 0), 'All arguments have to be greater then 0');

    const [a,b,c] = arrayOfArguments.sort((a,b) => a - b);
    return Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2);
}

module.exports = isRectangularTriangle;
