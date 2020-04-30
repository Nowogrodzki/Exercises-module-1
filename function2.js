// 2

const alphabet1 = ['a','b','c','d','e','f','g','h','i','j','k', 'l','m','n','o','p','r','s','t','u','v','w','x','y','z','ź','ż'];

const agregation = (arr) =>  {
    let ar = arr.reduce((accumulator, currentValue, index, array) => {
        accumulator.push([currentValue])
        return accumulator;
    }, [])
    console.log(ar);
}

console.log(agregation(alphabet1));

