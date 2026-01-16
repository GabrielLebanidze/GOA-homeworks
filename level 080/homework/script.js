// hoisting ნიშნავს, რომ შექმნილი ფუნქციის ზევითაც რომ დავწეროთ javascript მაინც გამოიძახებს ფუნქციას.
let idk = 90

switch(idk) {
    case 90:
        console.log("the number is 90")
        break
    default:
        console.log("the number is not 90")
}

function division(a, b) {
    return a/b
}

function powerOf(a, b) {
    return a**b
}

function returnPi() {
    return Math.PI
}