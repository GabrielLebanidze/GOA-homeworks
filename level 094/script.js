const idk = {
    "first name": "gabriel",
    age: 15,
    city: "tbilisi"
}

console.log(`My name is ${idk["first name"]} and i live in ${idk.city}`)

idk.height = "1.75m"
idk.age = 69
console.log(idk)

const newObject = {
    group(){
        console.log("i study in group 77")
    }
}

const myObject = {
    a: "gabro",
    b: "1.75m",
    c: 15,
    d: "spent 5k hrs on roblox",
    e: "tbilisi"
}

for (let i in myObject){
    console.log(i, myObject[i])
}

for (let i in myObject){
    delete myObject[i]
}
console.log(myObject)

let surname = "lebanidze"
for (let i in surname){
    console.log(surname[i])
}

// საიტერაციო ცვლადი ინახავს ინდექსს