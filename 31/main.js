//  Задача 1

function calculateFinalPrice(price, discount, bet) {
  const priceAfterDiscount = price * (1 - discount / 100);

  const finalPrice = priceAfterDiscount * (1 + bet);

  return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2

function checkAccess(userName, password) {
  return userName === "admin" && password === 123456;
}

const userName = prompt("Введите имя");
const password = prompt("Введите пароль");

if (checkAccess(userName, Number(password))) {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}

//  Задача 3

function currentTime(time) {
  if (time <= 5) {
    alert("Ночь");
  } else if (time <= 11) {
    alert("Утро");
  } else if (time <= 17) {
    alert("День");
  } else if (time <= 23) {
    alert("Вечер");
  } else {
    alert("Некорректное время");
  }
  return currentTime;
}

currentTime(4);

//  Задача 4

function findFirstEven(start, end) {
  for (i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
  return findFirstEven;
}

console.log(findFirstEven(11, 16));
