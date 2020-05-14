// Exercise nr 2 

const triangle = (a,b,c) => {
    if(typeof a != 'number' || typeof b != 'number' || typeof c != 'number') throw new Error('Arguments have to be a numbers');
    if(a < 0 || b < 0 || c < 0) throw new Error('All arguments have to be greater then 0');
    return a + b > c ? `Długość krótszych boków a i b jest większa od C co oznacze ze jest git` : `to nie jest trójkąt prostokątny`;
}

console.log(triangle(5,4,3));
