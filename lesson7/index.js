//task 1

let health = prompt('Введите число параметра "здоровье" для персонажа');
 
if (health <= 0) {
    console.log(health);
   alert('Параметр "здоровье" должен быть больше нуля!');
} else {
   alert(`Параметр "здоровье" равен ${health}`);
};

//task 2

const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
 
if (temperatureInCelsius == 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
 
const temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);

//task 3

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;
 
for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
totalJuniorDevelopersSalary += salaryWithTax;
}
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);