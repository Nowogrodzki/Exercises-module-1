// Exercise nr 8

import { v4 as uuidv4 } from 'uuid';

const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

const generateHuman = () => {
    const randomName = ['Tomek', 'Janek', 'Jakub', 'Józef', 'Marcin','Zbyszek'];
    const randomSurname = ['Kawka', 'Nowak', 'Kowalski', 'Norek', 'Holak', 'Nowicki'];
    const randomAge = [23,44,19,43,58,72,41,32];
    const randomCountry = ['Poland', 'Norway', 'Germany', 'USA', 'Russia', 'Ukraine', 'Finland'];
    const randomEmail = ['gmail.com', 'wp.pl', 'o2.pl', 'yahoo.com', 'interia.eu'];
    const person = {
        name: randomName[getRandomIndex(randomName)],
        surname: randomSurname[getRandomIndex(randomSurname)],
        email: `${randomName[getRandomIndex(randomName)]}.${randomSurname[getRandomIndex(randomSurname)]}@${randomEmail[getRandomIndex(randomEmail)]}`,
        age: randomAge[getRandomIndex(randomAge)],
        country: randomCountry[getRandomIndex(randomCountry)],
        phoneNr: `+48 ${parseInt(Math.random()*1000000000)}`,
        id: uuidv4()
    }
    return person
}

console.log(generateHuman());
