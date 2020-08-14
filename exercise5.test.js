const filterWithPhrase = require('./exercise5');
// array i string jako arg 

describe('Funkcja działa poprawnie', () => {

    test('Zwracająć wartość, która jest instancją klasy Array', () => {
        expect(filterWithPhrase(['Asia'], 'asia')).toBeInstanceOf(Array)
    })

    test('Zwracając tablice z elementami, w których znajduję się fraza podana przez użytkownika', () => {
        expect(filterWithPhrase(['Bea'], 'bea')).toEqual(['Bea'])
    })

    test('Zwracając pusta tablice w przypadku gdy fraza nie występuje w żadnym elemencie', () => {
        expect(filterWithPhrase('v')).toEqual([])
    })

})

describe('Funkcja "nie działa" poprawnie, prezentując odpowiedni komunikat błędu', () => {

    test('Gdy użytkownik wprowadził argument innego typu niż Array', () => {
        const incorrectInputs = [{}, 4, [], Date, new Date, ]
        incorrectInputs.forEach(input => {
            expect(() => {
                filterWithPhrase(input)
            }).toThrow('Argument have to be a string')
        })
    })

    test('Gdy użytkownik wproawdzi argument, który jest pustym stringiem', () => {
        expect(() => {
            filterWithPhrase('')
        }).toThrow('Phrase cant be a empty stirng')
    })

})