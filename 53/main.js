"use strict";

// Задача 1

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задача 2
function getUserAverageAge(users) {
  let sumAge = 0;
  for (let i = 0; i < users.length; i++) {
    sumAge += users[i].age;
  }
  return sumAge / users.length;
}

console.log(getUserAverageAge(users));

// Задача 3

function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }
  return admins;
}

const adminUsers = getAllAdmins(users);
console.log(adminUsers);

// Задача 4

function first(arr, n) {
  if (n === 0) {
    return [];
  } else if (n === undefined) {
    return arr[0];
  } else if (n > arr.length) {
    console.error(`не может быть больше длинны массива: ${arr}`);
  }
  return arr.slice(0, n);
}

const numbers = [1, 2, 3, 4, 5];

console.log(first(numbers));
console.log(first(numbers, 0));
console.log(first(numbers, 3));
console.log(first(numbers, 10));

// 4 задача другой вариант без splice

function first(arr, n) {
  if (!Array.isArray(arr)) return [];
  if (n === undefined) return arr[0];
  if (n <= 0) return [];

  const result = [];
  const limit = Math.min(n, arr.length);

  for (let i = 0; i < limit; i++) {
    result.push(arr[i]);
  }

  return result;
}
