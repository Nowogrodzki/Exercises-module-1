// Exercise nr 1 

const year = new Date;
const myAge = date => {
    if(typeof date != "number") throw new Error('Argument is not a number, please enter correct value')
    return year.getFullYear() - date;
}

console.log(myAge());