console.log(String('+50'),typeof String('+50'));
console.log(Number('100'),typeof Number('100')); //явное
console.log(Number('1'),typeof Number('1'));
console.log(String(1),typeof String(1));//явное
console.log(Boolean(0),typeof Boolean(0));//явное
console.log(Number('001'),typeof Number('001'));
console.log(Number('1'),typeof Number('1'));
console.log(Boolean(1),typeof Boolean(1));//явное
console.log(String(001),typeof String(001));//явное
console.log(Number('Hello World'),typeof Number('Hello World'));//явное

// 3 task
console.log(Number(console.log), Boolean(console.log), String(console.log));
console.log(Number({name: 'Maxim'}), Boolean({name: 'Maxim'}), String({name: 'Maxim'}));
console.log(Number(Number), Boolean(Number), String(Number));
console.log(Number(0), Boolean(0), String(0));
console.log(Number('-105'), Boolean('-105'), String('-105'));
console.log(Number('key'), Boolean('key'), String('key')); //symbol преобразовать нельзя

// 4 task
// 1 Nan
console.log(Number(' 1 2 3 4 5'));
// 2 NaN
console.log(Number('1234 5'));
// 3 12345
console.log(Number('12345'));
// 4 false
console.log(String(false));
// 5 false
console.log(Boolean(0000000));
// 6 true
console.log(Boolean(0.0000001));
// 7 undefined
console.log(String(undefined));
// 8 Nan
console.log(Number('100f'));
// 9 100
console.log(Number('100'));
// 10 1
console.log(Number('000001'));