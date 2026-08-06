const first = {brand: "android", model: "galaxy S26 ultra"}
const second = {brand: "iphone", model: "iphone 69 ultra mega pro max"}

const aboutTelephone = function(a){
    return `this is ${a.brand} ${a.model}`
}

console.log(aboutTelephone(first))

const idk = function(a, b, c){
    return {
        hobby1: a,
        hobby2: b,
        hobby3: c,
        myHobbies(){
            console.log(`my hobbies are ${this.hobby1}, ${this.hobby2} and ${this.hobby3}`)
        }
    }
}

const factory = function(a, b, c){
    return {
        firstName: a,
        lastName: b,
        age: c
    }
}

const inputs = function(){
    const a = prompt("ur name")
    const b = prompt("last name")
    const c = prompt("age")
    factory(a, b, c)
}

