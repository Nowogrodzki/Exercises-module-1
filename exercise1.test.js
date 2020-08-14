const myAge = require('./exercise1');


describe('myAge handle good input', () => {
    test('my age returned correctly', () => {
        expect(myAge(1990)).toBe(30);
    })
})

describe('fn myAge handles correctly bad input', () => {
    describe('function pass only argument with type number', () => {
        const incorrectInputs = ['',[],{}, '2020',[0],-1, '41', new Date(), Date, Date.now()]
        test('Pass incorrect argument type invokes error', () => {
            incorrectInputs.forEach((input)=>{
                expect(myAge(input)).toThrow('Introduced argument must be a number');
            })
        })
    })
    'The date entered must not be greater than the current year'
    test('Big integer as a argument', () => {
        expect(myAge(12345))
    })

    test('Pass instanceof Date with method now as argument', () => {
        expect(myAge(Date.now()))
    })
    test('myAge function exist', () => {
        expect(myAge(2020)).toBeDefined();
    })
})