let name = ('Slavka');
console.log(Number(name),Boolean(name));
let age = 26;
console.log(Boolean(age),String(age));
let loh = true;
console.log(Number(loh),String(loh));
let learn = null;
console.log(Number(learn), Boolean(learn), String(learn));
let notClear;
console.log(Number(notClear), Boolean(notClear), String(notClear));
let object ={
    name,
    age,
    loh,
}
console.log(Number(object), Boolean(object), String(object));
let big = 123n;
console.log(Number(big), Boolean(big), String(big));
let sy = Symbol('id');
console.log(Number(sy), Boolean(sy), String(sy));