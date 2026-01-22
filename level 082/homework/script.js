// ჩვეულებრივ function-სა და arrow function-ს შორის განსხვავება ისაა, რომ arrow function-ის გამოყენებით უფრო ადვილად ვქმნით ფუნქციას, ერთ ხაზში.

const multiplyByThree = (number=2) => number * 3

console.log(multiplyByThree(4))

const isAdult = age => age >= 18 ? true : false

console.log(isAdult(17))

const idk = num => num

const plus10 = num => idk(num) + 10

console.log(plus10(5))

function java(){
    return "JavaScript is fun"
}

console.log(java())

const idk1 = function(){
    return "JavaScript is fun"
}

console.log(idk1())

const idk2 = () => "JavaScript is fun"

console.log(idk2())