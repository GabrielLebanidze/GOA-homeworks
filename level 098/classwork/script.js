const car1 = {
    brand: "toyota",
    model: "sedans",
    aboutCar() {
        return `this is ${this.brand} ${this.model}`
    }
}

const car2 = {
    brand: "porsche",
    model: "boxster",
    aboutCar() {
        return `this is ${this.brand} ${this.model}`
    }
}

let btn = document.getElementById("btn")
const users = []

const idk = (firstname, lastname) => {
    return {
        firstname,
        lastname
    }
}
btn.addEventListener("click", () => {
    const firstname = prompt()
    const lastname = prompt()
    users.push(idk(firstname, lastname))
    console.log(users)
})
