const filterWith = require('./function3');

describe('Funkcja działa poprawnie', () => {
    const testArray = [{
        first: 1,
    }, {
        second: '2'
    }, {
        third: 3
    }]

    const phrase = 'firs'
    const found = [{
        first: 1
    }]

    test('Zwracająć wartość, która jest instancją klasy Array', () => {
        expect(filterWith(testArray, phrase)).toBeInstanceOf(Array);
    })

    test('Zwracając tablice z obiektami, które są wynikami wyszukiwania po frazie', () => {
        expect(filterWith(testArray, phrase)).toEqual(found)
    })

    test('Gdy drugi argument wprowadzony przez użytkownika jest typu string, lecz jego długość wynosi miedzy 0 a 3 ', () => {
        expect(filterWith(testArray, 'as')).toEqual([])
    })

    test('Gdy drugi argument wprowadzony przez użytkownika jest pustym stringiem', () => {
        expect(filterWith(testArray, '')).toEqual(testArray)
    })

})


describe('Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu', () => {
    const arrayToTest = [{
        one: 1,
        two: '2'
    }]

    test('Gdy użytkownik wprowadził pierwszy argument innego typu niż Array', () => {
        const incorrectInputs = ['', {}, '41', 4, new Date, Date, null, undefined, false]

        incorrectInputs.forEach(input => {
            expect(() => {
                filterWith(input)
            }).toThrow('First argument have to be array')
        })
    })

    test('Gdy drugi argument wprowadzony przez użytkownika jest innego typu niż string', () => {
        const incorrectInputs = [{}, 4, new Date, Date, [],
            ['123'], true, null, undefined
        ];

        incorrectInputs.forEach(input => {
            expect(() => {
                filterWith(arrayToTest, input)
            }).toThrow('Sought phrase must be a string')
        })
    })

})