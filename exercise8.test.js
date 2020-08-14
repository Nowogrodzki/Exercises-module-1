const generateHuman = require('./exercies8');

describe('Funkcja generateHuman działa poprawnie', () => {
            const human = generateHuman();

            test('jeśli zwracany człowiek posiada imię i nazwisko i wiek', () => {
                expect(human).toHaveProperty('name')
                expect(typeof human.name).toBe('string')

                expect(human).toHaveProperty('surname')
                expect(typeof human.surname).toBe('string')

                expect(human).toHaveProperty('age')
                expect(typeof human.age).toBe('number')

            })
            test('jeśli zwracany człowiek posiada uuid', () => {})



            test('jeśli zwracany człowiek posiada email', () => {})
            test('jeśli zwracany człowiek posiada numer telefonu', () => {})
            test('jeśli zwracany człowiek posiada kraj pochodzenia', () => {})


            // test('Zwracając obiekt, który posiada ustalone klucze', () => {

            //     expect(human).toHaveProperty('email')
            //     expect(human).toHaveProperty('country')
            //     expect(human).toHaveProperty('phoneNr')
            //     expect(human).toHaveProperty('id')
            // })

            // test('Zwracająć obiekt, którego wartości są ustalonego typu', () => {

            //     expect(typeof human.email).toBe('string')
            //     expect(typeof human.country).toBe('string')
            //     expect(typeof human.phoneNr).toBe('string') && len == 9
            //     expect(typeof human.id).toBe('number')
            // })