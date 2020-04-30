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
    age: 22
}, {
    name: 'Marek',
    age: 27
}]

const filterWith = (array, filter) => {
    if(!filter.length) return array
    if(filter.length < 3) return 'Nothing to filter'
    let sum = '';
    for(const item of array) {
        sum += ` ${item[filter]}`
    }
    return sum
}

const keys = filterWith(arrayObj, 'name')
