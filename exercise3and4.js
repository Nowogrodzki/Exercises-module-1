// Exercise nr 3 i 4

const array = [1,2,3,4,5,6,7,8,9,10]

const makeArray = ar => ar.map(item => Math.floor(Math.random(item) * 10))

const generate10Arrays = arr => {
    const tenArrays = arr.map((item,index,array) => {
        return array.map(item => Math.floor(Math.random(item) * 10))
    })
    return tenArrays
}

const tenMixedArrays = generate10Arrays(makeArray(array))
