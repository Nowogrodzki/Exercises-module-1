// Exercise nr 3 i 4

const makeArray = () => {
    const arrayOfNumbers = []
    for(let i = 0; i < 10; i++) {
        const random  = Math.floor(Math.random() * 11)
        arrayOfNumbers.push(random)
    }
    return arrayOfNumbers
}
const generateArray = makeArray()

const generate10Arrays = arr => {
    const tenArrays = []
    for(let i = 0; i < 10; i++) tenArrays.push(arr)
    return tenArrays
}
