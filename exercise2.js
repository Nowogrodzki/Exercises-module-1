// Exercise nr 2 

const triangle = (a,b,c) => {
    const allArgumentsAreNumbers = typeof a != 'number' || typeof b != 'number' || typeof c != 'number';
    const greateThenZero = a < 0 || b < 0 || c < 0
    if(allArgumentsAreNumbers) throw new Error('Arguments have to be a numbers');
    if(greateThenZero) throw new Error('All arguments have to be greater then 0');
    return a * a + b * b === c * c ? `Kwadrat najdłuższego boku jest równy sumie dwóch pozostałych boków co oznacza, że trójkąt jest prostokątny` : `to nie jest trójkąt prostokątny`;
}

console.log(triangle(3,4,5));
