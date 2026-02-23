// foreach გამოიყენება სიაზე გადასავლელად. გამოიყენება მნიშვნელობების დასაბრუნებლად.
// map გამოიყენაბა იმისთვის რომ სიას გადავუაროთ და შევქმნათ ახალი სია, სადაც პირველი სიის მნიშვნელობები შეცვლილი იქნება.
// filter გამოიყენება სიის გაფილტვრისთვის. თუ filter-ში პირობა არ არის true, მაშინ მნიშვნელობა არ ემატება ახალ სიაში.
// reduce გამოიყენება იმისთვის რომ მაგ: სიაში ყველა რიცხვის ჯამი დავაბრუნოთ.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
nums.forEach((a) => console.log(`number is: ${a}`))

console.log(nums.filter((a) => a % 2 == 0 && a > 5))

let sum = nums.reduce((a, b) => {
    return a + b
}, 0)
console.log(sum/nums.length)

let idk = nums.filter((a) => a % 2 == 0)
let idk1 = idk.map((a) => a * 3)
let idk2 = idk1.reduce((a, b) => {
    return a+b
}, 0)