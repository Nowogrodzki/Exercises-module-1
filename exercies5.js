// Exercise nr 5

const arrayOfStrings = ['Kasia', 'Asia', 'Basia', 'Tomek','Maciek','Damian','Patryk','Jula','Wera','Bea', 'Jacek','Dusia','Mila','Tuja','Bela'];

const filterArray = str => {
    const filter = arrayOfStrings.indexOf(str)
    return arrayOfStrings.includes(str) ? `Fraza ${str} występuje w tablicy o indeksie ${filter}` : 'fraza nie wystepuje w tablicy'
}
