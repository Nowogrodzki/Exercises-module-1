// Exercise nr 8

import { v4 as uuidv4 } from 'uuid';

const generateHuman = (name,surname,age,country) => {
    const person = {
        name: name,
        surname: surname,
        email: `${name}.${surname}@email.com`,
        age: age,
        country: country,
        phoneNr: 214443212,
        id: uuidv4()
    }
    return person
}

console.log(generateHuman('Maciek', 'Nowogrodzki', 23, 'PL'));
