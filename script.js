/* ==========================================================
   ЗАДАНИЕ 1: переменная с объектом "студент"
   ========================================================== */

let student = {
  firstName: "Иван",
  lastName: "Иванов",
  group: "IT-125",
  currentMonth: 3,
  isGraduate: false,
  direction: "Информационные технологии",
  monthsCompleted: 2
};

console.log("Задание 1 — объект student:");
console.log(student);


/* ==========================================================
   ЗАДАНИЕ 2: переменная с объектом "банковский счёт"
   ========================================================== */

let bankAccount = {
  accountNumber: "KZ12 3456 7890 1234",
  currency: "USD",
  balance: 15230.5,
  ownerName: "Иван Иванов",
  isBlocked: false
};

console.log("Задание 2 — объект bankAccount:");
console.log(bankAccount);


/* ==========================================================
   ЗАДАНИЕ 3: приветствие по имени и фамилии
   ========================================================== */

function greetUser() {
  let name = prompt("Введите ваше имя:");
  let surname = prompt("Введите вашу фамилию:");
  console.log(`Здравствуйте, ${name} ${surname}!`);
}

greetUser();


/* ==========================================================
   ЗАДАНИЕ 4: сравнение двух чисел
   ========================================================== */

function compareNumbers() {
  let num1 = Number(prompt("Введите первое число:"));
  let num2 = Number(prompt("Введите второе число:"));

  if (num1 > num2) {
    console.log(`Первое число больше: ${num1} > ${num2}`);
  } else if (num2 > num1) {
    console.log(`Второе число больше: ${num2} > ${num1}`);
  } else {
    console.log(`Числа равны: ${num1} = ${num2}`);
  }
}

compareNumbers();


/* ==========================================================
   ЗАДАНИЕ 5: светофор
   ========================================================== */

function trafficLight() {
  let color = prompt("Введите цвет светофора (красный/жёлтый/зелёный):")
    .toLowerCase()
    .trim();

  switch (color) {
    case "красный":
      console.log("Красный: Стой!");
      break;
    case "жёлтый":
    case "желтый":
      console.log("Жёлтый: Жди!");
      break;
    case "зелёный":
    case "зеленый":
      console.log("Зелёный: Иди!");
      break;
    default:
      console.log("Такого цвета на светофоре нет.");
  }
}

trafficLight();


/* ==========================================================
   ЗАДАНИЕ 6: конвертер чисел (1-9) в римские
   ========================================================== */

function toRoman() {
  let romanNumbers = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX"
  };

  let num = Number(prompt("Введите число от 1 до 9:"));

  if (romanNumbers[num]) {
    console.log(`${num} -> ${romanNumbers[num]}`);
  } else {
    console.log("Нужно ввести целое число от 1 до 9!");
  }
}

toRoman();