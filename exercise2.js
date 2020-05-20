// Exercise nr 2 

const isRectangularTriangle = function (x1,x2,x3) {
    const arrayOfArguments = Array.from(arguments);
    const areAllArgumentsAreNumbers = arrayOfArguments.some(item => typeof item !== 'number')
    if(areAllArgumentsAreNumbers) {
        throw new Error('Arguments have to be a numbers');
    }
    const areAllGreaterThenZero = arrayOfArguments.some(item => item < 0);
    if(areAllGreaterThenZero) {
        throw new Error('All arguments have to be greater then 0');
    }
    const [a,b,c] = arrayOfArguments.sort((a,b) => a - b);
    return Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2);
}
console.log(isRectangularTriangle(3,4,5));

