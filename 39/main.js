// Задача 1
const person = {
  name: "Ivan",
  lastName: "Golusho",
  age: 20,
};

console.log(person);

// Задача 2

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ a: 1 }));

// Задача 3

const task = {
  title: "Da",
  description: "loremru",
  isCompleted: true,
};

function cloneAndModify(object, modifications) {
  const clonedObject = { ...object, ...modifications };

  for (let key in clonedObject) {
    console.log(`${key}: ${clonedObject[key]}`);
  }

  return clonedObject;
}

// Задача 4

function callAllMethods(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
}

const myObject = {
  method1() {
    console.log(`Метод 1 вызван`);
  },
  method2() {
    console.log(`Метод 2 вызван`);
  },
  property: `Это не метод`,
};

callAllMethods(myObject);
