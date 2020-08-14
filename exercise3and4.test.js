const generateTenArraysOfNumbers = require('./exercise3and4');

describe('Funkcja generateTenArraysOfNumbers działa poprawnie', () => {

    test('Zwracająć wartość, która jest instancją klasy Array o długości równej dziesięć', () => {
        const placeholder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(generateTenArraysOfNumbers(placeholder)).toBeInstanceOf(Array)
        expect(generateTenArraysOfNumbers(placeholder)).toHaveLength(10)
    })

})

describe('Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu', () => {

    test('Gdy użytkownik wprowadził argument innego typu niż Array', () => {
        const incorrectInputs = ['', {}, '41', 4]
        incorrectInputs.forEach(input => {
            expect(() => {
                generateTenArraysOfNumbers(input)
            }).toThrow('Argument must be an array')
        })
    })

    test('Gdy użytkownik wprowadził argument typu Array o długości krótszej niż dziesięć', () => {
        expect(() => {
            generateTenArraysOfNumbers([1, 2, 3, 4, 5, 6, 7])
        }).toThrow('Array must contain ten numbers')
    })

    test('Gdy użytkownik wprowadził argument typu Array z chociaż jednym elementem nie będącym typu number', () => {
        expect(() => {
            generateTenArraysOfNumbers([1, 2, 3, '4', [], 7, {}, 8, 9, 10])
        }).toThrow('Argument must be an array of integer')
    })

})