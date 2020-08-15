// Exercise nr 1

const validOrThrow = (condition, error) => {if(condition) throw new Error(error)};

const myAge = date => {
    const year = new Date().getFullYear();
    
    validOrThrow(typeof date !== 'number', 'Introduced argument must be a number')
    validOrThrow(date <= 0, 'introduced date cant be less then 0 or 0')
    validOrThrow(date > year, 'The date entered must not be greater than the current year')

    return year - date;
}

module.exports = myAge


// Wg mnie powinny jeszcze posiadać metodę:
// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie, 
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'First');
  });
  
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'Rejected value');
  });

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Last item')
})

const arrayWithPromises = [promise1, promise2, promise3];

const promiseLast = arrayOfPromise => new Promise((resolve, reject) => {
    arrayOfPromise.map(value => Promise.resolve(value)).map((promise, index, array) => {
        const [lastPromise] = array.slice(-1)
        lastPromise.then(result => resolve(result))
    })
})

const last = asd(arrayWithPromises)(arrayWithPromises)
last.then(item => console.log(item)).catch(error => console.log(`bład o nazwie ${error}`))


// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie, 
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane

// const promiseIgnoreErrors = (arrayOfPromise) => {
//     return new Promise((resolve, reject)=>{
//         // ...
//     })
// }

// https://github.com/Przemocny/localhost_academy/blob/master/4.%20Node/zadania/promiseMethods.js
// https://github.com/Przemocny/localhost_academy/blob/master/4.%20Node/zadania/autoTranslator.js