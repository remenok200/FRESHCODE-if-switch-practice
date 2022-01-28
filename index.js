/* ЗАДАНИЕ 1.
С помощью условной конструкции if ... else реализовать функцию которая будет принимать строку 
в которой описан текущий цвет светофора и которая будет говорить пользователю, 
какое действие ему сейчас можно делать в виде строки. (красный => стоять  и тд)
 */

const whatToDoAtTrafficLights = function(color) {
    if (typeof color !== "string") return 'ERROR! Напишите цвет светофора, это должна быть строка!';
    
    if (color.toLowerCase() === "красный") return 'Сейчас красный! Стой на месте.';
    else if (color.toLowerCase() === "желтый") return 'Сейчас желтый! Стой на месте.';
    else if (color.toLowerCase() === "зеленый") return 'Сейчас зеленый! Можешь идти.';
    
    return 'Цвет, что Вы передаете (' + color + ') к цветам светофора не относится.';
}

console.log(whatToDoAtTrafficLights(123));
console.log(whatToDoAtTrafficLights('красный'));
console.log(whatToDoAtTrafficLights('желтый'));
console.log(whatToDoAtTrafficLights('зеленый'));
console.log(whatToDoAtTrafficLights('оранжевый'));



/* ЗАДАНИЕ 2.
Реализовать калькулятор с помощью конструкции switch. 
Калькулятор будет принимать 2 числа и оператор и возвращать реузльтат математических операций сложения, 
вычитания, деления и умножения. 
*/

const calculator = function(operator, number1, number2) {
    if (typeof operator !== 'string' || typeof number1 !== 'number' || typeof number2 !== 'number')
    return 'ERROR! Поместите оператор в кавычки, а операнды должны быть числами. Проверьте, что передаете!';

    result = 0;

    switch(operator) {
        case '+': {
            result = number1 + number2;
            break;
        }
        case '-': {
            result = number1 - number2;
            break;
        }
        case '/': {
            result = number1 / number2;
            break;
        }
        case '*': {
            result = number1 * number2;
            break;
        }
        default: {
            result = 'Сообщение внутри калькулятора: Я не смог распознать знак выражения!';
        }
    }

    return result;
}

console.log(calculator('/', '2', 3));
console.log(calculator('+', 2, 5));
console.log(calculator('-', 5, 2));
console.log(calculator('/', 10, 5));
console.log(calculator('*', 3, 5));
console.log(calculator('**', 2, 5));



/* ЗАДАНИЕ 3.
Реализовать функцию которая будет принимать месяц в виде числа 
и будет возвращать к какому сезону он относится. 
Условную конструкцию используте на свое усмотрение
*/

const whatTimeOfYear = function(number) {
    if (typeof number !== 'number') return 'ERROR! Введите номер месяца! Номер месяца - это число.';

    result = '';
    
    switch(number) {
        case 12: 
        case 1: 
        case 2: {
            result = 'Вы ввели ' + number + ' месяц, это ЗИМА.';
            break;
        }

        case 3: 
        case 4: 
        case 5: {
            result = 'Вы ввели ' + number + ' месяц, это ВЕСНА.';
            break;
        }

        case 6: 
        case 7: 
        case 8: {
            result = 'Вы ввели ' + number + ' месяц, это ЛЕТО.';
            break;
        }

        case 9: 
        case 10: 
        case 11: {
            result = 'Вы ввели ' + number + ' месяц, это ОСЕНЬ.';
            break;
        }

        default: {
            result = 'Что-то пошло не так!';
        }
    }

    return result;
}

// Да, циклы еще не изучали, но ведь сегодня, по идее, начнем :DD)
for(let i = 0; i <= 12; i++)
console.log(whatTimeOfYear(i));