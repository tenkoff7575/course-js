const myName = 'Вячеслав';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Виталечка';
const reasonText = 'Бабки, бабки сука, баааабкии, сууукаааа';
const numberOfMonth = 'Я в JS на столько приисполнился, я буд-то написал тысячи и тысячи функций на миллионнах и миллионах файлах с расширеним .js';
console.log(`Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.`);
console.log(`Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца!`);

//task 2
let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth}. Я уверен, что пройду данный курс до конца!`
console.log(myInfoText.replaceAll('JavaScript',  'JAVASCRIPT'));
console.log(myInfoText.toUpperCase());
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[399]);

//task 3 and 4
const userName = prompt('Как вас зовут?');
const userAge = prompt('Сколько вам лет?');
alert(`Вас зовут ${userName.toUpperCase().trim()}`);
alert(`Вам ${Number(userAge.trim())} лет`);

//task 5
const userString = prompt('Введите текст для обрезки');
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');
const string = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(string);

//task 6
const userText = prompt('Введите текст');
const wordFromText = prompt('Введите слово из текста');
const indexOfWord = userText.indexOf(wordFromText);
const short = userText.slice(0, indexOfWord);
alert(short);

//additional task
const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
const split = javaScriptDescription.length /2;
const slice = javaScriptDescription.slice(split);
const uppercase = slice.replaceAll('а', 'А').replaceAll(' ', '').repeat(3);
const middle = uppercase.length /2;
console.log(uppercase[middle]);