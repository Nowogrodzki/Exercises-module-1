// Exercise nr 2 

const triangle = function (a,b,c) {
    const allArgumentsAreNumbers = typeof a != 'number' || typeof b != 'number' || typeof c != 'number';
    const greateThenZero = a < 0 || b < 0 || c < 0
    arguments = Array.from(arguments).sort((a,b) => a - b);
    if(allArgumentsAreNumbers) {
        throw new Error('Arguments have to be a numbers');
    }
    if(greateThenZero) {
        throw new Error('All arguments have to be greater then 0');
    }
    return Math.pow(arguments[0],2) + Math.pow(arguments[1],2) === Math.pow(arguments[2], 2) ? 
    `Kwadrat najdłuższego boku jest równy sumie dwóch pozostałych boków co oznacza, że trójkąt jest prostokątny` 
    : `to nie jest trójkąt prostokątny`;
}
console.log(triangle(5,4,3));
