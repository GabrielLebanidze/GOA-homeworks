// hoisting ნიშნავს, რომ შექმნილი ფუნქციის ზევითაც რომ დავწეროთ javascript მაინც გამოიძახებს ფუნქციას.
let name = "gabrieli"

switch(name) {
    case "davit":
        console.log("gaumarjos davit")
        break
    case "nikoloz":
        console.log("gaumarjos nikoloz")
        break
    case "vazha":
        console.log("gaumarjos vazha")
        break
    default:
        console.log("helo gabo")
}

function greet(name) {
    return `hello ${name}`
}

console.log(greet("gabo"))

function multiplication(a, b) {
    return a*b
}

console.log(multiplication(5, 5))

function substraction(a, b) {
    return a-b
}

console.log(substraction(7, 6))

function ageChecker(age) {
    age > 18 ? console.log("srulwlovani") : console.log("shen xar mozardi")
}

ageChecker(20)