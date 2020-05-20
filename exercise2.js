// Exercise nr 2 

const isRectangularTriangle = function (x1,x2,x3) {
    const allArgumentsAreNumbers = Array.from(arguments).some(item => typeof item != 'number')
    const greateThenZero = Array.from(arguments).some(item => item < 0);
    const [a,b,c] = Array.from(arguments).sort((a,b) => a - b);
    if(allArgumentsAreNumbers) {
        throw new Error('Arguments have to be a numbers');
    }
    if(greateThenZero) {
        throw new Error('All arguments have to be greater then 0');
    }
    return Math.pow(a,2) + Math.pow(b,2) === Math.pow(c, 2) ? true : false
}
console.log(isRectangularTriangle(3,4,5));

