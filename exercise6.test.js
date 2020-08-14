const onlyEven = require('./exercise6');

describe('Funkcja onlyEven działa poprawnie', () => {

    // const oddArray = []
    // const evenArray = []
    const mixedArray = [2, 3, 6, 1, 2, 8, 10, 42, 41]
    const onlyEvenResults = [2, 4, 6, 2]

    test('Zwracająć wartość, która jest instancją klasy Array', () => {
        expect(onlyEven(mixedArray)).toBeInstanceOf(Array);
    })

    test('Zwracając tablice w której występuje tylko numery parzyste', () => {
        expect(onlyEven(mixedArray)).toEqual(onlyEvenResults);

        // expect(onlyEven([2, 4, 6, 1, 2, 3])).toEqual([2, 4, 6, 2]);
    })

    // test('Zwracając pustą tablice w przypadku gdy do funkcji wprowadzono tablice z nieparzystymi numerami', () => {
    //     expect(onlyEven([1, 3, 5, 7])).toEqual([]);
    // })

})

describe('Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu', () => {

    test('Gdy użytkownik wprowadził argument innego typu niż Array', () => {
        const incorrectInputs = ['', '123', {}, new Date, Date, Date.now()]
        incorrectInputs.forEach(input => {
            expect(() => {
                onlyEven(input)
            }).toThrow('Argument must be an array')
        })
    })

    test('Gdy użytkownik wprowadził pusty array jako argument', () => {
        expect(() => {
            onlyEven([])
        }).toThrow('Array cannot be empty')
    })

    test('Gdy użytkownik wprowadził argument typu Array z chociaż jednym elementem nie będącym typu number', () => {
        expect(() => {
            onlyEven([1, 2, 3, '4', [], 7, {}, 8, 9, 10])
        }).toThrow('Argument must be an array of integer')
    })

})