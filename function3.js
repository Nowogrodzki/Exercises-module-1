const arrayObj = [{
    name: "Janek",
    age: 20,
  },
  {
    name: "Jacek",
    age: 55,
  },
  {
    name: "Tomek",
    age: 35,
  },
  {
    name: "Staszek",
    age: 22,
  },
  {
    name: "Marek",
    age: 27,
    surname: "Kowalski",
  },
];

const isIn = (filter, value) =>
  value.toLowerCase().includes(filter.toLowerCase());

const filterWith = (array, filter) => {
  if (!(array instanceof Array))
    throw new Error("First argument have to be array");
  if (!array.length)
    throw new Error("Array is empty, please enter array with data");

  if (typeof filter !== "string")
    throw new Error("Sought phrase must be a string");
  if (!filter.length) return array;
  if (filter.length <= 3) return [];

  return array.filter((item) => {
    for (const [key, value] of Object.entries(item)) {
      if (typeof value === "string") {
        if (isIn(filter, value)) return item;
      }
      if (isIn(filter, key)) return item;
    }
  });
};

module.exports = filterWith;