// Exercise nr 3 i 4

const array = [1,2,3,4,5,6,7,8,9,10]

const generateRandomNumbers = ar => ar.map(item => Math.floor(Math.random() * 10))

const generateTenArraysOfNumbers = arr => {
    const generateTenArrays = arr.map((item,index,array) => {
        return array.map(item => Math.floor(Math.random() * 10))
    })
    return generateTenArrays
}

const tenMixedArrays = generateTenArraysOfNumbers(generateRandomNumbers(array))

console.log(tenMixedArrays);
