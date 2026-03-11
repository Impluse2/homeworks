// Задача 1
const number = 20;

if (number % 2 === 0) {
  console.log("Число четное ");
} else {
  console.log("Число не четное");
}

// Задача 2
const age = 20;

const discount = age < 18 ? 10 : age > 18 && age <= 65 ? 20 : age > 65 ? 30 : 0;

console.log("Скидка", discount + "%");

switch (true) {
  case age < 18:
    console.log("Скидка 10%");
    break;
  case age > 18 && age <= 65:
    console.log("Скидка 20%");
    break;
  case age > 65:
    console.log("Скидка 30%");
    break;
}

// Задача 3
const userName = prompt("Введите логин");
const password = prompt("Введите пароль");

if ((userName === "admin" || userName === "user") && password === "12345") {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}

// Задач 4
const weight = +prompt("Введите вес посылки");
const typeDelivery = prompt("Введите тип доставки");
let price = 0;
let ratio = 0;
let sumPrice = 0;

if (weight <= 0) {
  alert("Некорректный вес посылки");
} else if (
  !(
    typeDelivery === "Стандарт" ||
    typeDelivery === "Экспресс" ||
    typeDelivery === "Премиум"
  )
) {
  alert("Неверный тип доставки");
}

if (weight < 1) {
  price = 5;
} else if (weight > 1 && weight <= 5) {
  price = 10;
} else weight > 5;
  price = 15;

switch (typeDelivery) {
  case "Стандарт":
    ratio = 1;
    break;
  case "Экспресс":
    ratio = 1.5;
    break;
  case "Премиум":
    ratio = 2;
    break;
}

sumPrice = price * ratio;

alert("Итоговая стоимость доставки: " + sumPrice + "$");
