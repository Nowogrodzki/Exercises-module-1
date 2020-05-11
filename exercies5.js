// Exercise nr 5

const arrayOfStrings = ['Kasia', 'Asia', 'Basia', 'Tomek','Maciek','Damian','Patryk','Jula','Wera','Bea', 'Jacek','Dusia','Mila','Tuja','Bela'];

const filterArray = str => {
    if(typeof str != 'string') throw new Error('Argument have to be a string, please enter correct value');
    return arrayOfStrings.filter(item => {
        if(item.toLowerCase().includes(str.toLowerCase())) return item
    })
}
