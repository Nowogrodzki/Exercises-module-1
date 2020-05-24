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

