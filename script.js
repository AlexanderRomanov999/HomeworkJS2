/*1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.*/
let num1 = Number(prompt("Введите первое число"));
let num2 = Number(prompt("Введите второе число"));
if (num1 <= 1) {
    console.log("num1 равна или меньше 1");
}
else {
    console.log("num1 больше 1");
}
if (num2 >= 3) {
    console.log("num2 больше или равна 3");
}
else {
    console.log("num2 меньше 3");
}
/*2
Перепишите код с использованием тернарного оператора*/
let test = true;
test === true ? console.log("+++") : console.log("---");
/*3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).*/
while (true) {
    let day = Number(prompt("Введите число от 1 до 31"));
    if (day < 1 || day > 31) {
        alert("Введите корректное число");
    }
    else {
        if (day >= 1 && day <= 10) {
            console.log("Первая декада");
        }
        if (day >= 11 && day <= 20) {
            console.log("Вторая декада");
        }
        if (day >= 21 && day <= 31) {
            console.log("Третья декада");
        }
        break;
    }
}
/*4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.*/
while (true) {
    let num = Number(prompt("Введите число"));
    if (num < 0) {
        alert("Введите корректное целое число")
    } 
    else {
        let temp = Math.floor(num / 100);
        let hundreds = temp % 10;
        temp = Math.floor(num / 10);
        let dozens = temp % 10;
        temp = num;
        let units = temp % 10;
        console.log("В числе " + num + " количество сотен: " + hundreds + ", десятков: " + dozens + ", единиц: " + units);
        break;
    }
}