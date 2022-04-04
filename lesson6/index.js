//task 1

const userLogin = prompt('Введите логин');
const userPassword  = prompt('Введите пароль');
const existedUserLogin = ('the_best_user');
const existedUserPassword = ('12345678');
if 
    (userLogin.trim() === existedUserLogin && userPassword.trim() === existedUserPassword){
    alert(`Добро пожаловать ${existedUserLogin}!`);}
else {
    alert('Логин и (или) Пароль введены неверно!')};

//task 2

for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
    }
 }

i = 0;
 while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`)
        i += 1;
    }
};

i = 0;
do {
    let newStudent = prompt('Введите имя нового студента!');
        newStudent = newStudent.trim();
        if (newStudent) {
            alert(`Добро пожаловать, ${newStudent}!`)
            i += 1;}
} while (i < 3);

// task 3
let sum = 0;
for (let i = 0; i <= 100; i+=1){
    sum += i;
    console.log(sum);
}

//task 4
let question1 = prompt('Сколько будет 2 + 2?');
let answer1 = (4);
let correctAnswers = (0);
let incorrectAnswers = (0);
if 
    (Number(question1.trim()) === answer1){
    alert('Ответ Верный');
    correctAnswers ++;}
else {
    alert('Ответ Неверный')
    incorrectAnswers ++};
let question2 = prompt('Сколько будет 2 * 2?');
let answer2 = (4);4
if 
    (Number(question2.trim()) === answer2){
    alert('Ответ Верный');
    correctAnswers ++;}
else {
    alert('Ответ Неверный')
    incorrectAnswers ++};
let question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
let answer3 = (1);
if 
    (Number(question3.trim()) === answer3){
    alert('Ответ Верный');
    correctAnswers ++;}
else {
    alert('Ответ Неверный')
    incorrectAnswers ++};
let question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
let answer4 = (12);
if 
    (Number(question4.trim()) === answer4){
    alert('Ответ Верный');
    correctAnswers ++;}
else {
    alert('Ответ Неверный')
    incorrectAnswers ++};
let question5 = prompt('Сколько будет 2 + 2 * 2?');
let answer5 = (6);
if 
    (Number(question5.trim()) === answer5){
    alert('Ответ Верный');
    correctAnswers ++;}
else {
    alert('Ответ Неверный')
    incorrectAnswers ++};
alert(`Конец теста! Правильные ответы - ${correctAnswers} Неправильные ответы - ${incorrectAnswers}.`);

//task 5
const clientName = ('Игорь');
let clientSpentForAllTime = (110);
let clientSpentToday = (25);
let discount = (0);
clientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
if
    (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300){
        discount = (10);
        let price = (clientSpentToday) - clientSpentToday / 100 * discount;
        alert(`Вам предоставляется скидка в ${discount}%!`);
        alert(`Спасибо, ${clientName}! К оплате ${price}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`);
    }
else if
    (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500){
        discount = (20);
        let price = (clientSpentToday) - clientSpentToday / 100 * discount;
        alert(`Вам предоставляется скидка в ${discount}%!`);
        alert(`Спасибо, ${clientName}! К оплате ${price}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`);
    }
else if
(clientSpentForAllTime > 500){
    discount = (30);
    let price = (clientSpentToday) - clientSpentToday / 100 * discount;
    alert(`Вам предоставляется скидка в ${discount}%!`);
    alert(`Спасибо, ${clientName}! К оплате ${price}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`);
};

//task 6

clientName = prompt('Введите имя клиента');
clientSpentToday = prompt('Сколько клиент потратил сегодня?');
clientSpentForAllTime = prompt('Сколько клиент потратил за все время?');
clientSpentForAllTime = Number(clientSpentForAllTime) + Number(clientSpentToday);
if
    (Number(clientSpentForAllTime) >= 100 && Number(clientSpentForAllTime) <= 300){
        discount = (10);
        let price = Number(clientSpentToday) - Number(clientSpentToday) / 100 * discount;
        alert(`Итоговая скидка клиента, ${clientName} =${discount}% ! К оплате ${price}$.`);
    }
else if
    (Number(clientSpentForAllTime) > 300 && Number(clientSpentForAllTime) <= 500){
        discount = (20);
        let price = Number(clientSpentToday) - Number(clientSpentToday) / 100 * discount;
        alert(`Итоговая скидка клиента, ${clientName} =${discount}% ! К оплате ${price}$.`);
    }
else if
(Number(clientSpentForAllTime) > 500){
    discount = (30);
    let price = Number(clientSpentToday) - Number(clientSpentToday) / 100 * discount;
    alert(`Итоговая скидка клиента, ${clientName} =${discount}% ! К оплате ${price}$.`);
}
else if
(typeof clientSpentToday === 'string' || typeof clientSpentForAllTime === 'string'){
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.');
};
