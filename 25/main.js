//  Задача 1

for (i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

//  Задача 2

let number = +prompt("Введите число для факториала", 1);
let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(`Факториал ${number} = ${factorial}`);

//  Задача 3

let line = "";

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      line += "ч ";
    } else {
      line += "б ";
    }
  }
  line += "\n";
}

console.log(line);
