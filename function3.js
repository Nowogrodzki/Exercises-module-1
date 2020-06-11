// function exercise nr 3

const arrayObj = [{
    name: 'Janek',
    age: 20
}, {
    name: 'Jacek',
    age: 55
},{
    name: 'Tomek',
    age: 35
},{
    name: 'Staszek',
    age: 22,
}, {
    name: 'Marek',
    age: 27,
    surname: 'Kowalski'
}]

const isIn = (filter, value) => value.toLowerCase().includes(filter.toLowerCase());

const filterWith = (array, filter) => {
    if(!filter.length) return array
    if(filter.length < 3) throw new Error('Nothing to filter')
    return array.filter(item => {
        for(let [key, value] of Object.entries(item)) {
            if(typeof value === 'string') {
                if(isIn(filter,value)) return item
            }
            if(isIn(filter,key)) return item
        }
    })
}
import {v4 as uuidv4} from 'uuid';

const checkContactParameters = (name, surname, email) => {
    if(typeof name !== 'string') throw new Error('name must be a string')
    if(name.length < 2) throw new Error('Name must be greater then 2')

    if(typeof surname !== 'string') throw new Error('Surname must be a string')
    if(surname.length < 2) throw new Error('Surname must be greater then 2')

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('something went wrong with email, please check your email address')
}

class AddressBook {
    constructor() {
        this.allContacts = [];
        this.listOfContactGrupe = [];
    }

    create(name,surname,email) {
        // checkContactParameters(name,surname,email)
        return new SingleContact({name,surname,email});
    }
          
    add(contact) {
        if(contact instanceof SingleContact) {
            console.log(`New phone number has been added with ID - ${contact.id}`, contact);
            return this.allContacts.push(contact);
        } else {
            throw new Error('please enter correct argument');
        }
    }
    
    readList () {
        return console.log(this.allContacts);
    }
    // updatedDate => dataToUpade, value
    // znaleźć pierwszy index (metoda find)
    // bezposrendnio na tablicy
    //
    updateById(id, key, updatedData) {
        if(key === 'id') throw new Error('id cannot be updated')
        const [contact] = this.allContacts.filter(item => item.id === id);
        return contact.update(key, updatedData);
    }
    // sprawdzic metode slice i splice(która modyfikuje referencje)
    deleteById(id) {
        const [item] = this.allContacts.filter(item => item.id === id);
        const index = this.allContacts.indexOf(item);
        this.allContacts.splice(index, 1);
    }


    sortData (filter) {}
}

class SingleContact {
    constructor(contactData) {
        if(!contactData.name || !contactData.surname || !contactData.email) {
            throw new Error('Data is missing one of the properties: name, surname, email');
        }

        checkContactParameters(contactData.name, contactData.surname, contactData.email);

        this.name = contactData.name;
        this.surname = contactData.surname;
        this.email = contactData.email;
        this.id = uuidv4();
    }

    update(key, updatedData) {
        for(const element in this) {
            if(key === 'id') throw new Error('Id cannot be updated!')

            if(element.toLowerCase() === key.toLowerCase()) {
                this[element] = updatedData;
            }
            checkContactParameters(this.name, this.surname, this.email)
        }
    }

    read() {
        console.log(this);
    }
}   

const contact = new SingleContact( { name: 'ss', surname: 'asd', email: 'com@andeer.pl' } )
const book = new AddressBook();
