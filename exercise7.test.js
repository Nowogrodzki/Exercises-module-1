const filterFN = require('./exercise7').filterFN
const mapF = require('./exercise7').mapFN
const reduceF = require('./exercise7').reduceFN

// zapytać o Date jako callback
// zapytać co w przypadku gdy reduce dostaje tablice z samymi zerami




// kiedy funkcja filterFN działa poprawnie ?
// - kiedy działa tak samo jak .filter

// kiedy funkcja filterFN nie działa poprawnie ?
// - kiedy reaguje tak samo na błędy jak i .filter





















describe('Funkcje działają poprawnie', () => {

    test('Gdy funkcja filterFN zwraca wartość będącą instancją klasy Array', () => {
        expect(filterF([12, 2, 4], a => a > 1)).toBeInstanceOf(Array)
    })
    test('Gdy funkcja mapFN zwraca wartość będącą instancją klasy Array', () => {
        expect(mapF([12, 2, 4], a => a ** 2)).toBeInstanceOf(Array)
    })
    test('Gdy funkcja ReduceFN zwraca wartość, która nie jest falsy', () => {
        expect(reduceF([5, 10, 15, 20, 25], (a, b) => a + b)).not.toBeFalsy()
    })

    describe('Wykonująć prawidłowo callback', () => {

        test('Funkcji FilterFN, który ma za zadanie sprawdzić czy liczby w arrayu są większe od 1', () => {
            expect(filterF([12, 2, 4], a => a > 1)).toEqual([true, true, true])
        })
        test('Funkcji mapFN, który ma za zadanie dodać do każdej liczby w arrayu liczbe 2 ', () => {
            expect(mapF([12, 2, 4], a => a + 2)).toEqual([14, 4, 6])
        })

        test('Funkcji reduceFN, który ma za zadanie dodać do siebie wszystkie liczby znajdujące się w podanym arrayu', () => {
            expect(reduceF([1, 3, 5, 7, 9], (a, b) => a + b)).toBe(25)
        })
    })

})

describe('Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu', () => {

    test('Gdy użytkownik wprowadził pierwszy argument innego typu niż Array', () => {
        const incorrectInputs = ['', '123', {}, new Date, Date, Date.now(), 1]
        incorrectInputs.forEach(input => {
            expect(() => {
                filterF(input)
            }).toThrow('Argument must be an array')

            expect(() => {
                mapF(input)
            }).toThrow('Argument must be an array')

            expect(() => {
                reduceF(input)
            }).toThrow('Argument must be an array')
        })
    })

    test('Gdy użytkownik wprowadził pusty array jako argument', () => {
        expect(() => {
            filterF([])
        }).toThrow('Array cannot be empty')

        expect(() => {
            mapF([])
        }).toThrow('Array cannot be empty')

        expect(() => {
            reduceF([])
        }).toThrow('Array cannot be empty')
    })

    test('Gdy drugi argument wprowadzony przez użytkownika nie jest typu function', () => {
        const incorrectInputs = ['', '123', {}, new Date, Date.now(), 1, []]
        const arr = [1, 2, 3, 4]
        incorrectInputs.forEach(input => {
            expect(() => {
                filterF(arr, input)
            }).toThrow('Callback is not a function')

            expect(() => {
                mapF(arr, input)
            }).toThrow('Callback is not a function')

            expect(() => {
                reduceF(arr, input)
            }).toThrow('Callback is not a function')
        })
    })

})