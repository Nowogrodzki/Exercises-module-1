const isRectangularTriangle = require('./exercise2');

describe('Funckja działa poprawnie', () => {

    test('Zwracając true w przypadku gdy z boków można zbudować trójkąt prostokątny', () => {
        expect(isRectangularTriangle(3, 4, 5)).toEqual(true)
    })

    test('Zwracając false w przypadku gdy z boku nie można zbudować trójkąta prostokątnego', () => {
        expect(isRectangularTriangle(1, 2, 5)).toEqual(false)
    })

})
// Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu
describe('isRectangularTriangle function throws correct errors', () => {
    // gdy uzytkownik wprowadzil argument innego typu niz numer
    test('When user passes wrong type of argument', () => {
        const incorrectInputs = ['', [], {}, , [0], '41', new Date(), Date]
        incorrectInputs.forEach(input => {
            expect(() => {
                isRectangularTriangle(input, 3, 5)
            }).toThrow('Arguments have to be a numbers')
        })
    })
    // gdy uzytkownik wprowadzil więcej niż trzy argumenty
    test('Case when user pass more arguments then function require', () => {
        expect(() => {
            isRectangularTriangle(3, 3, 5, 10, 11, 4)
        }).toThrow('You can pass only three numbers')
    })
    // gdy uzytkownik wprowadzil przynajmniej jeden argument, który jest liczba mniejszą od zera
    test('Case when user pass argument as negative number', () => {
        expect(() => {
            isRectangularTriangle(3, -2, 5)
        }).toThrow('All arguments have to be greater then 0');
    })

})