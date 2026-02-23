const numbers = [1, 2, 3, 4, 5];
numbers.forEach((a, b, c) => {
    console.log(a)
})
const names = ["John", "Sarah", "Mike"];
names.forEach((a, b, c) => console.log(`hello, ${a}`))
let jami = 0
numbers.forEach((a, b, c) => {
    let jami = 0
    jami += a
})
console.log(jami)
const words = ["javascript", "is", "awesome"];
words.forEach((a, b, c) => console.log(a, a.length))
names.forEach((a, b, c) => console.log(`${b} - ${a}`))


console.log(numbers.map((a) => a * 2))
const temperatures = [0, 5, 10, 20]
console.log(temperatures.map((a) => a * 9/5 + 32))
console.log(names.map((a) => a.toUpperCase()))
const users = [
    { name: "John", age: 20 },
    { name: "Sarah", age: 25 }
];
console.log(users.map((a) => a.name))
console.log(numbers.map((a)=> `Number: ${a}`))