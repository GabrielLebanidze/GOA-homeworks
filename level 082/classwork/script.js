// arrow function-ით ვქმნით ფუნქციას. ის ფუნქციის შექმნის უფრო ადვილი გზაა.
const getAge = age => age * 2

console.log(getAge)

const sayHello = name => `Hi, ${name}`

console.log(sayHello("gabro"))

function double(number = 2){
    return number*2
}

console.log(double(5))

function divide(number = 2){
    let num = double(number)
    return num/2
}

console.log(divide(5))

function idk(hm){
    return hm
}

console.log(idk("idk"))

const lol = function(gugugaga = 2){
    return gugugaga**2
}

console.log(lol(4))

const idontknow = lel => `hello my friend, ${lel}`

console.log(idontknow("giorgi"))