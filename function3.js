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

console.log(filterWith(arrayObj, 'kow'));

class AddressBook {
    constructor() {
        this.allContacts = [];
        this.listOfContactGrupe = [];
    }
    // Tworzyć kontakt w obrębie address book
    // walidacja na instacje instanceOf - add
    // crate ma przyjmować name, surname, email
    create (contact) {
        if(Object.keys(contact).length !== 0) {
            console.log(`New phone number has been added with ID - ${contact.id}`, contact);
            return this.allContacts.push(contact);
        } else {
            throw new Error('something went wrong, check your contact');
        }
    }

    // add() {
    //     if()
    // }


    readList () {
        return console.log(this.allContacts);
    }
    // updateById(uuid, updatedData) czy updatedData zawiera konkretne lub przynajmniej jeden
    // Operować na orginalny kontakt.
    // korzystać z metody update z single contant
    // znaleźć kontakt w allContact i uzyc update z single
    // walidacja ma ignorować uuid
    // jesli zmieniam dana klase, zmieniam ja w obrębie tej klasy
    update(filter, data, updatedData) {
        const item = this.allContacts.find(item => item.id === filter);
        for(const key in item) {
            if(key === data) {
                item[key] = updatedData;
            }
        }
        return item;
    }
    // return nie jest potrzebne.
    // zrobić za pomocna filter.
    delete(filter) {
        const item = this.allContacts.find(item => item.id === filter);
        const index = this.allContacts.indexOf(item);
        return this.allContacts.splice(index, 1);
    }


    sortData (filter) {}
}

class SingleContact {
    constructor(name,surname,email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.id
    }
    // zrobić metode read i metode update
    // pod id uzyć uuid
    // walidacja kontaktu
}

class ContactsGroupe {
    constructor() {
        this.contactList = []
    }

    createList(contact) {
        return this.contactList.push(contact);
    }

    readList () {
        console.log(this.contactList);
    }

    updateList(fraza, updateData) {
        return this.contactList.filter(item => {
            if(item.name.toLowerCase().includes(fraza.toLowerCase())) {
                item.name = updateData;
            }
            if(item.surname.toLowerCase().includes(fraza.toLowerCase())) {
                item.surname = updateData;
            }
            if(item.email.toLowerCase().includes(fraza.toLowerCase())) {
                item.email === updateData;
            }
        })
    }
}

const book = new PhoneBook();
const grupe = new ContactsGroupe();

const single = new SingleContact('Tomasz', "Nowak", "asd@asdd.pl")
const single1 = new SingleContact('Julek', "Kowalski", "asd@asdd.pl")
const single2 = new SingleContact('Kowal', "Wenek", "asd@asdd.pl")

book.create(single);
