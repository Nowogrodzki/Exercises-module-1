// Exercise nr 5
const validOrThrow = (condition, error) => {
    if (condition) throw new Error(error)
};

const arrayOfStrings = ['Kasia', 'Asia', 'Basia', 'Tomek', 'Maciek', 'Damian', 'Patryk', 'Jula', 'Wera', 'Bea', 'Jacek', 'Dusia', 'Mila', 'Tuja', 'Bela'];

const filterWithPhrase = phrase => {

    validOrThrow(typeof phrase !== 'string', 'Argument have to be a string')
    validOrThrow(!phrase.length, 'Phrase cant be a empty stirng')

    return arrayOfStrings.filter(item => {
        if (item.toLowerCase().includes(phrase.toLowerCase())) return item
    })

}

console.log(filterWithPhrase('1121'));

module.exports = filterWithPhrase;