// Exercise nr 8

import { v4 as uuidv4 } from 'uuid';

const generateHuman = () => {
    const randomName = ['Tomek', 'Janek', 'Jakub', 'Józef', 'Marcin','Zbyszek'];
    const randomSurname = ['Kawka', 'Nowak', 'Kowalski', 'Norek', 'Holak', 'Nowicki'];
    const randomAge = [23,44,19,43,58,72,41,32];
    const randomCountry = ['Poland', 'Norway', 'Germany', 'USA', 'Russia', 'Ukraine', 'Finland'];
    const person = {
        name: randomName[Math.floor(Math.random() * randomName.length)],
        surname: randomSurname[Math.floor(Math.random() * randomName.length)],
        email: `${randomName[Math.floor(Math.random() * randomName.length)]}.${randomSurname[Math.floor(Math.random() * randomName.length)]}@email.com`,
        age: randomAge[Math.floor(Math.random() * randomName.length)],
        country: randomCountry[Math.floor(Math.random() * randomName.length)],
        phoneNr: 214443212,
        id: uuidv4()
    }
    return person
}

console.log(generateHuman());
